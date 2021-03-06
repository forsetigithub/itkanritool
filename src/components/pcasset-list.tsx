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

    // let uploadData:PCItem = {
    //   pCItemCode:-1,
    //   itemNumber:item.itemNumber,
    //   makerCode:item.makerCode,
    //   pCTypeNumber:item.pCTypeNumber,
    //   pCKindCode:item.pCKindCode,
    //   pCServiceTag:item.pCServiceTag,
    //   pCMemo:item.pCMemo,
    //   monitorNumber1:item.monitorNumber1,
    //   monitorNumber2:item.monitorNumber2,
    //   monitorNumber3:item.monitorNumber3,
    //   monitorMemo:item.monitorMemo,
    //   mouseNumber:item.mouseNumber,
    //   mouseMemo:item.mouseMemo,
    //   keyboardNumber:item.keyboardNumber,
    //   keyboardMemo:item.keyboardMemo,
    //   warrantyPeriod:item.warrantyPeriod,
    //   vPNSettingFlag:item.vPNSettingFlag,
    //   currentOwnerCompanyCode:item.currentOwnerCompanyCode,
    //   currentOwnerEmployeeCode:item.currentOwnerEmployeeCode,
    //   assetKindCode:item.assetKindCode
    // };
    
    let uploadData:PCItem = item;
    if(uploadData.pCItemCode === undefined) {
      uploadData.pCItemCode = -1;
    }

    if(uploadData.makerCode !== undefined) {
      uploadData.makerCode = parseInt(uploadData.makerCode.toString()); 
    }
    if(uploadData.pCKindCode !== undefined) {
      uploadData.pCKindCode = parseInt(uploadData.pCKindCode.toString());
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