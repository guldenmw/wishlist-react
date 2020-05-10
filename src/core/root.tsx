import React, { FC } from 'react';
import { Provider, themes } from '@fluentui/react-northstar';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/app/index';
import { FirebaseProvider } from './firebase/provider';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';

const Root: FC = () => {
  const classes = useStyles();

  return (
    <React.StrictMode>
      <Provider theme={themes.teams}>
        <FirebaseProvider>
          <BrowserRouter>
            <Container className={classes.root}>
              <App />
            </Container>
          </BrowserRouter>
        </FirebaseProvider>
      </Provider>
    </React.StrictMode>
  );
};

Root.defaultProps = {};

export default Root;
