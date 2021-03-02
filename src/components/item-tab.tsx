import React,{FC, ReactNode, useEffect, useState} from 'react';
import { makeStyles,Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

import PCTab from './pc-tab';
import OtherEquipment from './otherEquipment-tab';
import AccountTab from './account-tab'; 

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


const ItemTab:FC<any> =(props:{data:any, editable:boolean}) =>{
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const mailData = {employeecode:props.data.temporaryEmployeeCode,id:props.data.mailAddress,pw:props.data.mailPassword};
  const cwData = {employeecode:props.data.temporaryEmployeeCode,id:props.data.chatwork_ID,pw:props.data.chatwork_PW};
  const cybouzuData = {employeecode:props.data.temporaryEmployeeCode,id:props.data.cybouzu_ID,pw:props.data.cybouzu_PW};
  // const [nasData,setNasData] = useState<AccountItem>({employeecode:props.data.temporaryEmployeeCode,id:props.data});

  // const mailData:AccountItem = {employeecode:props.data.temporaryEmployeeCode,id:props.data.mailAddress,pw:props.data.mailPassword};
  // const cwData:AccountItem = {employeecode:props.data.temporaryEmployeeCode,id:props.data.chatwork_ID,pw:props.data.chatwork_PW};
  // const cybouzuData:AccountItem = {employeecode:props.data.temporaryEmployeeCode,id:props.data.cybouzu_ID,pw:props.data.cybouzu_PW};

  const datakind = [
    {data_kindname:'pc',title:'PC本体'},
    {data_kindname:'pc_other',title:'PC備品'},
    {data_kindname:'mail',title:'メール'},
    {data_kindname:'chatwork',title:'チャットワーク'},
    {data_kindname:'cybouzu',title:'サイボウズ'},
    {data_kindname:'nas',title:'ファイルサーバ'}
  ];
  
  useEffect(() => {
    // axios.get('http://localhost:5000/api/itmanagement/GetAccountInfoById/' +
    //    props.data.companyCode + '/' + props.data.temporaryEmployeeCode)
    //   .then((result) => {
    //     setmailData({employeecode:result.data.temporaryEmployeeCode,id:result.data.mailAddress,pw:result.data.mailPassword});
    //     setCwData({employeecode:result.data.temporaryEmployeeCode,id:result.data.chatwork_ID,pw:result.data.chatwork_PW});
    //     setCybouzuData({employeecode:props.data.temporaryEmployeeCode,id:props.data.cybouzu_ID,pw:props.data.cybouzu_PW});
    //   });
  },[props]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simpla tabs example" >
          {datakind.map((value,index) => (
             <Tab label={value.title} {...allyProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}> 
        <PCTab data={props.data} editable={props.editable} />
      </TabPanel>
      <TabPanel value={value} index={1}> 
        <OtherEquipment data={props.data} editable={props.editable} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccountTab data_kindname={datakind[2].data_kindname} data={mailData} id_title="メールアドレス"  editable={props.editable}  />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccountTab data_kindname={datakind[3].data_kindname} data={cwData} id_title="ID"  editable={props.editable} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AccountTab data_kindname={datakind[4].data_kindname} data={cybouzuData} id_title="ID"  editable={props.editable} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AccountTab data_kindname={datakind[5].data_kindname} data={cybouzuData} id_title="ID"  editable={props.editable} />
      </TabPanel>
    </div>

  );

}

export default ItemTab;