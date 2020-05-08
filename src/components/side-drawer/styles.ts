import { createStyles, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 256;

export const useStyles = makeStyles(() =>
  createStyles({
    header: {
      padding: '10px 0',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
  }),
);
