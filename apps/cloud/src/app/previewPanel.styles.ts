import { makeStyles, NativeSelect, withStyles } from '@material-ui/core';
import { styled } from '@material-ui/core';
import { KsButton } from '@kleeen/react/components';

export const PreviewCloseButton = styled(KsButton)({
  backgroundColor: 'transparent !important',
  borderRadius: 'var(--pm-0)',
  borderColor: 'var(--on-secondary-color-variant)',
  color: 'var(--on-secondary-color-variant)',
  height: 'var(--wh-2XS)',
});

export const MockSelect = withStyles({
  icon: {
    color: 'var(--on-secondary-color-variant)',
  },
})(NativeSelect);

export const useStyles = makeStyles({
  previewHeader: {
    alignItems: 'center',
    backgroundColor: 'hsla(var(--on-surface-color-hsl), 0.7)',
    borderRadius: 'var(--pm-3XS)',
    '&:hover': {
      height: 'var(--wh-S)',
      '& $previewCloseButtonContainer': {
        visibility: 'visible',
      },
      '& $menuComponent': {
        visibility: 'visible',
      },
    },
    display: 'flex',
    height: 'var(--wh-3XS)',
    width: '100%',
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
          visibility: 'visible',
        },
        '& $menuComponent': {
          visibility: 'visible',
        },
      },
    },
  },

  previewCloseButtonContainer: {
    marginRight: 'var(--pm-1XS)',
    position: 'absolute',
    right: 'var(--pm-0)',
    visibility: 'hidden',
  },
  previewSplitter: {
    backgroundColor: 'transparent',
    borderBottom: 'var(--pm-0) !important',
    borderTop: 'var(--pm-0) !important',
    height: 'var(--pm-0) !important',
  },
  reflexPanelHeader: {
    height: '40%',
    position: 'relative',
  },
  reflexPanelContainer: {
    height: '100%',
  },
  reflexPanelElement: {
    height: '100%',
  },
  topPanel: {
    minHeight: 'var(--wh-6XL)',
  },
  bottomPanel: {
    minHeight: 'var(--wh-S)',
  },
  //TODO remove this style for mock component preview layout
  menuComponent: {
    color: 'var(--on-secondary-color-variant)',
    marginLeft: 'var(--pm-1XS)',
    visibility: 'hidden',
  },
});
