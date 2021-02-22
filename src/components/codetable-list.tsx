import React,{FC} from 'react';
import MaterialTableCustom from './materialtable-custom';

export type CodeItem = {
  codeKindID: number;
  codeKindName: string;
  codeID: number;
  codeName: string;
  orderNumber?: number;
};


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

  const updateDataHandler = (item: CodeItem) => {

  };

  const deleteDataHandler = (item :CodeItem) => {

  };

  return(
    <MaterialTableCustom<CodeItem> columns={columns} getParam="GetMstCodeTable" 
      updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler}  />
  );
}

export default CodeTableList;