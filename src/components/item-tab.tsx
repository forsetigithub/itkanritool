import React,{FC, useState} from 'react';
import { Tabs,Tab,Card,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './item-tab.css';


const ItemTab:FC =() =>{
    const [key,setKey] = useState('pc');
    

    return(
        <Tabs activeKey={key}
              onSelect={(k:any) => setKey(k)}>

            <Tab eventKey="pc" title="PC">
                PC_Content
            </Tab>
            <Tab eventKey="account" title="アカウント">
                Account_Content
            </Tab>          
        </Tabs>

    );

}

export default ItemTab;