export const UPDATE_EMAIL_FIELD = 'login/update-email-field';
export const UPDATE_PASSWORD_FIELD = 'login/update-password-field';
export const SET_ERROR_MESSAGE = 'login/set-error-message';

export interface IState {
  email: string;
  emailValid: boolean;
  password: string;
  passwordValid: boolean;
  errorMessage: string;
}

export const initialState: IState = {
  email: '',
  emailValid: false,
  password: '',
  passwordValid: false,
  errorMessage: ''
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
        email: data.password,
        emailValid: data.passwordValid,
        errorMessage: '',
      }

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: data,
      }

    default:
      return state;
  }
}

export default reducer;
