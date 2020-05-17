import React, { FC } from 'react';
import { Box, Paper, Hidden } from '@material-ui/core';
import AuthHeader from '../auth-header';
import { useStyles } from './styles';
import { IFooterOption } from '../auth-footer';
import AuthLayout from '../auth-layout';


interface IProps {
  headerMessage?: string;
  footerOptions?: IFooterOption[];
}

const AuthPage: FC<IProps> = (props) => {
  const {
    headerMessage = '',
    footerOptions,
    children
  } = props;
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
