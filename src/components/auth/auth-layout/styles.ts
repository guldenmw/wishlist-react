import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  lineBreak: {
    display: 'block',
    height: '1px',
    border: 0,
    borderTop: '1px solid hsl(0,0%,80%)',
    margin: '1em 0',
    width: '100%',
    padding: '0',
  },
  gridBody: {
    width: '100%',
    padding: '40px',
  },
})
