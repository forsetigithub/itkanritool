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
      {1:'DELL',2:'HP',3:'Apple',4:'Microsoft',5:'acer'}
    },
    { 
      title: '型番', field:'pCTypeNumber'
    },
    { 
      title: 'サービスタグ', field:'pCServiceTag'
    },
    { 
      title: '種別', field:'assetKindCode',lookup: {'デスクトップ':'デスクトップ','ノート':'ノート'}
    },
    {
      title: '保証期間', field:'warrantyPeriod',type:'date',
        render: (rowData:any) => (<Moment format="YYYY-MM-DD">{rowData.warrantyPeriod}</Moment> )
    },
    {
      title: '保証', field:'warranty',editable: 'never'
    },
    { 
      title: '備考', field:'pCMemo'
    },
  ];

  const [pcInfo,setPcInfo] = useState<PCItem[]>([]);
  
  useEffect(() => {
   
    setPcInfo([{makerCode: props.data.makerCode,
      pCTypeNumber: props.data.pcTypeNumber,pCServiceTag: props.data.pcServiceTag,
      assetKindCode:props.data.assetKindCode,warrantyPeriod: props.data.warrantyPeriod,
      pCMemo:props.data.pcMemo,pCItemCode:props.data.pcItemCode,
      itemNumber:props.data.itemNumber,
      pCKindCode:props.data.pcKindCode,
      monitorNumber1:0,
      monitorNumber2:0,
      monitorNumber3:0,
      monitorMemo:props.data.pcMemo,
      mouseNumber:props.data.mouseNumber,
      mouseMemo:props.data.mouseMemo,
      keyboardNumber:props.data.keyboardNumber,
      keyboardMemo:props.data.keyboardMemo,
      vPNSettingFlag:false,
      currentOwnerCompanyCode:props.data.companyCode,
      currentOwnerEmployeeCode:props.data.temporaryEmployeeCode}]);
  },[props]);

  const PostPCitem = (item:PCItem) => {
    const uploadData:PCItem = {...props.data,...item};

    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostPCItems`,uploadData)
      .then((result) => {

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