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

const systemDic = [
  {systemCode:1,systemName: 'mail'},
  {systemCode:2,systemName: 'chatwork'},
  {systemCode:3,systemName: 'office365'},
  {systemCode:4,systemName: 'cybouzu'},
  {systemCode:5,systemName: 'nas'},
];

const AccountTab: FC<{data_kindname:string,data:AccountItem,
  id_title:string,editable:boolean}> = 
  (props:{data_kindname:string,data:AccountItem,id_title:string,editable:boolean}) => {

  const classes = useStyle();

  const [accountInfo, setAccountInfo] = useState<AccountInfo[]>([]);
  const [isLoading,setIsLoading] = useState(false);
  const [systemCode,setSystemCode] = useState(0);

  const columns:any = [
    { title: 'companycode', field:'companyCode', hidden:true},
    { title: 'temporaryEmployeeCode',  field:'temporaryEmployeeCode', hidden: true},
    { title: 'systemCode', field:'systemCode',hidden: true},
    { title: 'No',field:'seqNo',editable: 'never',hidden:true},
    {
      title: props.id_title,field:'idNumber'
    },
    { 
      title: 'パスワード', field:'passWord'
    }
  ];



  useEffect(() => {
    if(props.data.employeecode === null) return;

    setIsLoading(true);
    const systemcode:number | undefined = systemDic.find((value) => value.systemName === props.data_kindname)?.systemCode
    
    if(systemcode !== undefined) setSystemCode(parseInt(systemcode.toString()));

    const fetchData = async () => await axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetAccountInfoBySystem/
      ${props.data.companycode}/${props.data.employeecode}/${systemcode}`)
      .then((result) => {
        setAccountInfo(result.data);   
        setIsLoading(false); 
      });
    fetchData();
  },[props]);

  const PostItem = (item:AccountInfo) => {
    setIsLoading(true);

    const uploadData:AccountInfo = {companyCode:props.data.companycode,
      temporaryEmployeeCode:props.data.employeecode,
      systemCode:systemCode,seqNo:item.seqNo === undefined ? 1 : item.seqNo,
      idNumber:item.idNumber,passWord:item.passWord};

    console.log(uploadData);
      
    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostAccountInfo`,uploadData)
      .then((result) => {
        axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetAccountInfoBySystem/
          ${uploadData.companyCode}/${uploadData.temporaryEmployeeCode}/${systemCode}`)
          .then((result) => {
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
          onRowUpdate: props.editable ? (newData:AccountInfo,oldData:any) => 
            new Promise((resolve:any,reject:any) => {
              const dataUpdate = [...accountInfo];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setAccountInfo([...dataUpdate]);
              PostItem(newData);
              resolve();
            }) : undefined,
            onRowAdd: props.editable ? (newData: AccountInfo) => 
            new Promise((resolve:any,reject:any) => {
              setAccountInfo([newData, ...accountInfo]);
              PostItem(newData);
              resolve();
            }) : undefined,
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