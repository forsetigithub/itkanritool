import React,{FC, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles,Theme } from '@material-ui/core';
import {tableIcons} from './tableIcons';
import axios from 'axios';

import * as PRPOS from '../App.properties';


const useStyle = makeStyles((theme: Theme) =>
  createStyles({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
  },
}));

type Props = {
  data:any;
  editable:boolean;
};

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

interface AutoCompleteData {
  itemKindNo:number;
  assetNo:string;
}

const OtherEquipment:FC<Props> = ({data,editable}:Props) => {
  const classes = useStyle();

  const [isLoading,setLoading] = useState<boolean>(false);

  const [pcInfo,setPcInfo] = useState<EquipmentItem[]>([]);
  const [monitors,setMonitors] = useState<any>([]);
  const [keyboards,setKeyboards] = useState<any>([]);
  const [mouses,setMouses] = useState<any>([]);

  const defaultProps = {
      getOptionLabel:(option:any) => (option.assetNo),
      getOptionSelected:(option:any,value:any) => option.assetNo === value.assetNo,
      autoComplete:true,
      autoSelect:true,
      autoHighlight:true,
  }

  useEffect(() => {
    const otherAssetInfo = [
      {monitorNumber1: data.monitorNumber1,
       monitorNumber2: data.monitorNumber2,
       monitorNumber3: data.monitorNumber3,
       monitorMemo: data.monitorMemo,
       mouseNumber: data.mouseNumber,
       mouseMemo: data.mouseMemo,
       keyboardNumber: data.keyboardNumber,
       keyboardMemo: data.keyboardMemo,
      }];

    setPcInfo(otherAssetInfo);
  },[data]);

  useEffect(() => {
    axios.get(PRPOS.BASE_URL + '/api/itmanagement/GetOtherAssetAutoCompleteList')
      .then((result) => {
        const autocomplatedata = result.data as AutoCompleteData[];
        
        setMonitors(autocomplatedata.filter((value,index) => { return value.itemKindNo === 1 }));
        setKeyboards(autocomplatedata.filter((value,index) => {return value.itemKindNo === 2 }));
        setMouses(autocomplatedata.filter((value,index) => {return value.itemKindNo === 3}));
      });
  },[]);


  const PostItem = (postitem:EquipmentItem) => {
    const updateData = {...data,...postitem};
    
    setLoading(true);
    axios.post(PRPOS.BASE_URL + '/api/itmanagement/PostVPCItems',updateData)
    .then((result) =>{
      setLoading(false);
    })
  };

  const columns:any = [
    { 
      title: 'モニター1', field:'monitorNumber1',
        editComponent:(props:any) => (
          <Autocomplete
            {...defaultProps}
            options={monitors}
            defaultValue={{assetNo:props.value}}
            renderInput={(params:any) => <TextField {...params} label='モニター1' variant="outlined" margin="normal" />}
                        onChange={(e:any) => props.onChange(e.target.innerText)}
          />
        )
    },
    { 
      title: 'モニター2', field:'monitorNumber2',
        editComponent:(props:any) => (
          <Autocomplete 
            {...defaultProps}
            options={monitors}
            defaultValue={{assetNo:props.value}}
            
            renderInput={(params:any) => <TextField {...params} label='モニター2' variant="outlined" margin="normal" />}
                        onChange={(e:any) => props.onChange(e.target.innerText)}
          />
        )
    },
    { 
      title: 'モニター3', field:'monitorNumber3',
      editComponent:(props:any) => (
        <Autocomplete 
          {...defaultProps}        
          options={monitors}
          defaultValue={{assetNo:props.value}}

          renderInput={(params:any) => <TextField {...params} label='モニター2' variant="outlined" margin="normal" />}
                      onChange={(e:any) => props.onChange(e.target.innerText)}
        />
      )
    },
    { 
      title: 'モニター備考', field:'monitorMemo'
    },
    { 
      title: 'マウス番号', field:'mouseNumber',
      editComponent:(props:any) => (
        <Autocomplete
          {...defaultProps} 
          options={mouses}
          defaultValue={{assetNo:props.value}}
          
          renderInput={(params:any) => <TextField {...params} label='マウス番号' variant="outlined" margin="normal" />}
                      onChange={(e:any) => props.onChange(e.target.innerText)}
        />
      )      
    },
    { 
      title: 'マウス備考', field:'mouseMemo'
    },
    { 
      title: 'キーボード番号', field:'keyboardNumber',
      editComponent:(props:any) => (
        <Autocomplete
          {...defaultProps}
          options={keyboards}
          defaultValue={{assetNo:props.value}}
          
          renderInput={(params:any) => <TextField {...params} label='キーボード番号' variant="outlined" margin="normal" />}
                      onChange={(e:any) => props.onChange(e.target.innerText)}
        />
      )  
    },
    { 
      title: 'キーボード備考', field:'keyboardMemo'
    },
  ];

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>
      <MaterialTable 
        columns={columns}
        data={[...pcInfo]}
        icons={tableIcons}
        editable={{
          onRowUpdate: editable ? (newData:any,oldData:any) => 
            new Promise((resolve:any,reject:any) => {
              const dataUpdate = [...pcInfo];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setPcInfo([...dataUpdate]);
              PostItem(newData);
              resolve();
            }) : undefined
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
    </React.Fragment>
  );
}

export default OtherEquipment;