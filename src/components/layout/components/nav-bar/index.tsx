import React, { FC, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';
import firebase from '../../../../core/firebase';
import { withRouter } from 'react-router';

interface IProps {
  toggleDrawer: () => void;
}

const Navbar: FC<IProps & any> = (props) => {
  const { toggleDrawer, history } = props;
  const classes = useStyles();

  const handleLogout = useCallback(() => {
    firebase.logout()
    history.push('/login')
  }, []);

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      elevation={1}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.appName} variant="h6" noWrap>
          Persistent drawer
        </Typography>
        <IconButton
          color="inherit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Typography variant={'caption'} onClick={handleLogout}>
            Sign out
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
