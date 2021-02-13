import React,{FC, useEffect, useState} from 'react';
import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';

const EmployeeList:FC<any> = () => {
  const columns:any = [
    {
      title: 'No',field: 'pcItemCode',
      hidden:true,
  
    },
    {
      title: '従業員番号',field: 'formalEmployeeCode',
      align: 'center',
      filtering:false,
      headerStyle:{
     
        minWidth:70
      },
      cellStyle:{

        minWidth:20
      }
    },

    { 
      title: '姓', field:'lastName'
    },
    { 
      title: '名', field:'firstName'
    },
    { 
      title: '雇用区分', field:'employmentCode',lookup: {1:'直雇用',2:'派遣'},
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    { 
      title: '所属部署', field:'departmentCode',
      lookup: {1:'Dreambox ',2:'MO大橋 ',3:'アライアンス ',
              4:'コール大橋 ',5:'プランツ ',6:'プランニング ',
              7:'マキコミ ',8:'メディア支援 ',9:'わくわく ',
              10:'経理財務室 ',11:'広告PR ',12:'事業推進 ',
              13:'社長室 ',14:'情報システム管理室 ',15:'制作 ',
              16:'コール久留米',17:'マキコミ',18:'KIZUNA大分'},
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
];

  return(
    <MaterialTableCustom columns={columns} getParam="GetEmployees" />
  );
}

export default EmployeeList;