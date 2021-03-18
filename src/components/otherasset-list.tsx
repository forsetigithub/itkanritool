import React,{FC} from 'react';
//import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';
import axios from 'axios';
import * as PROPS from '../App.properties';

const OtherAssetList:FC<{editable:boolean}> = (props:{editable:boolean}) => {
  const columns:any = [

    { 
      title: '区分', field:'itemKindNo',lookup: {1:'モニター',2:'キーボード',3:'マウス'},
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    {
      title:'No',field:'itemNo',hidden:true,
    },    
    {
      title:'資産番号',field:'assetNo'
    },
    { 
      title: 'メーカー', field:'makerCode',
      lookup: {
        1:'DELL',2:'HP',3:'Apple',4:'Microsoft',
        5:'acer',6:'AOC',7:'ASUS',8:'BENQ',
        9:'BLENCK',10:'BUFFALO',11:'Easterntimes Tech',
        12:'ELECOM',13:'GREEN HOUSE',14:'I・O DATA',
        15:'Logicool',16:'NEC',17:'Qtuo',18:'SANWA',
      },
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    {
      title:'型番',field:'typeNumber'
    },
    {
      title:'S/N',field:'serialNumber'
    },
    {
      title:'備考',field:'memo'
    }
];

  const updateDataHandler = (item: any) => {

    let uploadData:any = {...item};
    uploadData.makerCode = parseInt(uploadData.makerCode); 
    uploadData.itemKindNo = parseInt(uploadData.itemKindNo);

    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostOtherAssetItem`,uploadData);   
  };

  const deleteDataHandler = (item :any) => {

  };

  return(
    <MaterialTableCustom<any> columns={columns} getParam="GetOtherAssetItem" 
      editable_mode={props.editable}
      updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler} />
  );
}

export default OtherAssetList;