import React,{FC, useState} from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import './pc-tab.css';

const PCTab:FC<any> = (props:any) => {
    return(
      <div className="tab-border">
        <Form>
          <Form.Row>
            <Col xs="auto">
              <Form.Group controlId="makerName">
                <Form.Label>メーカー</Form.Label>
                <Form.Control as="select" custom>
                  <option selected={props.data.makerName === "DELL"}>DELL</option>
                  <option selected={props.data.makerName === "Apple"}>Apple</option>
                  <option selected={props.data.makerName === "HP"}>HP</option>
                  <option selected={props.data.makerName === "Microsoft"}>Microsoft</option>
                  <option selected={props.data.makerName === "acer"}>acer</option>
                </Form.Control>   
              </Form.Group>
            </Col>
              
            <Col xs="auto">
              <Form.Group controlId="pcTypeNumber">
              <Form.Label>型番</Form.Label>
              <Form.Control 
                  type="text"
                  name="pcTypeNumber"
                  value={props.data.pcTypeNumber}
              />   
              </Form.Group>
            </Col>

            <Col xs={5}>
              <Form.Group controlId="pcServiceTag">
                <Form.Label>サービスタグ</Form.Label>
                <Form.Control 
                  type="text"
                  name="pcServiceTag"
                  value={props.data.pcServiceTag}
                />   
              </Form.Group>
            </Col>

            <Col xs="auto">
              <Form.Group controlId="assetKind">
                <Form.Label>種別</Form.Label>
                <Form.Check 
                  type="radio"
                  label="デスクトップ"
                  name="assetKind"
                  id="assetKindDesktop"
                  checked={props.data.assetKind ==="デスクトップ" }
                
                />
                <Form.Check 
                  type="radio"
                  label="ノート"
                  name="assetKind"
                  id="assetKindNote" 
                  checked={props.data.assetKind ==="ノート" }                  
                />                          
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
                  value={props.data.pcMemo}
                  />   
              </Form.Group>            
            </Col>

          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="monitorNumber1">
                <Form.Label>モニター1</Form.Label>
                <Form.Control 
                    type="text"
                    name="monitorNumber1"
                    value={props.data.monitorNumber1}
                />   
              </Form.Group>            
            </Col>

            <Col>
              <Form.Group controlId="monitorNumber2">
                <Form.Label>モニター2</Form.Label>
                <Form.Control 
                  type="text"
                  name="monitorNumber2"
                  value={props.data.monitorNumber2}
                />   
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="monitorNumber3">
                <Form.Label>モニター3</Form.Label>
                <Form.Control 
                  type="text"
                  name="monitorNumber3"
                  value={props.data.monitorNumber3}
                />   
              </Form.Group>            
            </Col>

            <Col xs={7}>
              <Form.Group controlId="monitorMemo">
                <Form.Label>モニター備考</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="monitorMemo"
                  value={props.data.monitorMemo}
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
                  value={props.data.mouseNumber}
                />   
              </Form.Group>             
            </Col>

            <Col xs={4}>
              <Form.Group controlId="mouseMemo">
                <Form.Label>マウス備考</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="mouseMemo"
                  value={props.data.mouseMemo}
                />   
              </Form.Group>            
            </Col>

            <Col>
              <Form.Group controlId="keyboardNumber">
                <Form.Label>キーボード</Form.Label>
                <Form.Control 
                  type="text"
                  name="keyboardNumber"
                  value={props.data.keyboardNumber}
                />   
              </Form.Group>            
            </Col>

            <Col xs={4}>
              <Form.Group controlId="keyboardMemo">
                <Form.Label>キーボード備考</Form.Label>
                <Form.Control 
                  type="textarea"
                  name="keyboardMemo"
                  value={props.data.keyboardMemo}
                />   
              </Form.Group> 
            </Col>
  
        </Form.Row>                                                                                                                                                    
        </Form>    
      </div>
    );
}

export default PCTab;