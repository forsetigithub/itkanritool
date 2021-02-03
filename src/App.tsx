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
// import './App.css';
import ItemList from './components/Item-list';

import SideNav from './components/sidenav';

const useStyles = makeStyles({
  nav: {
    // backgroundColor:'red',
    height: '100vh'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


interface Menu {
  key:string;
  title:string;
  icon:any;
  path:string;
  main: ()=> any;
};

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MenuItems1:Menu[] = [
  {
    key:'home',title:'Home',icon:<HomeIcon />,path:"/home",main:()=> (<ItemList />)
  },
  {
    key:'assets',title:'機器一覧',icon:<DesktopWindowsIcon />,path:"/assets",main:()=> (<ItemList />)
  },
  {
    key:'employee',title:'従業員一覧',icon:<AccountCircleIcon />,path:"/employee",main:()=> (<ItemList />)
  },
  {
    key:'master',title:'マスタ管理',icon:<StorageIcon />,path:"/master",main:()=> (<ItemList />)
  }
];


function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

function App() {
  const classes = useStyles();

  const navlist = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
    <List>
      {MenuItems1.map((item, index) => (
        <ListItemLink 
          icon={item.icon}
          primary={item.title}
          to={item.path}
        />
      ))}
    </List>
    </div>
  );


  return (
    <Router>
      <div>
        <Grid container>
          <Grid item xs={2} className={classes.nav}>
            {navlist('left')}

          </Grid>
          <Grid xs={10}>
          
            <Switch>
              {MenuItems1.map((route,index) => (
              
                <Route 
                  key={index}
                  path={route.path}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;