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

  // const fields = [
  //   '資産種別',
  //   '備品番号',
  //   '現使用者',
  //   '部署',
  //   'メーカー',
  //   '型番',
  //   'サービスタグ',
  //   '種別',
  //   '保証期間',
  //   '保証',
  //   'pC備考',
  //   'モニター1',
  //   'モニター2',
  //   'モニター3',
  //   'モニター備考',
  //   'マウス番号',
  //   'マウス備考',
  //   'キーボード番号',
  //   'キーボード備考'
  // ];

  // const opts = {fields};

  axios.get(`${PROPS.BASE_URL}/api/itmanagement2/${getPathName}`)
    .then((result) => {
      const parser = new Parser();
      const csv = parser.parse(result.data)

      download(csv,filename, "text/csv");

    } );
}
