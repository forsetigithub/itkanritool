import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Main from './Main';
import * as PROPS from './App.properties';

function App() {
  const [token,setToken] = useState();

  if(!token && !sessionStorage.getItem(PROPS.LOGIN_TOKEN)) {
    
    return (
      <SignIn setToken={setToken} />
    );
  }

  return (
    <Main />
  );
}

export default App;