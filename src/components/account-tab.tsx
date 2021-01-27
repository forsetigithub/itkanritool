import React,{FC, useState} from 'react';
import { Button, Form, Col, Card, InputGroup } from 'react-bootstrap';
import './account-tab.css';
import axios from 'axios';

const AccountTab: FC<any> = (props:any) => {

  const [accountInfo, setAccountInfo] = useState(props.data);


  const OnSaveClick = (e:any) => {


  };

  const handleFormChange = (e:any) => {
    setAccountInfo({...accountInfo, [e.target.name]: e.target.value});

  };

  return(
    <div>
      <Form onSubmit={OnSaveClick}>
        <Form.Row>

          <Col xs="auto">
            <label htmlFor="email">メールアドレス</label>
    
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    Address
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control id="mailAddress" value={accountInfo.mailAddress} onChange={handleFormChange} aria-describedby="basic-addon3" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    PW
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control id="mailPassword" value={accountInfo.mailPassword} onChange={handleFormChange} aria-describedby="basic-addon3" />
              </InputGroup> 
   

          </Col>
          <Col xs="auto">

           
          </Col>
        </Form.Row>
      </Form>
    </div>

  );
}

export default AccountTab;