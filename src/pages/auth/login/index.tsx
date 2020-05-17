import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  memo,
  useState,
} from 'react';
import FirebaseContext from '../../../core/firebase/withFirebase';
import useFirebaseAuthentication from '../../../hooks/use-firebase-auth';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { AuthPage } from '../../../components/auth';
import LoginForm from './components/login-form';


const Login: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    try {
      await app.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('e: ', e);
      if (e.code === 'auth/user-not-found') {
        console.log('Incorrect email or password.')
        setErrorMessage('Incorrect email and / or password.');
      }
    }
    setIsLoading(false);
  }, [app, setErrorMessage]);

  return (
    <AuthPage page={'login'}>
      <Grid container direction='column'>
        <Grid item container direction='row' justify='center' alignItems='center' className={classes.body}>
          <LoginForm
            isLoading={isLoading}
            errorMessage={errorMessage}
            onSubmit={handleLogin}
          />
        </Grid>
      </Grid>
    </AuthPage>
  );
};

Login.defaultProps = {};

export default memo(Login);
