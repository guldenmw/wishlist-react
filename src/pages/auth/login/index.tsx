import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  memo, useState,
} from 'react';
import FirebaseContext from '../../../core/firebase/withFirebase';
import useFirebaseAuthentication from '../../../hooks/use-firebase-auth';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { APP_NAME } from '../../../constants';
import AuthPage from '../../../components/auth/auth-page';
import LoginForm from './components/login-form';

const footerOptions = [
  {
    label: "Can't log in?",
    src: '/reset-password'
  }, {
    label: 'Sign up',
    src: '/sign-up'
  },
]

const headerMessage = `Log in to ${APP_NAME}`;

const Login: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();
  const history = useHistory();
  const app = useContext(FirebaseContext);
  const authUser = useFirebaseAuthentication(app)

  useEffect(() => {
    if (authUser) {
      history.push('/')
    }
  }, [authUser, history]);

  const handleLogin = useCallback(async (
    email,
    emailValid,
    password,
    passwordValid,
  ) => {
    if (!emailValid || !passwordValid) {
      setErrorMessage('Please enter valid email and password.');
      return
    }

    try {
      await app.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('e: ', e);
      if (e.code === 'auth/user-not-found') {
        console.log('Incorrect email or password.')
        setErrorMessage('Incorrect email and / or password.');
      }
    }
  }, [app, setErrorMessage]);

  return (
    <AuthPage
      headerMessage={headerMessage}
      footerOptions={footerOptions}
    >
      <Grid container direction='column'>
        <Grid item container direction='row' justify='center' alignItems='center' className={classes.body}>
          <LoginForm onSubmit={handleLogin} errorMessage={errorMessage}/>
        </Grid>
      </Grid>
    </AuthPage>
  );
};

Login.defaultProps = {};

export default memo(Login);
