import React, {FC,useState,useEffect} from 'react';
// import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';
import axios from 'axios';
import * as PROPS from '../App.properties';
import {PCItem} from '../Interface';
import {GetCodeListItems, GetPCMakerCodeItems } from '../api';

const PCAssetList:FC<{editable:boolean}> = (props:{editable:boolean}) => {
  const [makerListItems,setMakerlistItems] = useState<{}>({});
  const [pcKindListItems,setPcKindListItems] = useState<{}>({});
  const [assetKindListeItems,setAssetKindListeItems] = useState<{}>({});
  const [useStatusListItems,setUseStatusListItems] = useState<{}>({});

  useEffect(() => {
    try{
      GetPCMakerCodeItems()
        .then((result) => {
          setMakerlistItems(result);
      });

      GetCodeListItems(4)
        .then((result) => {
          setPcKindListItems(result);
        });

      GetCodeListItems(6)
        .then((result) => {
          setAssetKindListeItems(result);
        });

      GetCodeListItems(7)
        .then((result) => {
          setUseStatusListItems(result);
        });

    }catch(error){

    }finally{

    }

  },[setMakerlistItems,setPcKindListItems,setAssetKindListeItems,setUseStatusListItems]);

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
      title: 'メーカー',field:'makerCode',lookup: makerListItems,
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
      title: '種別', field:'pcKindCode',lookup: pcKindListItems,
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
      title: '資産種別',field: 'assetKindCode',type:'number',lookup : assetKindListeItems
    },
    {
      title: 'PC名', field:'computerName'
    },
    {
      title: '状況',field:'useStatus',type:'number',lookup:useStatusListItems
    },
    { 
      title: '備考', field:'pcMemo'
    },  
  ];

  const updateDataHandler = (item: PCItem) => {

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