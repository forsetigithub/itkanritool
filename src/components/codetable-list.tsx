import React,{FC} from 'react';
import MaterialTableCustom from './materialtable-custom';

const CodeTableList:FC<any> = () => {
  const columns:any = [
    {
      title: 'コード種別',field: 'codeKindID',
      lookup: {
        0:'会社名',
        1:'部署名',
        2:'雇用区分',
        3:'メーカー名',
        4:'ハードウェア種別',
        5:'システム名',
        6:'資産種別',
      },
      align: 'left',
      headerStyle:{
     
        minWidth:70
      },
      cellStyle:{
        minWidth:20
      }
    },
    {
      title: 'コードNo',field: 'codeID',
    },
    {
      title: 'コード名称',field: 'codeName',
      align: 'left',
      headerStyle:{
     
        minWidth:70
      },
      cellStyle:{
        minWidth:20
      }
    },    
];

  return(
    <MaterialTableCustom columns={columns} getParam="GetMstCodeTable" />
  );
}

export default CodeTableList;