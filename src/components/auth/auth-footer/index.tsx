import React, { FC } from 'react';
import { useStyles } from './styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface IFooterOption {
  label: string;
  src?: string;
}

interface IProps {
  options?: IFooterOption[];
}

const AuthFooter: FC<IProps> = (props) => {
  const {
    options
  } = props;

  const classes = useStyles();

  return (
    <Grid className={classes.footerBody} item container direction='row' justify='center' alignItems='center'>
      {options?.map((option, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && (
              <Box color={'text.secondary'}>
                <Typography>
                  &#8226;
                </Typography>
              </Box>
            )}
            <Box mx={1}>
              <Typography variant={'caption'}>
                <Link to="#">
                  {option.label}
                </Link>
              </Typography>
            </Box>
          </React.Fragment>
        )
      })}
    </Grid>
  );
};

AuthFooter.defaultProps = {};

export default AuthFooter;
