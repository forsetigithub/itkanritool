import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';


export interface AccountItem {
  employeecode:number;
  id:string;
  pw:string;
}

const AccountTab: FC<any> = (props:{data_kindname:string,data:AccountItem,id_title:string}) => {

  const [accountInfo, setAccountInfo] = useState<AccountItem[]>([]);

  const [columns, setColumns] = useState<any>([
    {
      title: props.id_title,field:'id'
    },
    { 
      title: 'パスワード', field:'pw'
    }
  ]);

  useEffect(() => {
    console.log(props.id_title);
    setAccountInfo([...accountInfo,{employeecode:props.data.employeecode,
      id:props.data.id,pw:props.data.pw}]);
  },[]);

  return(
    <div>
    <MaterialTable 
      title=""
      columns={columns}
      localization={{
        header:{
          actions:''
        }
      }}
      data={[...accountInfo]}
      icons={tableIcons}
      editable={{
        onRowUpdate:(newData:any,oldData:any) => 
          new Promise((resolve:any,reject:any) => {
            const dataUpdate = [...accountInfo];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setAccountInfo([...dataUpdate]);
            resolve();
          })
      }}
      options={{
        filtering:false,
        search:false,
      }}
    />
    </div>
  );
}

export default AccountTab;