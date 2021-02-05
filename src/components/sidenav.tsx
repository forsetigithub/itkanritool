import React,{FC, useState} from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink, LinkProps as RouterLinkProps
} from "react-router-dom";
import { createStyles, makeStyles,Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    list: {
      width: 240,
      paddingTop: theme.spacing(4),
    }
}));

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
      className={classes.list}
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
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