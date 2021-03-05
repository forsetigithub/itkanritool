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
      title: 'メーカー',field:'makerName',lookup: 
      {'DELL':'DELL','Apple':'Apple','HP':'HP','Microsoft':'Microsoft','acer':'acer'}
    },
    { 
      title: '型番', field:'pcTypeNumber'
    },
    { 
      title: 'サービスタグ', field:'pcServiceTag'
    },
    { 
      title: '種別', field:'assetKind',lookup: {'デスクトップ':'デスクトップ','ノート':'ノート'}
    },
    {
      title: '保証期間', field:'warrantyPeriod',type:'date',
        render: (rowData:any) => (<Moment format="YYYY-MM-DD">{rowData.warrantyPeriod}</Moment> )
    },
    {
      title: '保証', field:'warranty',editable: 'never'
    },
    { 
      title: '備考', field:'pcMemo'
    },
  ];

  const [pcInfo,setPcInfo] = useState<PCItem[]>([]);
  
  useEffect(() => {
    setPcInfo([{makerName: props.data.makerName,
      pcTypeNumber: props.data.pcTypeNumber,pcServiceTag: props.data.pcServiceTag,
      assetKind:props.data.assetKind,warrantyPeriod: props.data.warrantyPeriod,
      warranty:props.data.warranty,pcMemo:props.data.pcMemo
    }]);
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