import React, {FC,useState,useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';
import Moment from 'react-moment';
import ja from 'date-fns/locale/ja';

import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
  root : {
    //svgタグ以外を反映
    '& *:not(svg)': {
       "font-size": 'calc(5px + 1vmin)'
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
  },
}));

// const columns = [
//   {field:"pcItemCode", title:"No.", 
//     cellStyle: {
//       width:20,
//       maxWidth:30
//     },

//   }, 
//   {field:"assetKindCode"  , title:"資産種別"},
//   {field:"itemNumber"     , title:"備品番号"},
//   {field:"employeeName"   , title:"従業員名"},
//   {field:"departmentName" , title:"部署"}
// ];



const columns:any = [
  // {
  //   title: 'No',field: 'pcItemCode',
  //   cellStyle:{
  //     width:20,
  //     maxWidth:30
  //   }
  // },
  {
    title: '備品番号',field: 'itemNumber',
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
      render: (rowData:any) => (<Moment format="YYYY-MM-DD">{rowData.warrantyPeriod}</Moment> )
  },
  {
    title: '保証', field:'warranty'
  },
  { 
    title: '備考', field:'pcMemo'
  }];


 const PCAssetList:FC<any> = (props:any) => {

  const classes = useStyle();
  
  const [isLoading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<any>([]);

  useEffect(()=> {
    console.log('call useEffect')
    setLoading(true);
    axios.get('http://localhost:5000/api/itmanagement/getpcitems')
    .then((result) => {
      setData(result.data);
      setLoading(false);
    });

  },[]);


  return(
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>

      <div className={classes.root}>
        <MaterialTable         
          title=""
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

                resolve();              

              }),
            onRowAdd: newData => 
              new Promise((resolve:any,reject:any) => {
                setData([newData,...data]);
                resolve();
              }),
            onRowDelete: oldData =>
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
            
          }}
        />
      </div>
    </React.Fragment>

  );
};

export default PCAssetList;