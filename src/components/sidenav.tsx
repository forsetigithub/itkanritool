import React,{FC, useState} from 'react';
import {
  Link as RouterLink, LinkProps as RouterLinkProps
} from "react-router-dom";
import { createStyles, makeStyles,Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
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
  key:number;
  icon?: React.ReactElement;
  primary: string;
  to: string;
  selected:boolean;
  onClick:(event:any) => any;
}

const ListItemLink:FC<ListItemLinkProps> = (props: ListItemLinkProps) => {
  const { icon, primary, to, selected, onClick} = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps}  />
      )),
    [to],
  );
  
  return (
    <li>
      <ListItem button component={renderLink} 
        selected={selected}
        onClick={onClick}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const SideNav:FC<{menu:Menu[]}> = (props:{menu:Menu[]}) => {
  const classes = useStyles();

  const [selectedIndex,setSelectedIndex] = useState(0);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement,MouseEvent>,
    index: number) => {
      setSelectedIndex(index);
    };

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
            key={index}
            icon={item.icon}
            primary={item.title}
            to={item.path}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event,index)}

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
        }}>
        {list('left')}
      </Drawer>
    </React.Fragment>
  );
}

export default SideNav;