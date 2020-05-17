import React, {
  FC,
  useCallback,
  useContext,
  memo,
  useState,
} from 'react';
import FirebaseContext from '../../../core/firebase/withFirebase';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { AuthPage } from '../../../components/auth';
import SignUpForm from './components/sign-up-form';

const SignUp: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();
  const history = useHistory();
  const app = useContext(FirebaseContext);

  const handleLogin = useCallback(async (
    email: string,
    emailValid: string,
    password: string,
    passwordValid: string,
  ) => {
    if (!emailValid || !passwordValid) {
      setErrorMessage('Please enter valid email and password.');
      return
    }
    setIsLoading(true);


    try {
      await app.auth().createUserWithEmailAndPassword(email, password)
      setIsLoading(false)

    } catch (e) {
      console.log('e: ', e);
      if (e.code === 'auth/email-already-in-use') {
        setErrorMessage(e.message);
      }
      setIsLoading(false)
      return
    }


    try {
      const user = app.auth().currentUser;
      await user?.sendEmailVerification()
      history.push('/auth/sign-up-success')
    } catch (e) {
      console.log(e)
    }

  }, [app, history, setErrorMessage]);

  return (
    <AuthPage page={'signUp'}>
      <Grid container direction='column'>
        <Grid item container direction='row' justify='center' alignItems='center' className={classes.body}>
          <SignUpForm
            isLoading={isLoading}
            onSubmit={handleLogin}
            errorMessage={errorMessage}
          />
        </Grid>
      </Grid>
    </AuthPage>
  );
};

SignUp.defaultProps = {};

export default memo(SignUp);
