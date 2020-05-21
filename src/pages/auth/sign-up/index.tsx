import React, {
  FC,
  useCallback,
  useState,
} from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { AuthPage } from '../../../components/auth';
import SignUpForm from './components/sign-up-form';
import firebase  from '../../../core/firebase';

const SignUp: FC<RouteComponentProps> = (props) => {
  const { history } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();

  const handleLogin = useCallback(async (
    name: string,
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
      await firebase.register(name, email, password)
      setIsLoading(false)
      history.replace('/')

    } catch (e) {
      console.log('e: ', e);
      if (e.code === 'auth/email-already-in-use') {
        setErrorMessage(e.message);
      }
      setIsLoading(false)
      return
    }

    // try {
    //   const user = app.auth().currentUser;
    //   await user?.sendEmailVerification()
    //   history.push('/auth/sign-up-success')
    // } catch (e) {
    //   console.log(e)
    // }

  }, [history, setErrorMessage]);

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

export default withRouter(SignUp);
