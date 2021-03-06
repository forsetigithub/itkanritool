import React, {FC} from 'react';
// import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';
import axios from 'axios';
import * as PROPS from '../App.properties';
import {PCItem} from '../Interface';


const PCAssetList:FC<{editable:boolean}> = (props:{editable:boolean}) => {
  const columns:any = [
    {
      title: 'No',field: 'pcItemCode',
      hidden:true,
    },
    {
      title: '備品番号',field: 'itemNumber',
      align: 'center',
      headerStyle:{
  
        minWidth:20
      }
    },
    {
      title: 'メーカー',field:'makerCode',lookup: 
      {1:'DELL',2:'HP',3:'Apple',4:'Microsoft',5:'acer'},
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    { 
      title: '型番', field:'pcTypeNumber'
    },
    { 
      title: 'サービスタグ', field:'pcServiceTag'
    },
    { 
      title: 'シリアル番号', field:'serialNo'
    },
    { 
      title: '種別', field:'pcKindCode',lookup: {1:'デスクトップ',2:'ノート'},
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    {
      title: '保証期間', field:'warrantyPeriod',type:'date',
      headerStyle:{
        width:100,
        minWidth:100,
      },
      cellStyle:{
        minWidth:80,
      },
      // render: (rowData:any) => (<Moment format="YYYY-MM-DD">{rowData.warrantyPeriod}</Moment> )
    
    },
    // {
    //   title: '保証', field:'warranty',editable: 'never'
    // },
    { 
      title: '備考', field:'pcMemo'
    },  
  ];

  const updateDataHandler = (item: PCItem) => {
    console.log('PCAssetList:');
    
    if(item.pcItemCode === undefined){
      item.pcItemCode = -1;
    }

    let uploadData:PCItem = item;

    if(uploadData.makerCode !== undefined) {
      uploadData.makerCode = parseInt(uploadData.makerCode.toString()); 
    }
    if(uploadData.pcKindCode !== undefined) {
      uploadData.pcKindCode = parseInt(uploadData.pcKindCode.toString());
    }
      
    console.log(uploadData);

    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostPCItem`,uploadData);
  };

  const deleteDataHandler = (item: any) => {

  };
  
  return(
    <MaterialTableCustom<PCItem> columns={columns} getParam="getpcitems"
      editable_mode={props.editable} 
      updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler} />

  );
};

export default PCAssetList;