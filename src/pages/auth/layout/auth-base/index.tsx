import React, { FC } from 'react';
import { Box, Paper, Grid, Hidden, Typography } from '@material-ui/core';
import AuthHeader from '../auth-header';
import { useStyles } from './styles';
import { AuthFooter } from '../index';
import { IFooterOption } from '../auth-footer';

interface IProps {
  headerMessage?: string;
  footerOptions?: IFooterOption[];
}

const AuthBase: FC<IProps> = (props) => {
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
          <Grid container direction={'column'} alignItems={'center'} justify={'center'} className={classes.gridBody}>
            <Typography className={classes.headerMessage}>
              {headerMessage}
            </Typography>
            {children}
            <hr className={classes.lineBreak}/>
            <AuthFooter options={footerOptions}/>
          </Grid>
        </Paper>
      </Hidden>
      <Hidden smUp>
        <AuthHeader/>
        <Grid container direction={'column'} alignItems={'center'} justify={'center'} className={classes.gridBody}>
          <Typography className={classes.headerMessage}>
            {headerMessage}
          </Typography>
          {children}
          <hr className={classes.lineBreak}/>
          <AuthFooter options={footerOptions}/>
        </Grid>
      </Hidden>
    </Box>
  );
};

export default AuthBase;
