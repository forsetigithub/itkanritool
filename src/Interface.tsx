import React from 'react';

export interface Menu {
  key:string;
  title:string;
  icon:any;
  path:string;
  main:() => any;
};

export type VPCitem = {
  pcItemCode: number;
  assetKindCode: string;
  itemNumber: string;
  companyCode: number;
  temporaryEmployeeCode: number;
  formalEmployeeCode: string;
  employeeName: string;
  departmentName: string;
  makerName: string;
  pcTypeNumber: string;
  pcServiceTag: string;
  assetKind: string;
  pcMemo: string; 
  monitorNumber1: string;
  monitorNumber2: string; 
  monitorNumber3: string;
  monitorMemo: string;
  mouseNumber: string;
  mouseMemo: string;
  keyboardNumber: string;
  keyboardMemo: string;
  warrantyPeriod: Date;
  warranty: string;
  vpnSetting: string;
  mailAddress: string;
  mailPassword: string;
  chatwork_ID: string;
  chatwork_PW: string;
  office365_ID: string;
  cybouzu_ID: string;
  cybouzu_PW: string;
  pcLoginPW: string;
}

