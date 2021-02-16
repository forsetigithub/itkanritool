import React,{FC} from 'react';
//import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';

const OtherAssetList:FC<any> = () => {
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

];

  return(
    <MaterialTableCustom columns={columns} getParam="GetOtherAssetItem" />
  );
}

export default OtherAssetList;