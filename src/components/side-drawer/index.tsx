import React, { FC } from 'react';
import {
  Typography,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemText, ListItemIcon,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import { useStyles } from './styles'

interface IProps {
  open: boolean;
}

export const SideDrawer: FC<IProps> = (props) => {
  const { open } = props;
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <Typography align={'center'} className={classes.header} variant={'h6'}>My Wishlists</Typography>
        <Divider />
        <List>
          <ListItem button>
            {/*<ListItemIcon><StarIcon /></ListItemIcon>*/}
            <ListItemText inset primary={'Personal'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText primary={'Starred'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            {/*<ListItemIcon><StarIcon /></ListItemIcon>*/}
            <ListItemText inset primary={'Shared'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText primary={'Friends'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
