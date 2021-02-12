import React,{FC,forwardRef, useMemo} from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink, LinkProps as RouterLinkProps
} from "react-router-dom";
import MaterialTable, { Icons } from 'material-table';
import Container from '@material-ui/core/Container';
import {makeStyles, createStyles, Theme}  from '@material-ui/core/styles';
import useAxios from 'axios-hooks';

import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorageIcon from '@material-ui/icons/Storage';

import {Menu} from './Interface';
// import './App.css';
import ItemList from './components/Item-list';
import PCAssetList from './components/pcasset-list';

import SideNav from './components/sidenav';
import { AppBar, CssBaseline, Drawer, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
  
      // '& *':{
      //   // backgroundColor:'black',
      //   // color:'white'
  
      // },
      display:'flex',
    },
    appBar: {
      zIndex:theme.zIndex.drawer + 1
    },
    main: {
      paddingTop:theme.spacing(4),
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
    key:'assets',title:'機器一覧',icon:<DesktopWindowsIcon />,path:"/assets",main:()=> (<PCAssetList />)
  },
  {
    key:'employee',title:'従業員一覧',icon:<AccountCircleIcon />,path:"/employee",main:()=> (<h1>従業員一覧</h1>)
  },
  {
    key:'master',title:'マスタ管理',icon:<StorageIcon />,path:"/master",main:()=> (<h1>マスタ管理</h1>)
  }
];


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>IT資産管理台帳</Typography>
      </Toolbar>
      </AppBar>
    </div>

  );
}

export default App;