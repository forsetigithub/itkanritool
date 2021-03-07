import * as PROPS from './App.properties';
import { LoginUser } from './Interface';

import axios from 'axios';
import download from 'downloadjs';

import { Parser } from "json2csv";

export const CheckShowEditable = ():boolean => {
  const LOGIN_TOKEN:LoginUser = JSON.parse(sessionStorage.getItem(PROPS.LOGIN_TOKEN) as string);
  const privilegeCode = LOGIN_TOKEN.privilegeCode;

  return privilegeCode === PROPS.MANAGEMENT_PRIVILIEGE;
}

export const GetItemListCSV = (filename:string,getPathName:string) => {
  axios.get(`${PROPS.BASE_URL}/api/itmanagement2/${getPathName}`)
    .then((result) => {
      const parser = new Parser();
      const csv = parser.parse(result.data)

      download(csv,filename, "text/csv");

    } );
}
