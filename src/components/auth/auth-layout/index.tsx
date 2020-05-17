import React, { FC } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AuthFooter, { IFooterOption } from '../auth-footer';


interface IProps {
  headerMessage?: string;
  footerOptions?: IFooterOption[];
}

const AuthLayout: FC<IProps> = (props) => {
  const {
    headerMessage = '',
    footerOptions,
    children
  } = props;
  const classes = useStyles();

  return (
    <Grid container direction={'column'} alignItems={'center'} justify={'center'} className={classes.gridBody}>
      <Typography component={'span'}>
        <Box color={'text.secondary'} m={'0 0 10px'} fontWeight="fontWeightBold">
          {headerMessage}
        </Box>
      </Typography>
      {children}
      <hr className={classes.lineBreak}/>
      <AuthFooter options={footerOptions}/>
    </Grid>
  );
};

export default AuthLayout;
