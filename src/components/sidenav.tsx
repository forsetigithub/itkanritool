import React,{FC, useState} from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink, LinkProps as RouterLinkProps
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorageIcon from '@material-ui/icons/Storage';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import ItemList from './Item-list';

const useStyles = makeStyles({
  list: {
    width: 240,
  },
  // fullList: {
  //   width: 'auto',
  // },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';


export interface Menu {
  key:string;
  title:string;
  icon:any;
  path:string;
  main:() => any;
};

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps}  />
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

const SideNav:FC<{menu:Menu[]}> = (props:{menu:Menu[]}) => {
  const classes = useStyles();

  const list = (anchor: Anchor) => (
    <div
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
      role="presentation"
    >
      <List>
        {props.menu.map((item, index) => (
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
    <React.Fragment>
      <Drawer
        className={classes.list}
        anchor='left'
        open={true}
        variant="permanent"
        classes= {{
          paper:classes.list
        }}
      >
        {list('left')}
      </Drawer>
    </React.Fragment>
  );
}

export default SideNav;