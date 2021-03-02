import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Main from './Main';
import * as PROPS from './App.properties';
import { CheckShowEditable } from './api';


function App() {
  const [token,setToken] = useState();

  if(!token && !sessionStorage.getItem(PROPS.LOGIN_TOKEN)) {
    
    return (
      <SignIn setToken={setToken} />
    );
  }

  return (
    <Main editable={CheckShowEditable()}  />
  );
}

export default App;