import * as PROPS from './App.properties';
import { LoginUser,CodeItem } from './Interface';

import axios from 'axios';
import download from 'downloadjs';

import { Parser } from "json2csv";


type CodeListItem = {
    id:number;
    name:string;
};

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

 const GetCodeItems = async(codeKindID:number):Promise<CodeListItem[]> => {

  let resultList:CodeListItem[] = [];

  await axios.get(`${PROPS.BASE_API_PATH}/GetCodeList/${codeKindID}`)
    .then((result) => {

      const obj_array:CodeListItem[] = [];

      (result.data as CodeItem[]).forEach((value,index) => {

        const obj:CodeListItem = {
          id:value.codeID,
          name:value.codeName
        };

        obj_array.push(obj);

    });

    resultList = obj_array;

  });


  return resultList;
};


export const GetCodeListItems = async(codeKindID:number):Promise<CodeListItem[]> => {
  
  let resultList:CodeListItem[] = [];

  await GetCodeItems(codeKindID)
    .then((result) => {
      resultList = result.reduce((acc:any,cur:CodeListItem) => {
        acc[cur.id] = cur.name;
        return acc;
      },{});
    });

    return resultList;
};

export const GetPCMakerCodeItems = async():Promise<CodeListItem[]> => {

  let resultList:CodeListItem[] = [];

  await GetCodeItems(3)
    .then((result) => {

      const filteredResult:CodeListItem[] = 
        result.filter((value,index) => {
           //{1:'DELL',2:'HP',3:'Apple',4:'Microsoft',5:'acer',19:'富士通',98:その他,99:不明}
          return(
            value.id === 1  || 
            value.id === 2  ||
            value.id === 3  ||
            value.id === 4  ||
            value.id === 5  ||
            value.id === 19 ||
            value.id === 98 ||
            value.id === 99 
          );
      });

      resultList = filteredResult.reduce((acc:any,cur:CodeListItem) => {
        acc[cur.id] = cur.name;
        return acc;
      },{});

    });

  return resultList;
};



