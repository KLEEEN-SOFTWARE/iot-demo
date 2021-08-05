import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  mediaValueContainer: {
    alignItems: 'center',
    '&.clickable': {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    display: 'flex',
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  contextMenuButton: {
    textTransform: 'initial',
    color: 'var(--secondary-color)',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  contextCellArrow: {
    '> svg.arrow-neutral': {
      display: 'block',
      opacity: 0,
    },
  },
  textAlignRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  textAlignLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  cell: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  displayMedia: {
    marginRight: 'var(--pm-S)',
  },
});
