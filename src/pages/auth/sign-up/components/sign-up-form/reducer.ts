export const UPDATE_EMAIL_FIELD = 'login/update-email-field';
export const UPDATE_PASSWORD_FIELD = 'login/update-password-field';
export const SET_ERROR_MESSAGE = 'login/set-error-message';

export interface IState {
  email: string;
  emailValid: boolean;
  password: string;
  passwordValid: boolean;
}

export const initialState: IState = {
  email: '',
  emailValid: false,
  password: '',
  passwordValid: false,
};

const reducer = (state: IState, action: { type: string; data: any }) => {
  const { type, data } = action;

  switch (type) {
    case UPDATE_EMAIL_FIELD:
      return {
        ...state,
        email: data.email,
        emailValid: data.emailValid,
        errorMessage: '',
      }

    case UPDATE_PASSWORD_FIELD:
      return {
        ...state,
        password: data.password,
        passwordValid: data.passwordValid,
        errorMessage: '',
      }

    default:
      return state;
  }
}

export default reducer;
