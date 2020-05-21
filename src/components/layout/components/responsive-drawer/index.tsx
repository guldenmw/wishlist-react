import React, { FC } from 'react';
import { Drawer, Hidden } from '@material-ui/core';

import { useStyles } from './styles'
import BaseDrawer from './components/base-drawer';

interface IProps {
  open: boolean;
}

const ResponsiveDrawer: FC<IProps> = (props) => {
  const { open: mobileOpen } = props;
  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp>
        <Drawer
          variant="persistent"
          anchor="top"
          open={mobileOpen}
          // classes={{
          //   paper: classes.mobileDrawerPaper,
          // }}
        >
          <BaseDrawer/>
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          variant="persistent"
          anchor="left"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <BaseDrawer/>
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ResponsiveDrawer;
