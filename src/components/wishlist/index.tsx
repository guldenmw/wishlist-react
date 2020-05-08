import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';

interface IProps {
  items: string[];
}

const Wishlist: FC<IProps> = (props) => {
  const { items } = props;
  return (
    <>
      {items.map((item) => (
        <Grid item direction={'column'}>
          {/*<Paper>*/}
            <Typography>
              {item}
            </Typography>
          {/*</Paper>*/}
        </Grid>
      ))}
    </>
  );
};

export default Wishlist;
