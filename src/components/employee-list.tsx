import React,{FC} from 'react';
//import Moment from 'react-moment';
import axios from 'axios';
import MaterialTableCustom from './materialtable-custom';
import AcountItemTabs from './account-item-tabs';
import * as PROPS from '../App.properties';

export type EmployeeItem = {
  companyCode:number;
  temporaryEmployeeCode:number;
  formalEmployeeCode:string;
  lastName:string;
  firstName:string;
  lastNameKana:string;
  firstNameKana:string;
  employmentCode?:number;
  departmentCode?:number;
  pCLoginPW:string;
  emailAddress:string;
  joinedDate?:Date;
  retiermentDate?:Date;
  existsFlag:boolean;
};

const EmployeeList:FC<{editable:boolean}> = (props:{editable:boolean}) => {
  const columns:any = [
    {
      title: 'companyCode',field: 'companyCode', type:'numeric',
      hidden:true, 
    },
    {
      title: 'temporaryEmployeeCode',field: 'temporaryEmployeeCode',type:'numeric',
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
      title: '雇用区分', field:'employmentCode',type:'numeric',lookup: {1:'直雇用',2:'派遣',3:'業務委託'},
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    { 
      title: '所属部署', field:'departmentCode',type:'numeric',
      lookup: {1:'Dreambox', 2:'MO大橋',3:'アライアンス',
               4:'コール大橋',5:'プランツ',6:'プランニング',
               7:'マキコミ',8:'メディア支援 ',9:'わくわく',
              10:'経理財務室',11:'広告PR ',12:'事業推進',
              13:'社長室',14:'情報システム管理室',15:'制作',
              16:'コール久留米',17:'マキコミ',18:'KIZUNA大分'},
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    {
      title: 'pCLoginPW', field: 'pCLoginPW',hidden: true
    },
    {
      title: 'emailAddress', field: 'emailAddress',hidden: true
    },
    {
      title: 'joinedDate', field: 'joinedDate', type:'date', hidden: true
    },
    {
      title: 'retiermentDate', field: 'retiermentDate', type:'date', hidden: true
    },
    {
      title: 'existsFlag', field: 'existsFlag',hidden: true
    },
    {
      title: 'lastNameKana', field: 'lastNameKana',hidden: true
    },
    {
      title: 'firstNameKana', field: 'firstNameKana',hidden: true
    },
    {
      title: 'existsFlag', field: 'pCLogiexistsFlagnPW',hidden: true
    },

];

  const PostItem = (item: EmployeeItem) => {

    if(item.companyCode === undefined) {
      item.companyCode = 1;
    }

    if(item.temporaryEmployeeCode === undefined) {

      //最新のシステム社員番号を取得
      axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetLastTemporaryEmployeeCode/${item.companyCode}`)
        .then((result) => {
          item.temporaryEmployeeCode = result.data;
        });
    }

    if(item.employmentCode === undefined) {
      item.employmentCode = 0;
    }

    if(item.departmentCode === undefined) {
      item.departmentCode = 0;
    }

    const postData = {companyCode:item.companyCode,temporaryEmployeeCode: item.temporaryEmployeeCode,
                    formalEmployeeCode:item.formalEmployeeCode,lastName:item.lastName,firstName:item.firstName,
                    employmentCode: parseInt(item.employmentCode.toString()),departmentCode: parseInt(item.departmentCode.toString()),
                    firstNameKana:'',lastNameKana:'',pCLoginPW:'',emailAddress:'',
                    joinedDate:undefined,retiermentDate:undefined,existsFlag:true };

    // console.log(postData);                

    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostEmployee`,postData)
      .then((result) => {
       
      });
    
  }

  const updateDataHandler = (item: EmployeeItem) => {
    PostItem(item);
  };

  const deleteDataHandler = (item: EmployeeItem) => {
    axios.post(`${PROPS.BASE_URL}/api/itmanagement/DeleteEmployee` ,item)
      .then((result) => {
        // axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetEmployees`)
      })
  }


  return(
    <MaterialTableCustom<EmployeeItem>  columns={columns} getParam="GetEmployees" 
      editable_mode={props.editable}
      updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler} 
      detailPanel={(rowData:EmployeeItem) => {
        return(
          <AcountItemTabs<EmployeeItem> data={rowData}  editable={props.editable} />
        )
      }}
      />
  );
}

export default EmployeeList;