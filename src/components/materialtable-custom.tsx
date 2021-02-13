import React, {FC,useState,useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';
import ja from 'date-fns/locale/ja';

import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


type Props = {
  title?: string;
  columns: any;
  getParam:string;
  postParam:string;
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

const MeterialTableCustom:FC<any> = (props:Props) => {

  const classes = useStyle();
  
  const [isLoading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<any>([]);

  useEffect(()=> {
    setLoading(true);
    axios.get('http://localhost:5000/api/itmanagement/' + props.getParam)
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
          title={props.title === undefined ? '' : props.title}
          columns={props.columns}
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
            showTitle:false,
          }}
        />
      </div>
    </React.Fragment>

  );
};

export default MeterialTableCustom;