import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const AuthHeader: FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item>
        <Typography variant='h4' className={classes.header} color='primary'>
          Wishing App
        </Typography>
      </Grid>
    </Grid>
  )
};

export default AuthHeader;
