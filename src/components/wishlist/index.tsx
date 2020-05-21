import React, { FC, memo } from 'react';
import { Typography } from '@material-ui/core';

interface IProps {
  id: number;
}

const Wishlist: FC<IProps> = (props) => {
  const { } = props;

  return (
    <>
      <Typography variant={'h5'}>
        Personal
      </Typography>
    </>
  );
};

export default memo(Wishlist);
