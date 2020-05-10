import React, { FC } from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useStyles } from './styles'

const BaseDrawer: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar/>
      <div className={classes.drawerContainer}>
        <Typography align={'center'} className={classes.header} variant={'h6'}>My Wishlists</Typography>
        <Divider/>
        <List>
          <ListItem button>
            {/*<ListItemIcon><StarIcon /></ListItemIcon>*/}
            <ListItemText inset primary={'Personal'}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon><StarIcon/></ListItemIcon>
            <ListItemText primary={'Starred'}/>
          </ListItem>
        </List>
        <Divider/>
        <List>
          <ListItem button>
            {/*<ListItemIcon><StarIcon /></ListItemIcon>*/}
            <ListItemText inset primary={'Shared'}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon><StarIcon/></ListItemIcon>
            <ListItemText primary={'Friends'}/>
          </ListItem>
        </List>
      </div>
    </>
  );
};

BaseDrawer.defaultProps = {};

export default BaseDrawer;
