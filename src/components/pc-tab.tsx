import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';
import Moment from 'react-moment';
import ja from 'date-fns/locale/ja';
import axios from 'axios';

import * as PROPS from '../App.properties';
import {PCItem, VPCitem} from '../Interface';


const PCTab:FC<{data:VPCitem,editable:boolean}> = (props:{data:VPCitem,editable:boolean}) => {

  const columns:any = [
    {
      title: 'メーカー',field:'makerCode',lookup: 
      {1:'DELL',2:'HP',3:'Apple',4:'Microsoft',5:'acer',19:'富士通'}
    },
    { 
      title: '型番', field:'pcTypeNumber'
    },
    { 
      title: 'シリアル番号', field:'serialNo'
    },
    { 
      title: 'サービスタグ', field:'pcServiceTag'
    },
    {
      title: '種別', field:'pcKindCode',lookup: {1:'デスクトップ',2:'ノート'}
    },
    {
      title: '保証期間', field:'warrantyPeriod',type:'date',
        render: (rowData:any) => (<Moment format="YYYY-MM-DD">{rowData.warrantyPeriod}</Moment> )
    },
    {
      title: '保証', field:'warranty',editable: 'never',
      render: (rowData:any) => (Date.parse(rowData.warrantyPeriod) >= Date.now() ? <p>有効</p> : <p>無効</p>)
    },
    {
      title: 'PC名', field:'computerName'
    },
    { 
      title: '備考', field:'pcMemo'
    },
  ];

  const [pcInfo,setPcInfo] = useState<PCItem[]>([]);
  
  useEffect(() => {
   
    setPcInfo([{makerCode: props.data.makerCode,
      pcTypeNumber: props.data.pcTypeNumber,pcServiceTag: props.data.pcServiceTag,
      assetKindCode:props.data.assetKindCode,warrantyPeriod: props.data.warrantyPeriod,
      pcMemo:props.data.pcMemo,pcItemCode:props.data.pcItemCode,
      itemNumber:props.data.itemNumber,
      pcKindCode:props.data.pcKindCode,
      monitorNumber1:0,
      monitorNumber2:0,
      monitorNumber3:0,
      monitorMemo:props.data.pcMemo,
      mouseNumber:props.data.mouseNumber,
      mouseMemo:props.data.mouseMemo,
      keyboardNumber:props.data.keyboardNumber,
      keyboardMemo:props.data.keyboardMemo,
      vpnSettingFlag:false,
      currentOwnerCompanyCode:props.data.companyCode,
      currentOwnerEmployeeCode:props.data.temporaryEmployeeCode,
      pcLoginPW:props.data.pcLoginPW,
      computerName:props.data.computerName}]);
  },[props]);


  const PostPCitem = (item:PCItem) => {
    if(item.makerCode !== undefined) {
      item.makerCode = parseInt(item.makerCode?.toString());
    }  

    if(item.pcKindCode !== undefined) {
      item.pcKindCode = parseInt(item.pcKindCode.toString());
    }

    const uploadData:PCItem = {makerCode: item.makerCode,
      pcTypeNumber: item.pcTypeNumber,pcServiceTag: item.pcServiceTag,
      serialNo:item.serialNo,
      warrantyPeriod: item.warrantyPeriod,
      pcMemo:item.pcMemo,pcItemCode:props.data.pcItemCode,
      itemNumber:item.itemNumber,
      pcKindCode:item.pcKindCode,
      monitorNumber1:props.data.monitorNumber1,
      monitorNumber2:props.data.monitorNumber2,
      monitorNumber3:props.data.monitorNumber3,
      monitorMemo:props.data.pcMemo,
      mouseNumber:props.data.mouseNumber,
      mouseMemo:props.data.mouseMemo,
      keyboardNumber:props.data.keyboardNumber,
      keyboardMemo:props.data.keyboardMemo,
      vpnSettingFlag:false,
      currentOwnerCompanyCode:props.data.companyCode,
      currentOwnerEmployeeCode:props.data.temporaryEmployeeCode,
      assetKindCode:props.data.assetKindCode,
      pcLoginPW:props.data.pcLoginPW,
      computerName:item.computerName};

    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostPCItem`,uploadData)
      .then((result) => {
        axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetVPCItemById/${item.pcItemCode}`)
        .then((result) => {

        })
      });
  }

  return(
    <MaterialTable 
      title={'備品番号:' + props.data.itemNumber}
      localization={{
        header:{
          actions:''
        },
        body: {
          dateTimePickerLocalization:ja
        }
      }}
      columns={columns}
      data={[...pcInfo]}
      icons={tableIcons}
      // フェーズ２で対応
      editable={{
        onRowUpdate: props.editable ? (newData:PCItem,oldData:any) => 
          new Promise((resolve:any,reject:any) => {
            const dataUpdate = [...pcInfo];
            const index = oldData.tableData.id;        
            dataUpdate[index] = newData;
            setPcInfo([...dataUpdate]);
            PostPCitem(newData);
            resolve();
          }) : undefined
      }}
      options={{
        filtering:false,
        search:false,
      }}
    
    /> 
  );
}

export default PCTab;