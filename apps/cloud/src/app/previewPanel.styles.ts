import { KsButton } from '@kleeen/react/components';
import { makeStyles } from '@material-ui/core';
import { styled } from '@material-ui/core';

export const PreviewCloseButton = styled(KsButton)({
  backgroundColor: 'transparent !important',
  borderColor: 'var(--on-secondary-color-variant)',
  borderRadius: 'var(--pm-0)',
  color: 'var(--on-secondary-color-variant)',
  height: 'var(--wh-2XS)',
});

export const useStyles = makeStyles({
  previewContent: {
    paddingTop: 'var(--pm-3XL)',
  },
  previewHeader: {
    alignItems: 'center',
    backgroundColor: 'hsla(var(--on-surface-color-hsl), 0.7)',
    borderRadius: 'var(--pm-3XS)',
    display: 'flex',
    height: 'var(--wh-3XS)',
    left: 0,
    position: 'fixed',
    right: 0,
    transition: 'height var(--speed-medium)',
    zIndex: 1,
    '&:hover': {
      height: 'var(--wh-S)',
      '& $previewCloseButtonContainer': {
        opacity: 1,
      },
      '& $previewTitle': {
        fontSize: 'var(--tx-M)',
      },
    },
  },
  previewHandler: {
    color: 'var(--on-secondary-color-variant)',
    display: 'inline-block',
    fontSize: 'var(--pm-L)',
    fontWeight: 'bold',
    left: '50%',
    letterSpacing: 'var(--pm-6XS)',
    marginBottom: 'var(--pm-6XS)',
    position: 'absolute',
    transform: 'translate(-50%,0%)',
    '&:hover ': {
      '& ~ $previewHeader': {
        height: 'var(--wh-S)',
        '& $previewCloseButtonContainer': {
          opacity: 1,
        },
      },
    },
  },
  previewCloseButtonContainer: {
    marginRight: 'var(--pm-1XS)',
    opacity: 0,
    position: 'absolute',
    right: 'var(--pm-0)',
    transition: 'opacity var(--speed-medium)',
  },
  previewSplitter: {
    backgroundColor: 'transparent',
    borderBottom: 'var(--pm-0) !important',
    borderTop: 'var(--pm-0) !important',
    height: 'var(--pm-0) !important',
  },
  previewTitle: {
    color: 'var(--on-secondary-color-variant)',
    fontSize: 'var(--tx-S)',
    marginLeft: 'var(--pm-L)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    transition: 'font-size var(--speed-medium)',
    whiteSpace: 'nowrap',
    width: 'var(--wh-7XL)',
  },
});
