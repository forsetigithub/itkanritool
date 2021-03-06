import React,{useState,useEffect, FC} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { red } from '@material-ui/core/colors';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import * as PROPS from '../App.properties';
import { LoginUser } from '../Interface';


type Credentials = {
  mailAddress?:string;
  pw?:string;
};

function Copyright() {
  const p = require('../../package.json');
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <div>
        {'Copyright © '}
        <Link color="inherit" href="#">
          KIZUNA.inc
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
      <div>
        {'Ver.'}
        {p.version}
      </div>
    </Typography>
    
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color:red[500],
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
  },
}));


// eslint-disable-next-line no-empty-pattern
const SignIn:FC<any> = ({setToken}:any) => {
  const classes = useStyles();

  const [isLoading,setLoading] = useState<boolean>(false);
  const [username,setUserName] = useState<string>();
  const [password,setPassword] = useState<string>();
  const [errormsg,setErrorMsg] = useState<string>('');

  const  GetLoginUser = async (credentials:Credentials) => {
    setLoading(true);

    const loginUser:LoginUser = {id:0,mailAddress:credentials.mailAddress || '',pw:credentials.pw || '',privilegeCode:0};
    
    await axios.post<LoginUser>(`${PROPS.BASE_API_PATH}/GetLoginUser`,loginUser)
      .then((result) => {
        sessionStorage.setItem(PROPS.LOGIN_TOKEN, JSON.stringify(result.data));
        setLoading(false);
        setToken(result.data);               
      })
      .catch((error) => {
        if(error.response) {
          setErrorMsg('メールアドレスまたはパスワードが違います')
        }
      }).finally(() => {
        setLoading(false);
      });
    
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {

    event.preventDefault();

    const credentials:Credentials = {mailAddress:username, pw:password};
    await GetLoginUser(credentials);

  };

  useEffect(() => {
    setUserName('');
    setPassword('');
  },[]);

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" size={80} />
      </Backdrop>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            IT資産管理台帳
          </Typography>
          <form className={classes.form} onSubmit={onSubmitHandler} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e:any) => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e:any) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmitHandler}
            >
              ログイン
            </Button>
            <Grid container>
              <Grid item xs>
              <Typography className={classes.error} >{errormsg}</Typography>
              
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>

  );
}

export default SignIn;
