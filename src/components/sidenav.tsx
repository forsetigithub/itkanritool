import React from 'react';
import clsx from 'clsx';
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
// import MailIcon from '@material-ui/icons/Mail';;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';


interface Menu {
  key:string;
  title:string;
  icon:any;
};

const MenuItems1:Menu[] = [
  {
    key:'home',title:'Home',icon:<HomeIcon />
  },
  {
    key:'asset',title:'機器一覧',icon:<DesktopWindowsIcon />
  },
  {
    key:'employee',title:'従業員一覧',icon:<AccountCircleIcon />
  },

];
const MenuItems2:Menu[] = [
  {
    key:'master',title:'マスタ管理',icon:<StorageIcon />
  },
];


export default function SideNav() {
  const classes = useStyles();
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <List>
        {MenuItems1.map((item, index) => (
          <ListItem button key={item.key}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {MenuItems2.map((item, index) => (
          <ListItem button key={item.key}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor='left'
          open={true}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}