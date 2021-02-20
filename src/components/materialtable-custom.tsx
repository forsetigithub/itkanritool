import React, {FC,useState,useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';
import ja from 'date-fns/locale/ja';

import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {EmployeeItem} from './employee-list';


type Props = {
  title?: string;
  columns: any;
  getParam?:string;
  postParam?:string;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
  root : {
    //svgタグ以外を反映
    '& *:not(svg)': {
       "font-size": 'calc(8px + 1vmin)'
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
  },
}));

const MeterialTableCustom = <T extends {}>({title,columns,getParam,postParam}:Props) => {

  const classes = useStyle();
  
  const [isLoading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<any>([]);

  useEffect(()=> {
    setLoading(true);
    console.log(getParam);
    axios.get('http://localhost:5000/api/itmanagement/' + getParam)
    .then((result) => {
      setData(result.data);
      setLoading(false);
    });

  },[getParam]);

  const PostItem = (item: any) => {

// console.log('Postietem');
// console.log(item);
    axios.post('http://localhost:5000/api/itmanagement/' + postParam,item)
      .then((result) => {
// console.log(result.config); 
        axios.get('http://localhost:5000/api/itmanagement/' + getParam)
      });
  };

  return(
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>

      <div className={classes.root}>
        <MaterialTable         
          title={title === undefined ? '' : title}
          columns={columns}
          data={data}
          localization={{
            header:{
              actions:'',
            },
            toolbar:{
              searchPlaceholder:'検索'
            },
            body: {
              dateTimePickerLocalization:ja
            }
          }}
          icons={tableIcons}
          editable={{
            onRowUpdate:(newData:any,oldData:any) => 
              new Promise((resolve:any,reject:any) => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                PostItem(newData);
                resolve();              

              }),
            onRowAdd: (newData: EmployeeItem) => 
              new Promise((resolve:any,reject:any) => {
                const dataAdd = {companyCode:newData.companyCode,temporaryEmployeeCode: newData.temporaryEmployeeCode,
                  formalEmployeeCode:newData.formalEmployeeCode,lastName:newData.lastName,firstName:newData.firstName,
                  employmentCode: parseInt(newData.employmentCode.toString()),departmentCode: parseInt(newData.departmentCode.toString()),
                  firstNameKana:'',lastNameKana:'',pCLoginPW:'',emailAddress:'',
                  joinedDate:undefined,retiermentDate:undefined,existsFlag:true };

                setData([dataAdd, ...data]);
                console.log('onRowAdd:');
                console.log(dataAdd);
                PostItem(dataAdd);
                resolve();
              }),
            onRowDelete: (oldData:any) =>
              new Promise((resolve:any,reject:any) =>{
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index,1);
                setData([...dataDelete]);
                resolve();
              })
          }}
          options={{
            filtering:true,
            pageSize:10,
            showTitle:false,
          }}
        />
      </div>
    </React.Fragment>

  );
};

export default MeterialTableCustom;