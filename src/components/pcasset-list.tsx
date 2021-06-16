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
      {1:'DELL',2:'HP',3:'Apple',4:'Microsoft',5:'acer',19:'富士通',99:'その他'},
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
      title: '種別', field:'pcKindCode',lookup: {1:'デスクトップ',2:'ノート',999:'未指定'},
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
    //   title: '保証', field:'warranty',editable: 'never',lookup: {1:'有効',0:'無効'},
    //   render: (rowData:any) => (Date.parse( rowData.warrantyPeriod) >= Date.now() ? 1 : 0)
    // },
    {
      title: '資産種別',field: 'assetKindCode',type:'number',lookup : {1: '本社',2: '久留米',3:'リース',999:'未指定'}
    },
    {
      title: 'PC名', field:'computerName'
    },
    {
      title: '状況',field:'useStatus',type:'number',lookup: {1: '使用中',2: '予備',3:'修理中',4:'故障',5:'破棄・返却'}
    },
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

    if(uploadData.assetKindCode !== undefined) {
      uploadData.assetKindCode = parseInt(uploadData.assetKindCode.toString());
    }

    if(uploadData.useStatus !== undefined && uploadData.useStatus !== null) {
      uploadData.useStatus = parseInt(uploadData.useStatus.toString());
    }
      
    axios.post(`${PROPS.BASE_API_PATH}/PostPCItem`,uploadData);
  };

  const deleteDataHandler = (item: PCItem) => {
    axios.post(`${PROPS.BASE_API_PATH}/DeletePCItem`,item);
  };
  
  return(
    <MaterialTableCustom<PCItem> columns={columns} getParam="getpcitems"
      editable_mode={props.editable} 
      updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler} />

  );
};

export default PCAssetList;