import React, {
  FC,
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import FirebaseContext from '../../core/firebase/withFirebase';
import useFirebaseAuthentication from '../../hooks/use-firebase-auth';
import { useHistory } from "react-router-dom";
import { Box, Button, Paper, Grid, TextField, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';
import { validate as validateEmail } from 'email-validator';

interface IState {
  email: string;
  emailValid: boolean;
  password: string;
  passwordValid: boolean;
  errorMessage: string;
}

const Login: FC = () => {
  const [state, setState] = useState<IState>({
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    errorMessage: ''
  })

  const classes = useStyles();
  const history = useHistory();
  const app = useContext(FirebaseContext);
  const authUser = useFirebaseAuthentication(app);

  useEffect(() => {
    if (authUser) {
      history.push('/')
    }
  }, [authUser]);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const email = e.currentTarget.value;
    const emailValid = validateEmail(email);
    setState({
      ...state,
      email,
      emailValid,
      errorMessage: '',
    });
  }, [state, setState]);

  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const password = e.currentTarget.value;
    const passwordValid = password.length >= 6;
    setState({
      ...state,
      password,
      passwordValid,
      errorMessage: '',
    });
  }, [state, setState]);

  const handleLogin = useCallback(async () => {
    const { email, emailValid, password, passwordValid } = state;

    if (!emailValid || !passwordValid) {
      setState({
        ...state,
        errorMessage: 'Please enter valid email and password.'
      })
      return
    }

    try {
      await app.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('e: ', e);
      if (e.code === 'auth/user-not-found') {
        console.log('Incorrect email or password.')
        setState({
          ...state,
          errorMessage: 'Incorrect email and / or password.'
        })
      }
    }
  }, [app, state]);

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Paper>
        <Grid container justify='center'>
          <Grid item>
            <Typography variant='h4' className={classes.header} color='primary'>
              Wishing App
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction='column'>
          <Grid item container direction='column' justify='center' alignItems='center'>
            <TextField
              id="login-email"
              className={classes.loginDetails}
              variant="outlined"
              size="small"
              placeholder='Enter email'
              type='email'
              value={state.email}
              required
              error={!state.emailValid && !!state.email}
              helperText={!state.emailValid && !!state.email && 'Invalid email'}
              onChange={handleEmailChange}
            />
            <TextField
              id="login-password"
              className={classes.loginDetails}
              variant="outlined"
              size="small"
              placeholder='Enter password'
              value={state.password}
              type='password'
              required
              error={!state.passwordValid && !!state.password}
              helperText={!state.emailValid && !!state.password && 'Invalid password'}
              onChange={handlePasswordChange}
            />
            {!!state.errorMessage && (
              <>
                <Typography variant='caption' color='error'>
                  {state.errorMessage}
                </Typography>
                <Typography variant='caption' color='error'>
                  <Link
                    href="#"
                    underline='always'
                    color='error'
                    onClick={(e: React.MouseEvent) => e.preventDefault()}
                  >
                    Reset password?
                  </Link>
                </Typography>
              </>
            )}
            <Grid item container direction='row' justify='center' alignItems='center' className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

Login.defaultProps = {};

export default Login;
