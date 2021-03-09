import React,{FC, useState} from 'react';

import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {makeStyles, createStyles, Theme}  from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorageIcon from '@material-ui/icons/Storage';
import { AppBar,Toolbar, Typography } from '@material-ui/core';

import {IMenu} from './Interface';
import ItemList from './components/Item-list';
import PCAssetList from './components/pcasset-list';
import OtherAssetList from './components/otherasset-list';
import EmployeeList from './components/employee-list';
import CodeTableList from './components/codetable-list';
import SideNav from './components/sidenav';
import OptionMenu from './components/option-menu';
import * as PROPS from './App.properties';

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


const Main:FC<{editable:boolean}> = (props:{editable:boolean}) => {
  const classes = useStyles();
  const [selectedIndex,setSelectedIndex] = useState(0);

  const MenuItems:IMenu[] = [
    {
      key:'home',title:'Home',icon:<HomeIcon />,path:`${PROPS.BASE_PATH}/home`,main:() => (<ItemList editable={props.editable} />)
    },
    {
      key:'assets',title:'機器一覧(PC)',icon:<DesktopWindowsIcon />,path:`${PROPS.BASE_PATH}/assets`,main:()=> (<PCAssetList editable={props.editable}  />)
    },
    {
      key:'otherassets',title:'機器一覧(PC以外)',icon:<KeyboardIcon />,path:`${PROPS.BASE_PATH}/otherassets`,main:()=> (<OtherAssetList editable={props.editable} />)
    },
    {
      key:'employee',title:'従業員一覧',icon:<AccountCircleIcon />,path:`${PROPS.BASE_PATH}/employee`,main:()=> (<EmployeeList editable={props.editable} />)
    },
    {
      key:'master',title:'マスタ管理',icon:<StorageIcon />,path:`${PROPS.BASE_PATH}/master`,main:()=> (<CodeTableList  editable={props.editable} />)
    }
  ];

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="regular">
          <Typography variant="h6" className={classes.title}>IT資産管理台帳</Typography>
          <OptionMenu selectedIndex={selectedIndex} />
        </Toolbar>
      </AppBar>      
      <Router>
        <div className={classes.root}>
          <SideNav menu={MenuItems} setSelectedIndex={setSelectedIndex} />
          <main className={classes.main}>
            <div>
              <Switch>
                <Route 
                  exact
                  path={`${PROPS.BASE_PATH}/`}
                  render={()=> {
                    return(
                      <Redirect to={`${PROPS.BASE_PATH}/home`} />
                    )
                  }}
                />
                {MenuItems.map((route,index) => (            
                  <Route 
                    exact
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
    </React.Fragment>

  );
}

export default Main;