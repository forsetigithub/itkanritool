import React,{FC, useState} from 'react';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';
import './account-tab.css';
import axios from 'axios';

const AccountTab: FC<any> = (props:any) => {

  const [accountInfo, setAccountInfo] = useState(props.data);
  const [isLoading, setLoading] = useState<boolean>(false);

  const accountInfoItems = [
    {
      htmlfor:"email",
      label:"メールアドレス", 
      id_info: {
      id_text:"Address",id_name:"mailAddress",id_value:accountInfo.mailAddress,
      pw_text:"PW",pw_name:"mailPassword",pw_value:accountInfo.mailPassword } 
    },
    {
      htmlfor:"chatwork",
      label:"チャットワーク", 
      id_info: {
      id_text:"ID",id_name:"chatwork_ID",id_value:accountInfo.chatwork_ID,
      pw_text:"PW",pw_name:"chatwork_PW",pw_value:accountInfo.chatwork_PW } 
    },
    {
      htmlfor:"cybouzu",
      label:"サイボウズ", 
      id_info: {
      id_text:"ID",id_name:"cybouzu_ID",id_value:accountInfo.cybouzu_ID,
      pw_text:"PW",pw_name:"cybouzu_PW",pw_value:accountInfo.cybouzu_PW} 
    },
  ];

  const OnSaveClick = (e:any) => {
    e.preventDefault();
      
    console.log(accountInfo);
    setLoading(true);

    axios
      .post('http://localhost:5000/api/itmanagement/PostAccountInfo',accountInfo,{
      withCredentials: false
    })
    .then(response => {
      setLoading(false)
    });

  };

  const handleFormChange = (e:any) => {
    setAccountInfo({...accountInfo, [e.target.name]: e.target.value});
    console.log('accountInfo:');
    console.log(accountInfo);
  };

  return(
    <div>
      <Form onSubmit={OnSaveClick}>
        <Form.Row>
          {accountInfoItems.map((value,index) => (
            <Col>
              <label htmlFor={value.htmlfor}>{value.label}</label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">{value.id_info.id_text}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name={value.id_info.id_name} value={value.id_info.id_value} onChange={handleFormChange} aria-describedby="basic-addon3" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">{value.id_info.pw_text}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name={value.id_info.pw_name} value={value.id_info.pw_value} onChange={handleFormChange} aria-describedby="basic-addon3" />
              </InputGroup> 
            </Col>
          ))}
        </Form.Row>
        <Form.Row >
            <Col className="row-save-btn">
              <Button type="submitt" disabled={isLoading} size="lg">{isLoading ? '保存しています...' : '保存'}</Button>
            </Col>
          </Form.Row>  
      </Form>
    </div>
  );
}

export default AccountTab;