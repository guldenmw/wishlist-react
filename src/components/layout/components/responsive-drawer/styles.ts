import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 256;
const mobileDrawerWidth = '100%';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    mobileDrawerPaper: {
      width: mobileDrawerWidth,
    },
  }),
);
