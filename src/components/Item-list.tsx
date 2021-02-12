import React, {FC,forwardRef,useState,useEffect} from 'react';
import useAxios from 'axios-hooks';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';

import ItemTab from './item-tab';

import { colors, createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

// interface ColumItems {
//   pcItemCode:string,
//   assetKindCode:string,
//   itemNumber:string,
//   employeeName:string,
//   departmentName:string,
// }

interface DetailItems {
  makerName:string,
  pcTypeNumber:string,
  pcServiceTag:string,
  assetKind:string,
  pcMemo:string,
  monitorNumber1:string,
  monitorNumber2:string,
  monitorNumber3:string,
  mouseMemo:string,
  mouseNumber:string,

}

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
  detailButton: {
    '& *:active':{
      'outline': 'none'
    }
  }
}));

const columns = [
  {field:"pcItemCode", title:"No.", 
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
  {field:"employeeName"   , title:"従業員名"},
  {field:"departmentName" , title:"部署"}
];


const ItemList: FC = () => {
  const classes = useStyle();
  
  const [isLoading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<any>([]);

  useEffect(()=> {
    console.log('call useEffect')
    setLoading(true);
    axios.get('http://localhost:5000/api/itmanagement/getvpcitems')
    .then((result) => {
      setData(result.data);
      setLoading(false);
    });
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
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

              })  
          }}
          options={{
            filtering:true,
            pageSize:10,

          }}
          detailPanel={(rowData:any) => {
            return(
              <ItemTab data={rowData} />
              // <h2>{rowData.employeeName}</h2>
            )
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default ItemList;