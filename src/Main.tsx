import React,{FC} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {makeStyles, createStyles, Theme}  from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorageIcon from '@material-ui/icons/Storage';

import {Menu} from './Interface';
import ItemList from './components/Item-list';
import PCAssetList from './components/pcasset-list';
import OtherAssetList from './components/otherasset-list';
import EmployeeList from './components/employee-list';
import CodeTableList from './components/codetable-list';

import SideNav from './components/sidenav';
import { AppBar,Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
  
      // '& *':{
      //   // backgroundColor:'black',
      //   // color:'white'
  
      // },
      display:'flex',
      marginTop:theme.spacing(4),
    },
    appBar: {
      zIndex:theme.zIndex.drawer + 1,
      marginBottom:theme.spacing(4),
    },
    main: {
      marginTop:theme.spacing(4),
    },
    title: {
      flexGrow:1,
    },
    list: {
      width: 240,
     
    },
    content: {
      padding: theme.spacing(1)
    }
  }) 
);

const MenuItems:Menu[] = [
  {
    key:'home',title:'Home',icon:<HomeIcon />,path:"/home",main:() => (<ItemList />)
  },
  {
    key:'assets',title:'機器一覧(PC)',icon:<DesktopWindowsIcon />,path:"/assets",main:()=> (<PCAssetList />)
  },
  {
    key:'otherassets',title:'機器一覧(PC以外)',icon:<KeyboardIcon />,path:"/otherassets",main:()=> (<OtherAssetList />)
  },
  {
    key:'employee',title:'従業員一覧',icon:<AccountCircleIcon />,path:"/employee",main:()=> (<EmployeeList />)
  },
  {
    key:'master',title:'マスタ管理',icon:<StorageIcon />,path:"/master",main:()=> (<CodeTableList />)
  }
];


const Main:FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Router>
        <div className={classes.root}>
          <SideNav menu={MenuItems}  />
          <main className={classes.main}>
            <div>
              <Switch>
                {MenuItems.map((route,index) => (            
                  <Route 
                    key={index}
                    path={route.path}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </main>
        </div>  
      </Router>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="regular">
          <Typography variant="h6" className={classes.title}>IT資産管理台帳</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>

  );
}

export default Main;