import React,{ReactNode, useEffect, useState} from 'react';
import { makeStyles,Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

import PCTab from './pc-tab';
import OtherEquipment from './otherEquipment-tab';
import AccountTab from './account-tab'; 

import { VPCitem,AccountItem } from '../Interface';
import { EmployeeItem } from './employee-list';

type Props<T2> = {
  data:T2;
  editable: boolean;
};

interface TabPanelProps {
  children?: ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return(
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      araia-labelledby={`simple-tab-${index}`}
      {...other}
      >
        {value === index && (
           <Box p={2}>    
            {children}    
           </Box>
        )}
    </div>
  );
};

const allyProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    key:`${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow:1,
    // backgroundColor: theme.palette.background.paper,
  },
  AppBar: {
    backgroundColor: '#6163FF',
  }
}));


const AccountItemTabs = <T2 extends object>({data, editable}:Props<T2>) =>{
  const classes = useStyles();

  const [value, setValue] = useState(0);
  
  const [pcviewflag,setPcViewFlag] = useState(true);
  const [employee_editable,setEmployeeEditable] = useState(editable);

  const convertdata = data as VPCitem | EmployeeItem;

  const targetEmployeeData:AccountItem = {companycode:convertdata.companyCode, 
    employeecode:convertdata.temporaryEmployeeCode,seqno:1,id:'',pw:'',memo:''};

  const datakind = [
    pcviewflag ? {data_kindname:'pc',title:'PC本体'} : {data_kindname:'',title:''},
    pcviewflag ? {data_kindname:'pc_other',title:'PC備品'} : {data_kindname:'',title:''},
    {data_kindname:'mail',title:'メール'},
    {data_kindname:'chatwork',title:'チャットワーク'},
    {data_kindname:'cybouzu',title:'サイボウズ'},
    {data_kindname:'nas',title:'ファイルサーバ'}
  ];
  
  useEffect(() => {
    const vpcitem_data = data as VPCitem;
    if(vpcitem_data !== undefined) {

      if(vpcitem_data.pcItemCode === undefined) {
        setPcViewFlag(false);
      }

      if(vpcitem_data.employeeName === undefined || ((vpcitem_data.employeeName) as String).length === 0) {
        setEmployeeEditable(false);
      }
    }
  },[data]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simpla tabs example" >
          {datakind.map((value,index) => (
            value.title !== ''  ? (<Tab label={value.title} {...allyProps(index)} />) : undefined
          ))}
        </Tabs>
      </AppBar>

      {
        pcviewflag ? (
          <React.Fragment>
            <TabPanel value={value} index={0}> 
              <PCTab data={data as VPCitem} editable={editable} />
            </TabPanel>
            <TabPanel value={value} index={1}> 
              <OtherEquipment data={data} editable={editable} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <AccountTab data_kindname={datakind[2].data_kindname} data={targetEmployeeData} id_title="メールアドレス"  editable={employee_editable}  />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <AccountTab data_kindname={datakind[3].data_kindname} data={targetEmployeeData} id_title="ID"  editable={employee_editable} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <AccountTab data_kindname={datakind[4].data_kindname} data={targetEmployeeData} id_title="ID"  editable={employee_editable} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <AccountTab data_kindname={datakind[5].data_kindname} data={targetEmployeeData} id_title="ID"  editable={employee_editable} />
            </TabPanel>  
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TabPanel value={value} index={0}>
              <AccountTab data_kindname={datakind[2].data_kindname} data={targetEmployeeData} id_title="メールアドレス"  editable={employee_editable}  />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AccountTab data_kindname={datakind[3].data_kindname} data={targetEmployeeData} id_title="ID"  editable={employee_editable} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <AccountTab data_kindname={datakind[4].data_kindname} data={targetEmployeeData} id_title="ID"  editable={employee_editable} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <AccountTab data_kindname={datakind[5].data_kindname} data={targetEmployeeData} id_title="ID"  editable={employee_editable} />
            </TabPanel>  
          </React.Fragment>   
        )
      }

    </div>

  );

}

export default AccountItemTabs;