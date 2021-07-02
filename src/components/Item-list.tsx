import React, {FC,useState,useEffect} from 'react';

import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';

import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import axios from 'axios';

import AcountItemTabs from './account-item-tabs';
import * as PROPS from '../App.properties';
import { VPCitem } from '../Interface';


const useStyle = makeStyles((theme: Theme) =>
  createStyles({
  root : {
    //svgタグ以外を反映
    '& *:not(svg)': {
       "font-size": 'calc(9px + 1vmin)'
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
  },
}));

const ItemList: FC<{editable:boolean}> = (props:{editable:boolean}) => {
  const classes = useStyle();
  
  const [isLoading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<VPCitem[]>([]);
  const [employeelist,setEmployeelist] = useState<any>([]);

  const GetVPCitems = async () => {
    setLoading(true);
    await axios.get(`${PROPS.BASE_API_PATH}/getvpcitems`)
    .then((result) => {
      setData(result.data);
      setLoading(false);
    });
  };

  useEffect(()=> {
    GetVPCitems();
  },[]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${PROPS.BASE_API_PATH}/GetEmployeeNameList/1`)
    .then((result) => {
      setEmployeelist(result.data);
      setLoading(false);
    });
  },[]);

  const PostItems = (postitem:VPCitem) => {

    axios.post(`${PROPS.BASE_API_PATH}/PostVPCItems`,postitem)
    .then((result) =>{
      GetVPCitems();
    });
  }

  const columns:any = [
    {field:"pcItemCode", title:"No.", 
      hidden:true,filtering:false,
      cellStyle: {
        width:20,
        mixWidth:30
      },
      headerStyle: {
        width:20,
        mixWidth:30
      }  
    }, 
    { field:"assetKindName", title:"資産種別",editable:'never' },
    { field:"itemNumber", title:"備品番号",editable:'never',
      cellStyle:{
      maxWidth:20
    }},
    {field:"employeeName", title:"従業員名",
      editComponent:(props:any) => (
        <Autocomplete 
          options={employeelist}
          getOptionLabel={(option:any) => (option.employeeName)}
          defaultValue={{employeeName: props.value,pcItemCode:0,
            assetKindCode:'',itemNumber:'',pcLoginPW:'',departmentName:''}}
          getOptionSelected={(option,value) => option.employeeName === value.employeeName}
          autoComplete
          autoSelect
          autoHighlight
          
          renderInput={(params:any) => <TextField {...params} label='従業員名' variant="outlined" margin="normal" />}
                      onChange={(e:any) => props.onChange(e.target.innerText)}
        />
      )
    },
    {field:"pcLoginPW",title:"PCログインPW",},
    {field:"departmentName" , title:"部署",editable:'never',}
  ];

  return(
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>

      <div className={classes.root}>
        <MaterialTable         
          columns={columns}
          data={data}
          localization={{
            header:{
              actions:'',
            },
            toolbar:{
              searchPlaceholder:'検索'
            },
            
          }}
          icons={tableIcons}
          editable={{
            onRowUpdate: props.editable ? (newData:VPCitem,oldData:any) => 
              new Promise((resolve:any,reject:any) => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                PostItems(newData);
                resolve(newData);              
              }).then((value:any) => {
 
              }) : undefined 
          }}
          options={{
            filtering:true,
            pageSize:10,
            showTitle:false,
            

          }}
          detailPanel={(rowData:VPCitem) => {
            return(
              <AcountItemTabs<VPCitem> data={rowData} editable={props.editable} />
            )
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default ItemList;