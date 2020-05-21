import React, { FC, useCallback } from 'react';
import Navbar from './components/nav-bar';
import ResponsiveDrawer from './components/responsive-drawer';
import { Container} from '@material-ui/core';
import { useStyles } from './styles';

interface IProps {
  test: string;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;
  const [open, setOpen] = React.useState(true);

  const classes = useStyles();

  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <>
      <ResponsiveDrawer open={open}/>
      <Navbar toggleDrawer={toggleDrawer}/>
      <div className={classes.toolbarMixin} />
      <Container>
        {children}
      </Container>
    </>
  );
};

export default Layout;
