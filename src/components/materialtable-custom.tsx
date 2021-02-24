import React, {FC,useState,useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';
import ja from 'date-fns/locale/ja';

import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as PROPS from '../App.properties';

type Props<T> = {
  title?: string;
  columns: any;
  getParam?:string;
  updateDataHandler: (item: T) => void;
  deleteDataHandler: (item: T) => void;
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

const MeterialTableCustom = <T extends object>({title,columns,getParam,updateDataHandler,deleteDataHandler}:Props<T>) => {

  const classes = useStyle();
  
  const [isLoading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<any>([]);

  useEffect(()=> {
    setLoading(true);
    console.log(getParam);
    axios.get(PROPS.BASE_URL + '/api/itmanagement/' + getParam)
    .then((result) => {
      setData(result.data);
      setLoading(false);
    });

  },[getParam]);


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
            onRowUpdate:(newData:T,oldData:any) => 
              new Promise((resolve:any,reject:any) => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                updateDataHandler(newData);
                resolve();              

              }),
            onRowAdd: (newData: T) => 
              new Promise((resolve:any,reject:any) => {
                setData([newData, ...data]);
                updateDataHandler(newData);
                resolve();
              }),
            onRowDelete: (oldData:any) =>
              new Promise((resolve:any,reject:any) =>{
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index,1);
                setData([...dataDelete]);
                deleteDataHandler(oldData);
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