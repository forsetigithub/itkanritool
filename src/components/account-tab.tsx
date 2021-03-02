import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';

// import * as PROPS from '../App.properties';

// import axios from 'axios';

export interface AccountItem {
  employeecode:number;
  id:string;
  pw:string;
}


// type AccountInfo = {
//   companyCode:number;
//   temporaryEmployeeCode:number;
//   systemCode:number;
//   seqNo:number;
//   iDNumber:string;
//   passWord:string;
// };

const AccountTab: FC<{data_kindname:string,data:AccountItem,
  id_title:string,editable:boolean}> = (props:{data_kindname:string,data:AccountItem,
  id_title:string,editable:boolean}) => {

  const [accountInfo, setAccountInfo] = useState<AccountItem[]>([]);

  const columns:any = [
    {
      title: props.id_title,field:'id'
    },
    { 
      title: 'パスワード', field:'pw'
    }
  ];

  useEffect(() => {
    setAccountInfo([{employeecode:props.data.employeecode,
      id:props.data.id,pw:props.data.pw}]);
  },[props]);

  const PostItem = (item:any) => {
    // axios.post(`${PROPS.BASE_URL}/`);
    console.log(item);
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
          onRowUpdate: props.editable ? (newData:any,oldData:any) => 
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