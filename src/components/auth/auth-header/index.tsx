import React, { FC } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { APP_NAME } from '../../../constants';

const AuthHeader: FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item>
        <Typography variant='h4' className={classes.header} color='primary'>
          <Box my={5}>
            {APP_NAME}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  )
};

export default AuthHeader;
