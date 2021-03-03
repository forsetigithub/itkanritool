import React,{FC} from 'react';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
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

import {IMenu} from './Interface';
import ItemList from './components/Item-list';
import PCAssetList from './components/pcasset-list';
import OtherAssetList from './components/otherasset-list';
import EmployeeList from './components/employee-list';
import CodeTableList from './components/codetable-list';

import SideNav from './components/sidenav';
import { AppBar,Toolbar, Typography } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];

  const ITEM_HEIGHT = 48;

  const MenuItems:IMenu[] = [
    {
      key:'home',title:'Home',icon:<HomeIcon />,path:"/home",main:() => (<ItemList editable={props.editable} />)
    },
    {
      key:'assets',title:'機器一覧(PC)',icon:<DesktopWindowsIcon />,path:"/assets",main:()=> (<PCAssetList editable={props.editable}  />)
    },
    {
      key:'otherassets',title:'機器一覧(PC以外)',icon:<KeyboardIcon />,path:"/otherassets",main:()=> (<OtherAssetList editable={props.editable} />)
    },
    {
      key:'employee',title:'従業員一覧',icon:<AccountCircleIcon />,path:"/employee",main:()=> (<EmployeeList editable={props.editable} />)
    },
    {
      key:'master',title:'マスタ管理',icon:<StorageIcon />,path:"/master",main:()=> (<CodeTableList  editable={props.editable} />)
    }
  ];

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="regular">
          <Typography variant="h6" className={classes.title}>IT資産管理台帳</Typography>

          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>      
      <Router>
        <div className={classes.root}>
          <SideNav menu={MenuItems}  />
          <main className={classes.main}>
            <div>
              {/* <Switch> */}
                {/* <Route 
                  exact
                  path="/"
                  render={()=> {
                    return(
                      <Redirect to="/home" />
                    )
                  }}
                /> */}
                {MenuItems.map((route,index) => (            
                  <Route 
                    // exact
                    key={index}
                    path={route.path}
                    children={<route.main />}
                  />
                ))}
              {/* </Switch> */}
            </div>
          </main>
        </div>  
      </Router>
    </React.Fragment>

  );
}

export default Main;