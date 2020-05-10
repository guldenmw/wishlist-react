import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
      // display: 'flex',
      // justifyContent: 'space-between',
    },
    appName: {
      flex: 1
    }
  }),
);
