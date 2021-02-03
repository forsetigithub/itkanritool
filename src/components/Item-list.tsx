import React, {FC,forwardRef} from 'react';
import useAxios from 'axios-hooks';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import MaterialTable, { Icons } from 'material-table';

// import './Item-list.css';

import ItemTab from './item-tab';
import { colors, makeStyles } from '@material-ui/core';

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
      "font-size": 'calc(10px + 1vmin)'
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

  const tableIcons:Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} className={classes.detailButton}  />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  }; 

  // useEffect(async ()=> {
  //   const result = await axios('http://localhost:5000/api/itmanagement/getpcitems');

  //   setData(result.data);
  // },[]);

  const [{data, loading, error}] = useAxios(
      'http://localhost:5000/api/itmanagement/getpcitems'
      // 'http://192.168.1.80:5003/PCItems'
  );
  
  if (loading) return <p>loading...</p>
  if (error) return <p>Error!</p>

  return(
    <div >
      <MaterialTable 
        title=""
        columns={columns}
        data={data}
        icons={tableIcons}
        editable={{

        }}
        options={{
          filtering:true,
          pageSize:10
        }}
        detailPanel={rowData => {
          return(
            <div>
              <p>AAAA</p>   
            </div>  
            )
          }
        }
      />
    </div>
  );
}

export default ItemList;