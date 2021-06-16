import React,{FC} from 'react';
import MaterialTableCustom from './materialtable-custom';
import axios from 'axios';

import * as PROPS from '../App.properties';

export type CodeItem = {
  codeKindID: number;
  codeKindName: string;
  codeID: number;
  codeName: string;
  orderNumber?: number;
};


const CodeTableList:FC<{editable:boolean}> = (props:{editable:boolean}) => {

  const codeKindDic = [
    {codeKindID:0, codeKindName:'会社名'},
    {codeKindID:1, codeKindName:'部署名'},
    {codeKindID:2, codeKindName:'雇用区分'},
    {codeKindID:3, codeKindName:'メーカー名'},
    {codeKindID:4, codeKindName:'ハードウェア種別'},
    {codeKindID:5, codeKindName:'システム名'},
    {codeKindID:6, codeKindName:'資産種別'},
    {codeKindID:7, codeKindName:'使用状況'},
  ];
  
  const columns:any = [
    {
      title: 'コード種別',field: 'codeKindID',
      lookup: codeKindDic.reduce((acc:any,cur,i) => {
        acc[cur.codeKindID] = cur.codeKindName;
        return acc;
      },{}),
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

  const PostItem = (item: CodeItem) => {

    item.codeKindName = codeKindDic[item.codeKindID].codeKindName;
    item.orderNumber = 0;
    
    const postData: CodeItem = {codeKindID: parseInt(item.codeKindID.toString()),codeKindName:item.codeKindName,
      codeID: parseInt(item.codeID.toString()),codeName:item.codeName,orderNumber:item.orderNumber};            

    axios.post(`${PROPS.BASE_API_PATH}/PostMstCodeTable`,postData)
      .then((result) => {
        // axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetEmployees`)
        //   .then((result) => {

        //   });
      });   
  }

  const updateDataHandler = (item: CodeItem) => {
    PostItem(item);
  };

  const deleteDataHandler = (item :CodeItem) => {

  };

  return(
    <MaterialTableCustom<CodeItem> columns={columns} getParam="GetMstCodeTable"
      editable_mode={props.editable} 
      updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler}  />
  );
}

export default CodeTableList;