import * as PROPS from './App.properties';
import { LoginUser } from './Interface';

export const CheckShowEditable = ():boolean => {
  const LOGIN_TOKEN:LoginUser = JSON.parse(sessionStorage.getItem(PROPS.LOGIN_TOKEN) as string);
  const privilegeCode = LOGIN_TOKEN.privilegeCode;

  return privilegeCode === PROPS.MANAGEMENT_PRIVILIEGE;
}
