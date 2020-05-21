import React, {
  FC,
  useCallback,
  useState,
} from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { AuthPage } from '../../../components/auth';
import LoginForm from './components/login-form';
import firebase  from '../../../core/firebase';


const Login: FC<any> = (props) => {
  const { history, location } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();

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
      await firebase.login(email, password);
      setIsLoading(false);
      const referrer = location?.state?.from?.pathname || '/';
      history.replace(referrer);

    } catch (e) {
      console.log('e: ', e);
      if (e.code === 'auth/user-not-found') {
        console.log('Incorrect email or password.')
        setErrorMessage('Incorrect email and / or password.');
      }
    }
  }, [history, location?.state?.from?.pathname, setErrorMessage]);

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

export default withRouter(Login);
