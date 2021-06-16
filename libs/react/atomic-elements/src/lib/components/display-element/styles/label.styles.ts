import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  displayMedia: {
    marginRight: 'var(--pm-3XS)',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '&.highlighted': {
      fontSize: 'var(--tx-5XL)',
      fontWeight: '600',
      color: 'hsla(var(--on-surface-color-hsl), 0.7)',
    },
  },
  text: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&.highlighted': {
      display: 'block',
      paddingTop: 'calc(var(--pm-M) + var(--pm-7XS))',
      width: 'var(--wh-4XL)',
    },
  },
  highlighted: {
    width: '100%',
    height: '100%',
  },
}));
