import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    margin: '0 auto',
    '& .primary': {
      alignItems: 'center',
      display: 'flex',
      height: 'var(--wh-L)',
      marginBottom: 'var(--pm-1XL)',
    },
  },
});
