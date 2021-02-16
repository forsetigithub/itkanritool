import React, {FC} from 'react';
import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';

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
  {
    title: '保証', field:'warranty'
  },
  { 
    title: '備考', field:'pcMemo'
  }];


 const PCAssetList:FC<any> = () => {

  return(
    <MaterialTableCustom columns={columns} getParam="getpcitems" />

  );
};

export default PCAssetList;