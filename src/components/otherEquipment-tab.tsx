import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './tableIcons';

import axios from 'axios';

interface EquipmentItem {
  monitorNumber1:string;
  monitorNumber2:string;
  monitorNumber3:string;
  monitorMemo:string;
  mouseNumber:string;
  mouseMemo:string;
  keyboardNumber:string;
  keyboardMemo:string;
}

const OtherEquipment:FC<{data:any}> = (props:{data:any}) => {

  const [columns, setColumns] = useState<any>([
    { 
      title: 'モニター1', field:'monitorNumber1'
    },
    { 
      title: 'モニター2', field:'monitorNumber2'
    },
    { 
      title: 'モニター3', field:'monitorNumber3'
    },
    { 
      title: 'モニター備考', field:'monitorMemo'
    },
    { 
      title: 'マウス番号', field:'mouseNumber'
    },
    { 
      title: 'マウス備考', field:'mouseMemo'
    },
    { 
      title: 'キーボード番号', field:'keyboardNumber'
    },
    { 
      title: 'キーボード備考', field:'keyboardMemo'
    },
  ]);

  const [pcInfo,setPcInfo] = useState<EquipmentItem[]>([]);
  
  useEffect(() => {
    const newPcInfo = [...pcInfo,
      {monitorNumber1: props.data.monitorNumber1,
       monitorNumber2: props.data.monitorNumber2,
       monitorNumber3: props.data.monitorNumber3,
       monitorMemo: props.data.monitorMemo,
       mouseNumber: props.data.mouseNumber,
       mouseMemo: props.data.mouseMemo,
       keyboardNumber: props.data.keyboardNumber,
       keyboardMemo: props.data.keyboardMemo,
      }
      ];
    setPcInfo(newPcInfo);
  },[]);

  return(
    <MaterialTable 
      title=""
      columns={columns}
      data={[...pcInfo]}
      icons={tableIcons}
      options={{
        filtering:false,
        search:false,
      }}
    /> 
  );
}

export default OtherEquipment;