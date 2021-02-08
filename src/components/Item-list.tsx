import React, {FC,forwardRef,useState,useEffect} from 'react';
import useAxios from 'axios-hooks';
import MaterialTable from 'material-table';

import ItemTab from './item-tab';
import {tableIcons} from './tableIcons';
import { colors, makeStyles } from '@material-ui/core';
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

const useStyle = makeStyles({
  root : {
    '& *': {
      "background": '#252525',
      "color": 'whitesmoke',
      "font-size": 'calc(20px + 1vmin)'
    }
  },
  detailButton: {
    '& *:active':{
      'outline': 'none'
    }
  }
});

const columns = [
  {field:"pcItemCode"     , title:"No."},
  {field:"assetKindCode"  , title:"資産種別"},
  {field:"itemNumber"     , title:"備品番号"},
  {field:"employeeName"   , title:"従業員名"},
  {field:"departmentName" , title:"部署"}
];


const ItemList: FC = () => {
  const classes = useStyle();
  const [data,setData] = useState<any>([]);

  useEffect(()=> {
    axios.get('http://localhost:5000/api/itmanagement/getpcitems')
    .then((result) => {
      setData(result.data);
    });

  },[]);


  // const [{data, loading, error}] = useAxios(
  //     'http://localhost:5000/api/itmanagement/getpcitems'
  //     // 'http://192.168.1.80:5003/PCItems'
  // );
  
  // if (loading) return <p>loading...</p>
  // if (error) return <p>Error!</p>

  return(
    <div >
      <MaterialTable 
        title=""
        columns={columns}
        data={data}
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
          pageSize:10
        }}
        detailPanel={(rowData:any) => {
          return(
            <ItemTab data={rowData} />
            // <h2>{rowData.employeeName}</h2>
          )
        }}
      />
    </div>
  );
}

export default ItemList;