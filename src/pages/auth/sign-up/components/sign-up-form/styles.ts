import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      margin: 20,
    },
    loginDetails: {
      padding: '10px 0',
    },
    buttons: {
      padding: '10px 0',
    },
    button: {
      width: '100%',
    },
    buttonProgress: {
      color: theme.palette.common.white,
    }
  })
)
