export const UPDATE_NAME_FIELD = 'update-name-field';
export const UPDATE_EMAIL_FIELD = 'update-email-field';
export const UPDATE_PASSWORD_FIELD = 'update-password-field';
export const SET_ERROR_MESSAGE = 'set-error-message';

export interface IState {
  name: string;
  email: string;
  emailValid: boolean;
  password: string;
  passwordValid: boolean;
}

export const initialState: IState = {
  name: '',
  email: '',
  emailValid: false,
  password: '',
  passwordValid: false,
};

const reducer = (state: IState, action: { type: string; data: any }) => {
  const { type, data } = action;

  switch (type) {
    case UPDATE_NAME_FIELD:
      return {
        ...state,
        name: data.name,
        errorMessage: '',
      }

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
