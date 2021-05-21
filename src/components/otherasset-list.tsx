import React,{FC,useState,useEffect} from 'react';
//import Moment from 'react-moment';
import MaterialTableCustom from './materialtable-custom';
import axios from 'axios';
import * as PROPS from '../App.properties';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const OtherAssetList:FC<{editable:boolean,itemKindNo?:number,lookup?:any}> = 
  (props:{editable:boolean,itemKindNo?:number,lookup?:any}) => {


  const [employeelist,setEmployeelist] = useState<any>([]);

  useEffect(() => {
    // setLoading(true);
    axios.get(`${PROPS.BASE_URL}/api/itmanagement/GetEmployeeNameList`)
    .then((result) => {
      setEmployeelist(result.data);
      // setLoading(false);
    });
  },[]);

  const columns:any = [

    { 
      title: '区分', field:'itemKindNo',lookup: props.lookup,
      // editable: 'never',
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
      title:'資産番号',field:'assetNo'
    },
    { title:"貸与者", field:"currentOwnerName", 
      editComponent:(props:any) => (
        <Autocomplete 
          options={employeelist}
          getOptionLabel={(option:any) => (option.employeeName)}
          // defaultValue={{employeeName: props.value,pcItemCode:0,
          //   assetKindCode:'',itemNumber:'',pcLoginPW:'',departmentName:''}}
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
      lookup: {
        1:'DELL',2:'HP',3:'Apple',4:'Microsoft',
        5:'acer',6:'AOC',7:'ASUS',8:'BENQ',
        9:'BLENCK',10:'BUFFALO',11:'Easterntimes Tech',
        12:'ELECOM',13:'GREEN HOUSE',14:'I・O DATA',
        15:'Logicool',16:'NEC',17:'Qtuo',18:'SANWA',
        98:'その他',99:'不明'
      },
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
console.log(uploadData);    
    uploadData.makerCode = parseInt(uploadData.makerCode); 
    uploadData.itemKindNo = parseInt(uploadData.itemKindNo);

    axios.post(`${PROPS.BASE_URL}/api/itmanagement/PostOtherAssetItem`,uploadData);   
  };

  const deleteDataHandler = (item :any) => {
    axios.post(`${PROPS.BASE_URL}/api/itmanagement/DeleteOtherAssetItem`,item);
  };

  return(
    <MaterialTableCustom<any> columns={columns} getParam={`GetOtherAssetItemByItemKindNo/${props.itemKindNo}`} 
      editable_mode={props.editable}
      updateDataHandler={updateDataHandler} deleteDataHandler={deleteDataHandler} />
  );
}

export default OtherAssetList;