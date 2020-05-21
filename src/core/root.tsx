import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/app/index';
import { Container, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { useStyles } from './styles';
import theme from './theme';

const Root: FC = () => {
  const classes = useStyles();

  return (
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Container className={classes.root}>
            <App />
          </Container>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.StrictMode>
  );
};

Root.defaultProps = {};

export default Root;
