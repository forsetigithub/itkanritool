import React, {FC,useState,useEffect} from 'react';

import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';

import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import axios from 'axios';

import ItemTab from './item-tab';
import * as PROPS from '../App.properties';

interface ColumItems {
  pcItemCode:string,
  assetKindCode:string,
  itemNumber:string,
  employeeName:string,
  departmentName:string,
}

// interface DetailItems {
//   makerName:string,
//   pcTypeNumber:string,
//   pcServiceTag:string,
//   assetKind:string,
//   pcMemo:string,
//   monitorNumber1:string,
//   monitorNumber2:string,
//   monitorNumber3:string,
//   mouseMemo:string,
//   mouseNumber:string,

// }

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
  root : {
    //svgタグ以外を反映
    '& *:not(svg)': {
      // "background": '#252525',
      // "color": 'whitesmoke',
       "font-size": 'calc(9px + 1vmin)'
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
  },
}));



const ItemList: FC = () => {
  const classes = useStyle();
  
  const [isLoading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<any>([]);

  const GetVPCitems = async () => {
    console.log('GetVPCitems');
    setLoading(true);
    await axios.get(PROPS.BASE_URL + '/api/itmanagement/getvpcitems')
    .then((result) => {
      setData(result.data);
      setLoading(false);

    });
  };

  useEffect(()=> {
    GetVPCitems();
  },[]);


  const PostItems = (postitem:any) => {
    axios.post(PROPS.BASE_URL + '/api/itmanagement/PostVPCItems',postitem)
    .then((result) =>{
      GetVPCitems();
    });
  }

  const columns = [
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
    {field:"assetKindCode"  , title:"資産種別"},
    {field:"itemNumber"     , title:"備品番号",    
      cellStyle:{
      maxWidth:20
    }},
    {field:"employeeName", title:"従業員名",
      editComponent:(props:any) => (
        <Autocomplete 
          options={data}
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
    {field:"pcLoginPW",title:"PCログインPW"},
    {field:"departmentName" , title:"部署"}
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
            onRowUpdate:(newData:any,oldData:any) => 
              new Promise((resolve:any,reject:any) => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                PostItems(newData);
                resolve(newData);              
              }).then((value:any) => {
 
              }) 
          }}
          options={{
            filtering:true,
            pageSize:10,
            showTitle:false,

          }}
          detailPanel={(rowData:any) => {
            return(
              <ItemTab data={rowData} />
            )
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default ItemList;