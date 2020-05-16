import React, { FC } from 'react';
import { useStyles } from './styles';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface IFooterOption {
  label: string;
  src?: string;
}

interface IProps {
  options?: IFooterOption[];
}

const AuthOptionsFooter: FC<IProps> = (props) => {
  const {
    options
  } = props;

  const classes = useStyles();

  return (
    <Grid className={classes.footerBody} item container direction='row' justify='center' alignItems='center'>
      {options?.map(option => (
        <Typography variant={'caption'}>
          <Link to="#">
            {option.label}
          </Link>
        </Typography>
      ))}
    </Grid>
  );
};

AuthOptionsFooter.defaultProps = {};

export default AuthOptionsFooter;
