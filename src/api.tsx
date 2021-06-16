import * as PROPS from './App.properties';
import { LoginUser,CodeItem } from './Interface';

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

export const GetPCMakerCodeItems = async():Promise<any[]> => {

  let makerListItems:any[] = [];

  await axios.get(`${PROPS.BASE_API_PATH}/GetCodeList/3`)
    .then((result) => {
      const obj_array:any[] = [];

      (result.data as CodeItem[]).forEach((value,index) => {
      switch(value.codeID) {
        //{1:'DELL',2:'HP',3:'Apple',4:'Microsoft',5:'acer',19:'富士通',98:その他,99:不明}
        case 1: 
        case 2:
        case 3:
        case 4:
        case 5:
        case 19:
        case 98:
        case 99:
          const obj = {
            id:value.codeID,
            name:value.codeName
          };
          obj_array.push(obj);

          break;
        default:
          break;
      }
    });
    
    makerListItems = obj_array.reduce((acc:any,cur:any) => {
      acc[cur.id] = cur.name;
      return acc;
    },{});

  });


  return makerListItems;
};
