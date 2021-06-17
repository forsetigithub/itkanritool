import React,{FC, useEffect, useState} from 'react';
//import Moment from 'react-moment';
import axios from 'axios';
import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTableCustom from './materialtable-custom';
import AcountItemTabs from './account-item-tabs';
import * as PROPS from '../App.properties';
import {GetCodeListItems } from '../api';

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
  existsFlag?:boolean;
};

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1, 
    },
}));


const EmployeeList:FC<{editable:boolean}> = (props:{editable:boolean}) => {
  const classes = useStyle();
  const [isLoading,setLoading] = useState<boolean>(false);

  const [companyListItems,setCompanyListItems] = useState<{}>({});
  const [departmentListItems,setDepartmentListItems] = useState<{}>({});
  const [employmentListItems,setEmploymentListItems] = useState<{}>({});


  useEffect(() => {
    try{
      GetCodeListItems(0)
      .then((result) => {
        setCompanyListItems(result);
      });

      GetCodeListItems(1)
      .then((result) => {
        setDepartmentListItems(result);
      });

      GetCodeListItems(2)
      .then((result) => {
        setEmploymentListItems(result);
      });

    }catch(error){

    }finally{

    }


  },[setCompanyListItems,setEmploymentListItems]);


  const columns:any = [
    {
      title: '会社名',field: 'companyCode', type:'numeric',
      lookup: companyListItems,
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
      title: '雇用区分', field:'employmentCode',type:'numeric',lookup: employmentListItems,
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    { 
      title: '所属部署', field:'departmentCode',type:'numeric',
      lookup: departmentListItems,
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
      title: '在籍', field: 'existsFlag',type:'boolean',defaultFilter: 'checked'
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
    try{
      setLoading(true);

      if(item.companyCode === undefined) {
        item.companyCode = 1;
      }
  
      if(item.temporaryEmployeeCode === undefined) {
  
        //最新のシステム社員番号を取得
        axios.get(`${PROPS.BASE_API_PATH}/GetLastTemporaryEmployeeCode/${item.companyCode}`)
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
  
      if(item.existsFlag === undefined) {
        item.existsFlag = true;
      }
  
      const postData = {companyCode:parseInt(item.companyCode.toString()),temporaryEmployeeCode: item.temporaryEmployeeCode,
                      formalEmployeeCode:item.formalEmployeeCode,lastName:item.lastName,firstName:item.firstName,
                      employmentCode: parseInt(item.employmentCode.toString()),departmentCode: parseInt(item.departmentCode.toString()),
                      firstNameKana:'',lastNameKana:'',pCLoginPW:'',emailAddress:'',
                      joinedDate:undefined,retiermentDate:undefined,existsFlag:item.existsFlag };
  
      // console.log(postData);                
  
      axios.post(`${PROPS.BASE_API_PATH}/PostEmployee`,postData)
        .then((result) => {
   
        });
    }catch(error){

    }finally{
      setLoading(false);
    }

  }

  const updateDataHandler = (item: EmployeeItem) => {
    PostItem(item);
  };

  const deleteDataHandler = (item: EmployeeItem) => {
    setLoading(true);

    axios.post(`${PROPS.BASE_API_PATH}/DeleteEmployee` ,item)
      .then((result) => {
        // axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetEmployees`)
        setLoading(false);
      })
  }


  return(
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>

      <MaterialTableCustom<EmployeeItem>  columns={columns} getParam="GetEmployees" 
        editable_mode={props.editable}
        updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler} 
        detailPanel={(rowData:EmployeeItem) => {
          return(
            <AcountItemTabs<EmployeeItem> data={rowData}  editable={props.editable} />
          )
        }}
      />
    </React.Fragment>

  );
}

export default EmployeeList;