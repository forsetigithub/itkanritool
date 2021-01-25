import React from 'react';

import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';

import ItemList from './components/Item-list';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faDesktop,faUser,faDatabase} from '@fortawesome/free-solid-svg-icons';

function App() {
 
  return (

    <body className="body">
      <ReactBootstrap.Container fluid>
        <ReactBootstrap.Row>  
 
          <div className="col_nav">
            <ReactBootstrap.Nav variant="pills" className="flex-column" id="menu-nav">
              <ReactBootstrap.NavbarBrand id="app-title">IT資産管理台帳</ReactBootstrap.NavbarBrand>
                <ReactBootstrap.Nav.Item>
                  <ReactBootstrap.Nav.Link href="/home"><FontAwesomeIcon icon={faHome} />Home</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>

                <ReactBootstrap.Nav.Item>
                  <ReactBootstrap.Nav.Link href="/items"><FontAwesomeIcon icon={faDesktop}/>機器一覧</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>

                <ReactBootstrap.Nav.Item>
                  <ReactBootstrap.Nav.Link href="/employee"><FontAwesomeIcon icon={faUser} />従業員一覧</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>

                <ReactBootstrap.Nav.Item>
                  <ReactBootstrap.Nav.Link href="/master"><FontAwesomeIcon icon={faDatabase}/>マスタ管理</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>       
            </ReactBootstrap.Nav>

          </div>
          <ReactBootstrap.Col className="col_main">
            <div>
              <ItemList />
            </div>
 
          </ReactBootstrap.Col>

        </ReactBootstrap.Row>
      </ReactBootstrap.Container>
    </body>

  );
}

export default App;
