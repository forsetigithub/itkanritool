import React,{FC, useState} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './item-tab.css';
import PCTab from './pc-tab';
import AccountTab from './account-tab'; 

const ItemTab:FC<any> =(props:any) =>{
    const [key,setKey] = useState('pc');
    
    return(
      <Tabs activeKey={key}
        onSelect={(k:any) => setKey(k)}>

        <Tab eventKey="pc" title="PC">
          <PCTab data={props.data} />
        </Tab>
        <Tab eventKey="account" title="アカウント">
          <AccountTab data={props.data} />
        </Tab>          
      </Tabs>

    );

}

export default ItemTab;