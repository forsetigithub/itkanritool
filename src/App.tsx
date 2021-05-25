import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Main from './Main';
import * as PROPS from './App.properties';
import { CheckShowEditable } from './api';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.blue[800],
      },
      secondary: {
        main: '#FF1A40',
      },
      type: localStorage.getItem("selectedtheme") === 'dark' ? 'dark' : 'light',
    }
  });


  const [token,setToken] = useState();

  if(!token && !sessionStorage.getItem(PROPS.LOGIN_TOKEN)) {
    
    return (
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <SignIn setToken={setToken} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main editable={CheckShowEditable()} selectedIndex={Number(sessionStorage.getItem("selectedindex") || 0)}  />
    </ThemeProvider>

  );
}

export default App;