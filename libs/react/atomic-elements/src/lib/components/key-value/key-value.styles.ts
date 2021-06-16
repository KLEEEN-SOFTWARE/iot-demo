import { KeyValueStyleProps } from './key-value.model';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
  },
  key: {
    color: 'hsla(var(--on-surface-color-hsl), 0.7)',
    fontSize: 'var(--tx-M)',
    fontWeight: 200,
    lineHeight: 'var(--tx-L)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: ({ keyWidth }: KeyValueStyleProps) => keyWidth,
    '&.highlighted': {
      fontWeight: '600',
      marginRight: 'var(--pm-L)',
      textTransform: 'uppercase',
    },
  },
  value: {
    fontSize: 'var(--tx-M)',
    lineHeight: 'var(--tx-L)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: ({ valueWidth }: KeyValueStyleProps) => valueWidth,
    '&.highlighted': {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      width: 'auto',
    },
  },
});
