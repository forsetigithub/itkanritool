import React,{FC, useEffect, useState} from 'react';
import { createStyles, makeStyles,Theme } from '@material-ui/core';
import MaterialTable from 'material-table';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {tableIcons} from './tableIcons';

import * as PROPS from '../App.properties';
import {AccountInfo,AccountItem} from '../Interface';

import axios from 'axios';

const useStyle = makeStyles((theme: Theme) =>
createStyles({
root : {
  //svgタグ以外を反映
  '& *:not(svg)': {
     "font-size": 'calc(8px + 1vmin)'
  },
},
backdrop: {
  zIndex: theme.zIndex.drawer + 1, 
},
}));

const AccountTab: FC<{data_kindname:string,data:AccountItem,
  id_title:string,editable:boolean}> = 
  (props:{data_kindname:string,data:AccountItem,id_title:string,editable:boolean}) => {

  const classes = useStyle();

  const [accountInfo, setAccountInfo] = useState<AccountItem[]>([]);
  const [isLoading,setIsLoading] = useState(false);

  const columns:any = [
    { title: 'companycode', field:'companycode', hidden:true},
    { title: 'employeecode',  field:'employeecode', hidden: true},
    { title: 'data_kindname', field:'data_kindname',hidden: true},
    { title: 'No',field:'seqno',editable: 'never',hidden:true},
    {
      title: props.id_title,field:'id'
    },
    { 
      title: 'パスワード', field:'pw'
    }
  ];

  useEffect(() => {
    setAccountInfo([{companycode:props.data.companycode,employeecode:props.data.employeecode,
      seqno:props.data.seqno,id:props.data.id,pw:props.data.pw}]);
  },[props]);

  const PostItem = (item:AccountItem) => {
    setIsLoading(true);

    let codeID = -1;
    switch(props.data_kindname){
      case 'mail':
        codeID = 1;
        break;
      case 'chatwork':
        codeID = 2;
        break;
      case 'cybouzu':
        codeID = 4;
        break;
    }

    const uploadData:AccountInfo = {companyCode:item.companycode,temporaryEmployeeCode:item.employeecode,
      systemCode:codeID,seqNo:item.seqno,iDNumber:item.id,passWord:item.pw};

    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostAccountInfo`,uploadData)
      .then((result) => {
        axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetAccountInfoBySytem/
          ${item.companycode}/${item.employeecode}/${codeID}`)
          .then((result) => {
            // console.log(result.data[0]);
            // const resultdata = result.data[0] as AccountInfo;
            // setAccountInfo([{companycode:props.data.companycode,employeecode:props.data.employeecode,
            //   seqno:props.data.seqno,id:resultdata.iDNumber,pw:resultdata.passWord}]);
            setIsLoading(false);
          });

      });
  };

  return(
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>
      <MaterialTable 
        columns={columns}
        localization={{
          header:{
            actions:''
          }
        }}
        data={[...accountInfo]}
        icons={tableIcons}
        editable={{
          onRowUpdate: props.editable ? (newData:AccountItem,oldData:any) => 
            new Promise((resolve:any,reject:any) => {
              const dataUpdate = [...accountInfo];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setAccountInfo([...dataUpdate]);
              PostItem(newData);
              resolve();
            }) : undefined
        }}
        options={{
          filtering:false,
          search:false,
          showTitle:false,
        }}
      />
    </React.Fragment>
  );
}

export default AccountTab;