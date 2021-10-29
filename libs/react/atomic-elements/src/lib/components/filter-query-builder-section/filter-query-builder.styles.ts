import { makeStyles, styled, withStyles } from '@material-ui/core';

import { KsMenu } from '@kleeen/react/components';
import MuiTooltip from '@material-ui/core/Tooltip';

export const useStyles = makeStyles(() => ({
  drawerClose: {
    alignItems: 'center',
    height: '100%',
    overflowX: 'hidden',
    width: 'var(--wh-1XS)',
  },
  iconFilter: {
    backgroundColor: 'var(--secondary-color)',
    borderRadius: 'var(--wh-4XS)',
    margin: 'var(--pm-4XS)',
    width: 'var(--wh-2XS)',
    '&.MuiSvgIcon-root': {
      color: 'var(--on-secondary-color)',
    },
    '&:hover': {
      backgroundColor: 'var(--secondary-color-variant)',
      color: 'var(--on-secondary-color-variant)',
      cursor: 'pointer',
    },
  },
  closeContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.23)',
    borderRadius: '0 var(--card-border-radius) var(--card-border-radius) 0',
    height: '20%',
    width: '100%',
    '&:hover': {
      backgroundColor: 'var(--secondary-color)',
      color: 'var(--surface-color)',
      cursor: 'pointer',
    },
  },
  iconClose: {
    color: 'inherit',
    fontSize: 'var(--wh-2XS)',
    height: '100%',
    marginLeft: 'calc(var(--pm-1XS)*-1)',
  },
}));

export const Menu = styled(KsMenu)({
  '& .MuiMenu-paper': {
    backgroundColor: 'var(--menu-bg-color)',
    border: 'var(--card-border)',
    borderRadius: 'var(--card-border-radius)',
    boxShadow: 'var(--card-shadow)',
    color: 'var(--on-surface-color)',
    height: 'max-content',
    maxHeight: 'var(--wh-8XL)',
    minWidth: 'calc(var(--wh-8XL) - var(--wh-M))',
    '& > ul': {
      padding: '0',
    },
  },
  '& .empty': {
    pointerEvents: 'none',
  },
});

export const Tooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'var(--surface-color)',
    boxShadow: 'var(--shadow-elevation-low-key)',
    color: 'var(--on-surface-color)',
    display: 'block',
    fontSize: 'var(--tx-M)',
    width: 'calc(var(--wh-2XL) + var(--wh-2XS))',
    '& li': {
      display: 'block',
      listStylePosition: 'inside',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
}))(MuiTooltip);
