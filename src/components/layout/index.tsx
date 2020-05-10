import React, { FC, useCallback } from 'react';
import Navbar from './components/nav-bar';
import ResponsiveDrawer from './components/responsive-drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Toolbar } from '@material-ui/core';

interface IProps {
  test: string;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <>
      <CssBaseline />
      <ResponsiveDrawer open={open}/>
      <Navbar toggleDrawer={toggleDrawer}/>
      <Toolbar />
      <Box px={32}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
