import React,{FC, useState} from 'react';
import { Button, Form, Col,InputGroup } from 'react-bootstrap';
// import useAxios from 'axios-hooks';
import './pc-tab.css';
import axios from 'axios';


const PCTab:FC<any> = (props:any) => {

    const [pcInfo, setPcInfo] = useState(props.data);
    const [isLoading, setLoading] = useState<boolean>(false);
    
    const makerNameConboBox = [
      "DELL",
      "Apple",
      "HP",
      "Microsoft",
      "acer"
    ];

    const assetKindRadioButton = [
      {name:"デスクトップ",value:"デスクトップ" },
      {name:"ノート",value:"ノート"}
    ];

    const OnSaveBtnClick = (e:any) => {
      e.preventDefault();
      
      console.log(pcInfo);
      setLoading(true);

      axios
        .post('http://localhost:5000/api/itmanagement/postpcitems',pcInfo,{
        withCredentials: false
      })
      .then(response => {
        setLoading(false)
      });
    };

    const handleFormChange = (e:any) => {

      console.log(e.target.name + ':' + e.target.value);
      setPcInfo({...pcInfo, [e.target.name]: e.target.value});

      // console.log('assetkind:' + pcInfo.assetKind);
    };

    return(
      <div className="tab-border">
        <Form onSubmit={OnSaveBtnClick} >
          <Form.Row>
            <Col xs="auto">
              <Form.Group controlId="makerName" >
                <Form.Label>メーカー</Form.Label>

                <Form.Control as="select" name="makerName" 
                  defaultValue={pcInfo.makerName} onChange={handleFormChange}>
                  {makerNameConboBox.map((value,index) => (
                    <option value={value}>{value}</option>
                  ))}  
                </Form.Control>   
              </Form.Group>
            </Col>
              
            <Col xs="auto">
              <Form.Group controlId="pcTypeNumber">
              <Form.Label>型番</Form.Label>
              <Form.Control 
                  type="text"
                  name="pcTypeNumber"
                  value={pcInfo.pcTypeNumber}
                  onChange={handleFormChange} 
                  
              />   
              </Form.Group>
            </Col>

            <Col xs={5}>
              <Form.Group controlId="pcServiceTag">
                <Form.Label>サービスタグ</Form.Label>
                <Form.Control 
                  type="text"
                  name="pcServiceTag"
                  value={pcInfo.pcServiceTag}
                  onChange={handleFormChange} 
                />   
              </Form.Group>
            </Col>

            <Col xs="auto">
              <Form.Group>
                <Form.Label>種別</Form.Label>
                {assetKindRadioButton.map((radio,index) => (
                  <Form.Check
                    type="radio"
                    label={radio.value}
                    name="assetKind"
                    value={radio.value}
                    checked={pcInfo.assetKind === radio.value ? true: false}
                    onChange={handleFormChange}
                  />
                ))}
                         
              </Form.Group> 
            </Col>
                   
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="pcMemo">
                <Form.Label>備考</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="pcMemo"
                  value={pcInfo.pcMemo}
                  onChange={handleFormChange} 
                  />   
              </Form.Group>            
            </Col>

          </Form.Row>

          <Form.Row>
            <Col>
              <label htmlFor="monitor">モニター</label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">1</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="monitorNumber1" value={pcInfo.monitorNumber1} onChange={handleFormChange} aria-describedby="basic-addon1" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon2">2</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="monitorNumber2" value={pcInfo.monitorNumber2} onChange={handleFormChange} aria-describedby="basic-addon2" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">3</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="monitorNumber3" value={pcInfo.monitorNumber3} onChange={handleFormChange} aria-describedby="basic-addon3" />
              </InputGroup>

{/* 
              <Form.Group controlId="monitorNumber1">
                <Form.Label>モニター1</Form.Label>
                <Form.Control 
                    type="text"
                    name="monitorNumber1"
                    value={pcInfo.monitorNumber1}
                    onChange={handleFormChange}
                />   
              </Form.Group>            
            </Col>

            <Col>
              <Form.Group controlId="monitorNumber2">
                <Form.Label>モニター2</Form.Label>
                <Form.Control 
                  type="text"
                  name="monitorNumber2"
                  value={pcInfo.monitorNumber2}
                  onChange={handleFormChange}
                />   
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="monitorNumber3">
                <Form.Label>モニター3</Form.Label>
                <Form.Control 
                  type="text"
                  name="monitorNumber3"
                  value={pcInfo.monitorNumber3}
                  onChange={handleFormChange}
                />   
              </Form.Group>             */}
            </Col>

            <Col xs={10}>
              <Form.Group controlId="monitorMemo">
                <Form.Label>モニター備考</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="monitorMemo"
                  value={pcInfo.monitorMemo}
                  onChange={handleFormChange}
                />   
              </Form.Group>            
            </Col>

          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="mouseNumber">
                <Form.Label>マウス</Form.Label>
                <Form.Control 
                  type="text"
                  name="mouseNumber"
                  value={pcInfo.mouseNumber}
                  onChange={handleFormChange}
                />   
              </Form.Group>             
            </Col>

            <Col xs={4}>
              <Form.Group controlId="mouseMemo">
                <Form.Label>マウス備考</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="mouseMemo"
                  value={pcInfo.mouseMemo}
                  onChange={handleFormChange}
                />   
              </Form.Group>            
            </Col>

            <Col>
              <Form.Group controlId="keyboardNumber">
                <Form.Label>キーボード</Form.Label>
                <Form.Control 
                  type="text"
                  name="keyboardNumber"
                  value={pcInfo.keyboardNumber}
                  onChange={handleFormChange}
                />   
              </Form.Group>            
            </Col>

            <Col xs={4}>
              <Form.Group controlId="keyboardMemo">
                <Form.Label>キーボード備考</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="keyboardMemo"
                  value={pcInfo.keyboardMemo}
                  onChange={handleFormChange}
                />   
              </Form.Group> 
            </Col>
  
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

export default PCTab;