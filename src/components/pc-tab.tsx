import React,{FC, useState} from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import './pc-tab.css';

const PCTab:FC = () => {
    return(
        <div className="tab-border">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="makerName">
                        <Form.Label>メーカー</Form.Label>
                        <Form.Control as="select" custom>
                            <option>DELL</option>
                            <option>Apple</option>
                        </Form.Control>   
                    </Form.Group>
                    <Form.Group as={Col} controlId="pcTypeNumber">
                        <Form.Label>型番</Form.Label>
                        <Form.Control 
                            type="text"
                            name="pcTypeNumber"
                        />   
                    </Form.Group>
                    <Form.Group as={Col} controlId="pcServiceTag">
                        <Form.Label>サービスタグ</Form.Label>
                        <Form.Control 
                            type="text"
                            name="pcServiceTag"
                        />   
                    </Form.Group>
                    <Form.Group as={Col} controlId="assetKind">
                        <Form.Label>種別</Form.Label>
                        <Form.Check 
                            type="radio"
                            label="デスクトップ"
                            name="assetKind"
                            id="assetKindDesktop"
                        
                        />
                        <Form.Check 
                            type="radio"
                            label="ノート"
                            name="assetKind"
                            id="assetKindNote"                   
                        />                          
                    </Form.Group>                    
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="pcMemo">
                        <Form.Label>備考</Form.Label>
                        <Form.Control 
                            type="textarea"
                            name="pcMemo"
                        />   
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="monitorNumber1">
                        <Form.Label>モニター1</Form.Label>
                        <Form.Control 
                            type="text"
                            name="monitorNumber1"
                        />   
                    </Form.Group>
                    <Form.Group as={Col} controlId="monitorNumber2">
                        <Form.Label>モニター2</Form.Label>
                        <Form.Control 
                            type="text"
                            name="monitorNumber2"
                        />   
                    </Form.Group>
                    <Form.Group as={Col} controlId="monitorNumber3">
                        <Form.Label>モニター3</Form.Label>
                        <Form.Control 
                            type="text"
                            name="monitorNumber3"
                        />   
                    </Form.Group>
                    <Form.Group as={Col} controlId="monitorMemo">
                        <Form.Label>モニター備考</Form.Label>
                        <Form.Control 
                            type="textarea"
                            name="monitorMemo"
                        />   
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="mouseNumber">
                        <Form.Label>マウス</Form.Label>
                        <Form.Control 
                            type="text"
                            name="mouseNumber"
                        />   
                    </Form.Group> 
                    <Form.Group as={Col} controlId="mouseMemo">
                        <Form.Label>マウス備考</Form.Label>
                        <Form.Control 
                            type="textarea"
                            name="mouseMemo"
                        />   
                    </Form.Group>
                    <Form.Group as={Col} controlId="keyboardNumber">
                        <Form.Label>キーボード</Form.Label>
                        <Form.Control 
                            type="text"
                            name="keyboardNumber"
                        />   
                    </Form.Group>
                    <Form.Group as={Col} controlId="keyboardMemo">
                        <Form.Label>キーボード備考</Form.Label>
                        <Form.Control 
                            type="textarea"
                            name="keyboardMemo"
                        />   
                    </Form.Group>   
                </Form.Row>
                                                                                                                                                                   
            </Form>    
        </div>

    );
}

export default PCTab;