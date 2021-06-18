import React,{FC, useState,useEffect} from 'react';
import {
  Link as RouterLink, LinkProps as RouterLinkProps
} from "react-router-dom";
import { createStyles, makeStyles,Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { blue,red } from '@material-ui/core/colors';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ClassIcon from '@material-ui/icons/Class';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    list: {
      width: 240,
      paddingTop: theme.spacing(4),
    },
    icon :{
      color:'#757ce8',
    },
    nested: {
      paddingLeft: theme.spacing(4),
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
  iconColor?: React.CSSProperties;
  primary: string;
  to: string;
  selected:boolean;
  style?:React.CSSProperties;
  onClick:(event:any) => any;
  className?:any;
}

type typeSelectedStyle = {
  backgroundColor:string;
  color: string;
};


const ListItemLink:FC<ListItemLinkProps> = (props: ListItemLinkProps) => {
  const { icon,iconColor, primary, to, selected,style, onClick,className} = props;

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
        onClick={onClick}
        className={className}
        style={style}>
        {icon ? <ListItemIcon style={iconColor} >{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const SideNav:FC<{menu:Menu[],setSelectedIndex:React.Dispatch<React.SetStateAction<number>>,
      themetype?:string,accessLevelCode:number}> =
      (props:{menu:Menu[],setSelectedIndex:React.Dispatch<React.SetStateAction<number>>,
        themetype?:string,accessLevelCode:number}) => {

  const classes = useStyles();

  const [selectedIndex,setSelectedIndex] = useState(0);
  const [open,setOpen] = useState(false);
  const [selectedTheme,setSelectedTheme] = useState('');
  const [selectedStyle,setSelectedStyle] = useState<typeSelectedStyle>();

  useEffect(() => {
    const index = Number(sessionStorage.getItem("selectedindex") || 0);
    setSelectedIndex(index);

    setSelectedTheme(String(localStorage.getItem('selectedtheme') || 'light'));
    
    const style:typeSelectedStyle = {
      backgroundColor: selectedTheme === 'light' ? blue[50] : 'White',
      color: selectedTheme === 'light' ? red[700] : 'Black',
    }
    setSelectedStyle(style);

  },[setSelectedIndex, setSelectedTheme, setSelectedStyle, selectedTheme,props]);

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement,MouseEvent>,index: number) => {
    setSelectedIndex(index);
    sessionStorage.setItem("selectedindex",String(index));
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const list = (anchor: Anchor) => (
    <div className={classes.list}>
      <List>
        {props.menu.filter(f => f.key === 'home' || 
                                f.key === 'assets').map((item, index) => (
            <ListItemLink 
              key={index}
              icon={item.icon}
              iconColor={selectedIndex === index ? {color: red[500]} : undefined}
              primary={item.title}
              to={item.path}
              selected={selectedIndex === index}
              style={selectedIndex === index ? selectedStyle : undefined}
              onClick={(event) => handleListItemClick(event,index)}
            />            
        ))}
       
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="PC以外" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {props.menu.filter(f => f.key === 'monitors'  ||
                                    f.key === 'keyboards' ||
                                    f.key === 'mouses'    ||
                                    f.key === 'cables'
                                    ).map((item, index) => (
              
              <ListItemLink
                key={index}
                icon={item.icon}
                iconColor={selectedIndex === (index + 2) ? {color: red[500]} : undefined}
                primary={item.title}
                to={item.path}
                selected={selectedIndex === (index + 2)}
                style={selectedIndex === (index + 2) ? selectedStyle : undefined}
                onClick={(event) => handleListItemClick(event,index + 2)}
                className={classes.nested}
              />            
            ))}
          </List>

        </Collapse>

        {props.menu.filter(f => f.key === 'employee' || 
                                f.key === 'master').map((item, index) => (
            <ListItemLink 
              key={index}
              icon={item.icon}
              iconColor={selectedIndex === (index + 6) ? {color: red[500]} : undefined}
              primary={item.title}
              to={item.path}
              selected={selectedIndex === (index + 6)}
              style={selectedIndex === (index + 6) ? selectedStyle : undefined}
              onClick={(event) => handleListItemClick(event,(index + 6))}
            />            
        ))}

      </List>
    </div>
  );

  const limitedlist = (anchor: Anchor) => (
    <div className={classes.list}>
      <List>
        {props.menu.filter(f => f.key === 'employee').map((item, index) => (
            <ListItemLink 
              key={index}
              icon={item.icon}
              iconColor={selectedIndex === (index) ? {color: red[500]} : undefined}
              primary={item.title}
              to={item.path}
              selected={selectedIndex === (index)}
              style={selectedIndex === (index) ? selectedStyle : undefined}
              onClick={(event) => handleListItemClick(event,(index))}
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
        {props.accessLevelCode === 3 ? limitedlist('left') : list('left')}
      </Drawer>
    </React.Fragment>
  );
}

export default SideNav;