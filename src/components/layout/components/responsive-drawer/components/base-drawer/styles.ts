import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    header: {
      padding: '10px 0',
    },
    drawerContainer: {
      overflow: 'auto',
    },
  }),
);
