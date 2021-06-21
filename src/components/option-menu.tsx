import React,{FC,useState} from 'react';
import { createStyles, makeStyles,Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import * as PROPS from '../App.properties';
import {GetItemListCSV} from '../api';

const useStyle = makeStyles((theme:Theme) =>
  createStyles({
    root : {
      color: 'white',
    },
  })
);


const OptionMenu:FC = () => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const options = [
    {title:'CSV出力' },
  ];


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {

    event.stopPropagation();
    setAnchorEl(event.currentTarget);

  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);

    switch(event.currentTarget.innerText) {
      case 'CSV出力':
        const selectedMenuIndex = Number(sessionStorage.getItem(PROPS.SELECTED_MENU_INDEX) || -1);  
        switch(selectedMenuIndex) {
          case 0: //Home
            GetItemListCSV(`IT資産データ.csv`,'GetVPCitemsCSV');
            break;
        
        }     
    }
  };

  const ITEM_HEIGHT = 48;

  return(
    <React.Fragment>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.root}
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
          <MenuItem key={option.title}  onClick={handleClose} >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>

  );
}

export default OptionMenu;