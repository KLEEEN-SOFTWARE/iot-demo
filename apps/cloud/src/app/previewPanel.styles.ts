import { KsButton } from '@kleeen/react/components';
import { makeStyles } from '@material-ui/core';
import { styled } from '@material-ui/core';

export const PreviewCloseButton = styled(KsButton)({
  backgroundColor: 'transparent !important',
  borderRadius: 'var(--pm-0)',
  borderColor: 'var(--on-secondary-color-variant)',
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
    },
  },
  previewHandler: {
    color: 'var(--on-secondary-color-variant)',
    display: 'inline-block',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 'var(--pm-L)',
    letterSpacing: 'var(--pm-6XS)',
    left: '50%',
    marginBottom: 'var(--pm-6XS)',
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
    position: 'absolute',
    right: 'var(--pm-0)',
    opacity: 0,
    transition: 'opacity var(--speed-medium)',
  },
  previewSplitter: {
    backgroundColor: 'transparent',
    borderBottom: 'var(--pm-0) !important',
    borderTop: 'var(--pm-0) !important',
    height: 'var(--pm-0) !important',
  },
});
