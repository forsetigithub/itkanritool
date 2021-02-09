import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';

import axios from 'axios';

interface PCItem {
  makerName:string;
  pcTypeNumber:string;
}

const PCTab:FC<{data:any}> = (props:{data:any}) => {

  const [columns, setColumns] = useState<any>([
    {
      title: 'メーカー',field:'makerName',lookup: 
      {'DELL':'DELL','Apple':'Apple','HP':'HP','Microsoft':'Microsoft','acer':'acer'}
    },
    { 
      title: '型番', field:'pcTypeNumber'
    },
    // { 
    //   title: 'サービスタグ', field:'pcServiceTag'
    // },
    // { 
    //   title: '種別', field:'assetKind',lookup: {'デスクトップ':'デスクトップ','ノート':'ノート'}
    // },
    // {
    //   title: '保証期間', field:'warrantyPeriod'
    // },
    // {
    //   title: '保証', field:'warranty'
    // },
    // { 
    //   title: '備考', field:'pcMemo'
    // },

  ]);

  const [pcInfo,setPcInfo] = useState<PCItem[]>([]);
  
  useEffect(() => {
    const newPcInfo = [...pcInfo,{makerName: props.data.makerName,pcTypeNumber: props.data.pcTypeNumber}];
    setPcInfo(newPcInfo);
  },[]);

  return(
    <MaterialTable 
      title=""
      columns={columns}
      data={[...pcInfo]}
      icons={tableIcons}
      editable={{
        onRowUpdate:(newData:any,oldData:any) => 
          new Promise((resolve:any,reject:any) => {
            const dataUpdate = [...pcInfo];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setPcInfo([...dataUpdate]);
            resolve();
          })
      }}
      options={{
        filtering:false,
        search:false,
      }}
    /> 
  );
}

export default PCTab;