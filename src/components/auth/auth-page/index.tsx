import React, { FC, useMemo } from 'react';
import { Box, Paper, Hidden } from '@material-ui/core';
import AuthHeader from '../auth-header';
import { useStyles } from './styles';
import AuthLayout from '../auth-layout';
import { pageConfig } from '../config';


interface IProps {
  page: 'login' | 'signUp' | 'passwordReset';
}

const AuthPage: FC<IProps> = (props) => {
  const { page, children } = props;
  const { headerMessage, footerOptions } = useMemo(() => {
    return pageConfig[page];
  }, [page]);
  const classes = useStyles();

  return (
    <Box display='flex' flexDirection={'column'} alignItems='center' className={classes.root}>
      <Hidden only='xs'>
        <AuthHeader/>
        <Paper className={classes.paperBody}>
          <AuthLayout
            headerMessage={headerMessage}
            footerOptions={footerOptions}
          >
            {children}
          </AuthLayout>
        </Paper>
      </Hidden>
      <Hidden smUp>
        <AuthHeader/>
        <AuthLayout
          headerMessage={headerMessage}
          footerOptions={footerOptions}
        >
          {children}
        </AuthLayout>
      </Hidden>
    </Box>
  );
};

export default AuthPage;
