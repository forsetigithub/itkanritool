import React,{FC, ReactNode, useState} from 'react';
import { makeStyles,Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

import PCTab from './pc-tab';
import AccountTab from './account-tab'; 
import { Typography } from '@material-ui/core';

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
          <Box p={3}>
            <Typography>{children}</Typography>
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


const ItemTab:FC<any> =(props:any) =>{
  const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simpla tabs example" >
          <Tab label="PC" {...allyProps(0)} />
          <Tab label="アカウント" {...allyProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        PC
      </TabPanel>
      <TabPanel value={value} index={1}>
        アカウント
      </TabPanel>
    </div>

  );

}

export default ItemTab;