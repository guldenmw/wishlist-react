import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StyledNavBar from './styles';


interface IProps {
  [x: string]: any;
}

const Navbar: FC<IProps> = () => (
  <StyledNavBar>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </StyledNavBar>
);

Navbar.defaultProps = {};

export default Navbar;
