import { APP_NAME } from '../../constants';
import { IFooterOption } from './auth-footer';

interface IPageConfigSection {
  footerOptions: IFooterOption[];
  headerMessage: string;
}

interface IPageConfig {
  login: IPageConfigSection;
  signUp: IPageConfigSection;
  passwordReset: IPageConfigSection;
}

export const pageConfig: IPageConfig = {
  'login': {
    footerOptions: [
      {
        label: "Can't log in?",
        src: '/auth/reset-password'
      }, {
        label: 'Sign up',
        src: '/auth/sign-up'
      },
    ],
    headerMessage: `Log in to ${APP_NAME}`,
  },
  'signUp': {
    footerOptions: [
      {
        label: "Already have an account? Log in",
        src: '/auth/login'
      },
    ],
    headerMessage: `Sign up for ${APP_NAME}`,
  },
  'passwordReset': {
    footerOptions: [],
    headerMessage: '',
  },
}
