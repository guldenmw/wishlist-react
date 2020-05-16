import React, {
  FC,
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useReducer
} from 'react';
import FirebaseContext from '../../../core/firebase/withFirebase';
import useFirebaseAuthentication from '../../../hooks/use-firebase-auth';
import { useHistory } from "react-router-dom";
import { Button, Grid, TextField, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';
import { validate as validateEmail } from 'email-validator';
import { AuthBase } from '../layout';
import reducer, {
  initialState,
  UPDATE_EMAIL_FIELD,
  UPDATE_PASSWORD_FIELD,
  SET_ERROR_MESSAGE
} from './reducer';

const footerOptions = [
  {
    label: "Can't log in?",
    src: '/reset-password'
  }, {
    label: 'Sign up',
    src: '/sign-up'
  },
]
const Login: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const classes = useStyles();
  const history = useHistory();
  const app = useContext(FirebaseContext);
  const authUser = useFirebaseAuthentication(app);

  useEffect(() => {
    if (authUser) {
      history.push('/')
    }
  }, [authUser, history]);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const email = e.currentTarget.value;
    const emailValid = validateEmail(email);
    dispatch({ type: UPDATE_EMAIL_FIELD, data: { email, emailValid }})
  }, []);

  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const password = e.currentTarget.value;
    const passwordValid = password.length >= 6;
    dispatch({ type: UPDATE_PASSWORD_FIELD, data: { password, passwordValid }})
  }, []);

  const handleLogin = useCallback(async () => {
    const { email, emailValid, password, passwordValid } = state;

    if (!emailValid || !passwordValid) {
      dispatch({ type: SET_ERROR_MESSAGE, data: 'Please enter valid email and password.'})
      return
    }

    try {
      await app.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('e: ', e);
      if (e.code === 'auth/user-not-found') {
        console.log('Incorrect email or password.')
        dispatch({ type: SET_ERROR_MESSAGE, data: 'Incorrect email and / or password.'})
      }
    }
  }, [app, state]);

  return (
    <AuthBase
      headerMessage={'Log in to Wishlist App'}
      footerOptions={footerOptions}
    >
      <Grid container direction='column'>
        <Grid item container direction='column' justify='center' alignItems='center'>
          <TextField
            id="login-email"
            className={classes.loginDetails}
            variant="outlined"
            size="small"
            placeholder='Enter email'
            fullWidth
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
            fullWidth
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
        </Grid>
        <Grid item container direction='row' justify='center' alignItems='center' className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </Grid>
      </Grid>
    </AuthBase>
  );
};

Login.defaultProps = {};

export default Login;
