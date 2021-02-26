import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Main from './Main';

function App() {
  const [token,setToken] = useState();

  if(!token) {
    console.log('********* Back to SignIn *********');
    return (
      <SignIn setToken={setToken} />
    );
  }

  return (
    <Main />
  );
}

export default App;