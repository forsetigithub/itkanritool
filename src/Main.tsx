import React,{FC,useEffect,useState} from 'react';

import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch as RouterSwitch,
  Route,
  Redirect,
} from "react-router-dom";

import {makeStyles, createStyles, Theme}  from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MouseIcon from '@material-ui/icons/Mouse';
import UsbIcon from '@material-ui/icons/Usb';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorageIcon from '@material-ui/icons/Storage';
import { AppBar,Toolbar, Typography,Switch, Container } from '@material-ui/core';

import {IMenu, LoginUser} from './Interface';
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
    //svgタグ以外を反映
      '& *:not(svg)': {
        "font-size": 'calc(0.3rem + 1vmin)'
      },
    },
    appBar: {
      zIndex:theme.zIndex.drawer + 1,
    },
    main: {
      paddingTop:theme.spacing(4),
      paddingLeft:theme.spacing(30)
    },
    title: {
      flexGrow:1,
    },
    list: {
      width: 240,
    },
  }) 
);


const Main:FC<{editable:boolean,themetype?:string,selectedIndex:number}> = 
 (props:{editable:boolean,themetype?:string,selectedIndex:number}) => {

  const classes = useStyles();
  const [selectedIndex,setSelectedIndex] = useState(0);
  const [checkTheme,setCheckTheme] = useState(false);
  const [MenuItems,setMenuItems] = useState<IMenu[]>([]);

  useEffect(() => {
    const theme_string = String(localStorage.getItem("selectedtheme"));
    theme_string === 'dark' ? setCheckTheme(true) : setCheckTheme(false);
    setSelectedIndex(props.selectedIndex);

    const login_token:LoginUser = JSON.parse(sessionStorage.getItem(PROPS.LOGIN_TOKEN) as string);

    const obj_token = {
      id:login_token.id || 0,
      privilegeCode:login_token.privilegeCode || 0
    };

    sessionStorage.removeItem(PROPS.LOGIN_TOKEN);
    sessionStorage.setItem(PROPS.LOGIN_TOKEN, JSON.stringify(obj_token));

    let menuitems:IMenu[] = [
      {
        key:'home',title:'Home',icon:<HomeIcon />,path:`${PROPS.BASE_PATH}/home`,main:() => (<ItemList editable={props.editable} />)
      },
      {
        key:'assets',title:'PC',icon:<LaptopMacIcon />,path:`${PROPS.BASE_PATH}/assets`,main:()=> (<PCAssetList editable={props.editable}  />)
      },
      {
        key:'monitors',title:'モニター',icon:<DesktopWindowsIcon />,path:`${PROPS.BASE_PATH}/monitors`,main:()=> (<OtherAssetList editable={props.editable} itemKindNo={1} lookup={{1:'モニター'}} />)
      },
      {
        key:'keyboards',title:'キーボード',icon:<KeyboardIcon />,path:`${PROPS.BASE_PATH}/keyboards`,main:()=> (<OtherAssetList editable={props.editable} itemKindNo={2} lookup={{2:'キーボード'}} />)
      },
      {
        key:'mouses',title:'マウス',icon:<MouseIcon />,path:`${PROPS.BASE_PATH}/mouses`,main:()=> (<OtherAssetList editable={props.editable} itemKindNo={3} lookup={{3:'マウス'}}  />)
      },
      {
        key:'cables',title:'ケーブル',icon:<UsbIcon />,path:`${PROPS.BASE_PATH}/cables`,main:()=> (<OtherAssetList editable={props.editable} itemKindNo={4} lookup={{4:'ケーブル'}}  />)
      },
      {
        key:'employee',title:'従業員一覧',icon:<AccountCircleIcon />,path:`${PROPS.BASE_PATH}/employee`,main:()=> (<EmployeeList editable={props.editable} />)
      },
      {
        key:'master',title:'マスタ管理',icon:<StorageIcon />,path:`${PROPS.BASE_PATH}/master`,main:()=> (<CodeTableList  editable={props.editable} />)
      }
    ];
  
    if((JSON.parse(sessionStorage.getItem(PROPS.LOGIN_TOKEN) as string) as LoginUser).privilegeCode === 3) {
      menuitems = menuitems.filter((value,index) => {
        return(value.key === 'employee');
      });
    } 
    
    setMenuItems(menuitems);

  },[setCheckTheme,setMenuItems,props]);


  const handlecheckTheme = (event:any) => {
    localStorage.setItem("selectedtheme",event.target.checked ? 'dark' : 'light');
    window.location.reload();
  };
 
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="regular">
          <Typography variant="h6" className={classes.title}>IT資産管理台帳</Typography>
          <div>
            { ((JSON.parse(sessionStorage.getItem(PROPS.LOGIN_TOKEN) as string)) as LoginUser).privilegeCode === 3 ? null :
             <OptionMenu selectedIndex={selectedIndex} /> }
          </div>
          <Switch checked={checkTheme} name="checkTheme" onChange={handlecheckTheme} color="default" />
        </Toolbar>
      </AppBar>      
      <Router>
        <div className={classes.root}>
          <SideNav menu={MenuItems} setSelectedIndex={setSelectedIndex} 
            themetype={String(localStorage.getItem('selectedtheme'))} />
          <main className={classes.main}>
            <Container maxWidth={false}>
              <RouterSwitch>
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
              </RouterSwitch>
            </Container>
          </main>
        </div>  
      </Router>
    </React.Fragment>

  );
}

export default Main;