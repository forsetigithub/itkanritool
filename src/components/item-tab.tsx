import React,{FC, ReactNode, useEffect, useState} from 'react';
import { makeStyles,Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

import PCTab from './pc-tab';

import AccountTab,{AccountItem} from './account-tab'; 
import { Typography } from '@material-ui/core';
import { ContactSupportOutlined } from '@material-ui/icons';

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


const ItemTab:FC<any> =(props:{data:any}) =>{
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const [mailData,setmailData] = useState<AccountItem>({employeecode:props.data.temporaryEmployeeCode,id:props.data.mailAddress,pw:props.data.mailPassword});
  const [cwData,setCwData] = useState<AccountItem>({employeecode:props.data.temporaryEmployeeCode,id:props.data.chatwork_ID,pw:props.data.chatwork_PW});
  const [cybouzuData,setCybouzuData] = useState<AccountItem>({employeecode:props.data.temporaryEmployeeCode,id:props.data.cybouzu_ID,pw:props.data.cybouzu_PW});

  const datakind = [
    {data_kindname:'pc',title:'PC'},
    {data_kindname:'mail',title:'メール'},
    {data_kindname:'chatwork',title:'チャットワーク'},
    {data_kindname:'cybouzu',title:'サイボウズ'},
  ];
  
  useEffect(() => {
    console.log(props.data.mailAddress);
  });

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simpla tabs example" >
          <Tab label={datakind[0].title} {...allyProps(0)} />
          <Tab label={datakind[1].title} {...allyProps(0)} />
          <Tab label={datakind[2].title} {...allyProps(0)} />
          <Tab label={datakind[3].title} {...allyProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}> 
        <div>
          <PCTab data={props.data} />
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountTab data_kindname={datakind[1].data_kindname} data={mailData} id_title="メールアドレス" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccountTab data_kindname={datakind[2].data_kindname} data={cwData} id_title="ID" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccountTab data_kindname={datakind[3].data_kindname} data={cybouzuData} id_title="ID" />
      </TabPanel>
    </div>

  );

}

export default ItemTab;