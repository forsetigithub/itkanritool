

export interface IMenu {
  key:string;
  title:string;
  icon:any;
  path:string;
  main:() => any;
};

export type LoginUser = {
  id: number;
  mailAddress:string;
  pw: string;
  privilegeCode: number;
};

export type VPCitem = {
  pcItemCode: number;
  assetKindCode?: number;
  assetKindName: string;
  itemNumber: string;
  companyCode: number;
  temporaryEmployeeCode: number;
  formalEmployeeCode: string;
  employeeName: string;
  departmentName: string;
  makerCode?:number;
  makerName: string;
  pcTypeNumber: string;
  pcServiceTag: string;
  serialNo?:string;
  pcKindCode?: number;
  pcKindName: string;
  pcMemo: string; 
  monitorNumber1: number;
  monitorNumber1Name: string;
  monitorNumber2: number; 
  monitorNumber2Name: string; 
  monitorNumber3: number;
  monitorNumber3Name: string;
  monitorMemo: string;
  mouseNumber: string;
  mouseNumberName: string;
  mouseMemo: string;
  keyboardNumber: string;
  keyboardNumberName: string
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
  computerName: string;
}

export type PCItem = {
  pcItemCode:number;
  itemNumber:string;
  makerCode?:number;
  pcTypeNumber:string;
  pcKindCode?:number;
  pcServiceTag:string;
  serialNo?:string;
  pcMemo:string;
  monitorNumber1:number;
  monitorNumber2:number;
  monitorNumber3:number;
  monitorMemo:string;
  mouseNumber:string;
  mouseMemo:string;
  keyboardNumber:string;
  keyboardMemo:string;
  warrantyPeriod:Date;
  vpnSettingFlag:boolean;
  currentOwnerCompanyCode:number;
  currentOwnerEmployeeCode:number;
  assetKindCode?:number;
  pcLoginPW: string;
  computerName: string;
  useStatus?: number;
};

export type AccountInfo = {
  companyCode:number;
  temporaryEmployeeCode:number;
  systemCode:number;
  seqNo:number;
  idNumber:string;
  passWord:string;
  memo:string;
};

export type AccountItem = {
  companycode: number;
  employeecode:number;
  seqno:number;
  id:string;
  pw:string;
  memo:string;
};

export type CodeItem = {
  codeID: number;
  codeKindID: number;
  codeKindName: string;
  codeName: string;
  orderNumber?: number;
};

