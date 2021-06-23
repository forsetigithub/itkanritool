import React,{FC,useState,useEffect} from 'react';
//import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';
import axios from 'axios';
import * as PROPS from '../App.properties';
import { CodeItem } from '../Interface';

import { createStyles, makeStyles,Theme } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1, 
    },
}));



const OtherAssetList:FC<{editable:boolean,itemKindNo?:number,lookup?:any}> = 
  (props:{editable:boolean,itemKindNo?:number,lookup?:any}) => {

  const classes = useStyle();

  const [isLoading,setLoading] = useState<boolean>(false);
  const [employeelist,setEmployeelist] = useState<any>([]);
  const [makerListItems,setMakerlistitems] = useState<{}>({});

  useEffect(() => {
    const loadData = async () => {
      try{
        setLoading(true);
        await axios.get(`${PROPS.BASE_API_PATH}/GetEmployeeNameList`)
          .then((result) => {
            setEmployeelist(result.data);
        });
  
        await axios.get(`${PROPS.BASE_API_PATH}/GetCodeList/3`)
          .then((result) => {

            const obj_array:any[] = [];
  
            (result.data as CodeItem[]).forEach((value,index) => {
              const obj = {
                id:value.codeID,
                name:value.codeName
              };

              obj_array.push(obj);

            });
            var makerListItems = obj_array.reduce((acc:any,cur:any) => {
              acc[cur.id] = cur.name;
              return acc;
            },{});
  
            setMakerlistitems(makerListItems);
          });
      }catch(error){
        console.log(error);
        
      }finally{
        setLoading(false);
      }
    };
    loadData();
  },[]);

  const columns:any = [
    { 
      title: '区分', field:'itemKindNo',lookup: props.lookup,validate:(rowData:any) => rowData.itemKindNo !== undefined,
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    {
      title:'No',field:'itemNo',hidden:true,
    },    
    {
      title:'資産番号',field:'assetNo',validate:(rowData:any) => rowData.assetNo !== undefined &&
      rowData.assetNo.length > 0
    },
    { title:"貸与者", field:"currentOwnerName", 
      editComponent:(props:any) => (
        <Autocomplete 
          options={employeelist}
          getOptionLabel={(option:any) => (option.employeeName)}
          defaultValue={{employeeName: props.value}}  
          getOptionSelected={(option,value) => option.employeeName === value.employeeName}
          autoComplete
          autoSelect
          autoHighlight
          
          renderInput={(params:any) => <TextField {...params} label='従業員名' variant="outlined" margin="normal" />}
                      onChange={(e:any) => props.onChange(e.target.innerText)}
        />
      )
    },
    { 
      title: 'メーカー', field:'makerCode',
      lookup:makerListItems,
      headerStyle:{
        width:120,
      },
      cellStyle:{
        minWidth:120,
      },
    },
    {
      title:'型番',field:'typeNumber'
    },
    {
      title:'S/N',field:'serialNumber'
    },
    {
      title:'備考',field:'memo'
    }
];

  const updateDataHandler = (item: any) => {

    let uploadData:any = {...item};
   
    uploadData.makerCode = parseInt(uploadData.makerCode); 
    uploadData.itemKindNo = parseInt(uploadData.itemKindNo);

    axios.post(`${PROPS.BASE_API_PATH}/PostOtherAssetItem`,uploadData);   
  };

  const deleteDataHandler = (item :any) => {
    axios.post(`${PROPS.BASE_API_PATH}/DeleteOtherAssetItem`,item);
  };

  return(
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>
      <MaterialTableCustom<any> columns={columns} getParam={`GetOtherAssetItemByItemKindNo/${props.itemKindNo}`} 
        editable_mode={props.editable}
        updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler} />
    </React.Fragment>

  );
}

export default OtherAssetList;