import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';

import * as PROPS from '../App.properties';
import {AccountInfo,AccountItem} from '../Interface';

import axios from 'axios';



const AccountTab: FC<{data_kindname:string,data:AccountItem,
  id_title:string,editable:boolean}> = 
  (props:{data_kindname:string,data:AccountItem,id_title:string,editable:boolean}) => {

  const [accountInfo, setAccountInfo] = useState<AccountItem[]>([]);

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

    console.log(uploadData);
    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostAccountInfo`,uploadData)
      .then((result) => {
        // axios.get(`${PROPS.BASE_URL}/api/itmanagement/getvpcitems`);
      });
  };

  return(
    <React.Fragment>
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