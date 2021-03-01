import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {tableIcons} from './tableIcons';
import axios from 'axios';

import * as PRPOS from '../App.properties';


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

  const [pcInfo,setPcInfo] = useState<EquipmentItem[]>([]);
  const [monitors,setMonitors] = useState<any>([]);

  useEffect(() => {
    const otherAssetInfo = [
      {monitorNumber1: props.data.monitorNumber1,
       monitorNumber2: props.data.monitorNumber2,
       monitorNumber3: props.data.monitorNumber3,
       monitorMemo: props.data.monitorMemo,
       mouseNumber: props.data.mouseNumber,
       mouseMemo: props.data.mouseMemo,
       keyboardNumber: props.data.keyboardNumber,
       keyboardMemo: props.data.keyboardMemo,
      }];

    setPcInfo(otherAssetInfo);
  },[props]);

  useEffect(() => {
    axios.get(PRPOS.BASE_URL + '/api/itmanagement/GetMonitors')
      .then((result) => {
        setMonitors(result.data);
      });
  },[]);

  const columns:any = [
    { 
      title: 'モニター1', field:'monitorNumber1',
        editComponent:(props:any) => (
          <Autocomplete 
            options={monitors}
            getOptionLabel={(option:any) => (option)}
            defaultValue={props.value}
            getOptionSelected={(option,value) => option === value}
            autoComplete
            autoSelect
            autoHighlight
            
            renderInput={(params:any) => <TextField {...params} label='モニター1' variant="outlined" margin="normal" />}
                        onChange={(e:any) => props.onChange(e.target.innerText)}
          />
        )
    },
    { 
      title: 'モニター2', field:'monitorNumber2',
        editComponent:(props:any) => (
          <Autocomplete 
            options={monitors}
            getOptionLabel={(option:any) => (option)}
            defaultValue={props.value}
            getOptionSelected={(option,value) => option === value}
            autoComplete
            autoSelect
            autoHighlight
            
            renderInput={(params:any) => <TextField {...params} label='モニター2' variant="outlined" margin="normal" />}
                        onChange={(e:any) => props.onChange(e.target.innerText)}
          />
        )
    },
    { 
      title: 'モニター3', field:'monitorNumber3',
      editComponent:(props:any) => (
        <Autocomplete 
          options={monitors}
          getOptionLabel={(option:any) => (option)}
          defaultValue={props.value}
          getOptionSelected={(option,value) => option === value}
          autoComplete
          autoSelect
          autoHighlight
          
          renderInput={(params:any) => <TextField {...params} label='モニター2' variant="outlined" margin="normal" />}
                      onChange={(e:any) => props.onChange(e.target.innerText)}
        />
      )
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
  ];

  return(
    <MaterialTable 
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
      localization={{
        header:{
          actions:'',
        },
      }}
      options={{
        filtering:false,
        search:false,
        showTitle:false,
      }}
    /> 
  );
}

export default OtherEquipment;