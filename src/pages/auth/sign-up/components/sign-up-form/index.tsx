import React, {
  FC,
  ChangeEvent,
  useCallback,
  useReducer,
  memo,
} from 'react';
import { Button, Grid, TextField, Typography, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';
import { validate as validateEmail } from 'email-validator';
import reducer, {
  initialState,
  UPDATE_EMAIL_FIELD, UPDATE_NAME_FIELD,
  UPDATE_PASSWORD_FIELD,
} from './reducer';

interface IProps {
  isLoading: boolean;
  errorMessage: string;
  onSubmit: (
    name: string,
    email: string,
    emailValid: string,
    password: string,
    passwordValid: string
  ) => void;
}

const SignUpForm: FC<IProps> = (props) => {
  const {
    isLoading,
    errorMessage,
    onSubmit
  } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();

  const handleNameChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.currentTarget.value;
    dispatch({ type: UPDATE_NAME_FIELD, data: { name }})
  }, []);

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

  const handleSubmit = useCallback(() => {
    onSubmit(state.name, state.email, state.emailValid, state.password, state.passwordValid);
  }, [onSubmit, state.name, state.email, state.emailValid, state.password, state.passwordValid]);

  return (
    <Grid container direction='column'>
      <Grid item container direction='column' justify='center' alignItems='center'>
        <TextField
          id="username"
          className={classes.loginDetails}
          variant="outlined"
          size="small"
          placeholder='Enter name'
          fullWidth
          type='name'
          value={state.name}
          required
          onChange={handleNameChange}
        />
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
        {!!errorMessage && (
          <>
            <Typography variant='caption' color='error'>
              {errorMessage}
            </Typography>
          </>
        )}
      </Grid>
      <Grid item container direction='row' justify='center' alignItems='center' className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <CircularProgress size={24} className={classes.buttonProgress} />
          ) : (
            'Sign Up'
          )}
        </Button>
      </Grid>
    </Grid>
  );
};

SignUpForm.defaultProps = {};

export default memo(SignUpForm);
