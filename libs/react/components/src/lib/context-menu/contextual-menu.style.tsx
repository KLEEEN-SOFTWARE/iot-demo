import { styled, withStyles } from '@material-ui/core';

import { KsMenuItem } from '../menu';
import MuiMenu from '@material-ui/core/Menu';

export const Menu = styled(MuiMenu)({
  '& .MuiMenu-paper': {
    backdropFilter: 'blur(4px)',
    width: 'var(--wh-5XL)',
    maxHeight: 'var(--wh-6XL)',
    backgroundColor: 'var(--menu-bg-color)',
    color: 'var(--on-surface-color)',
    borderRadius: 'var(--card-border-radius)',
    border: 'var(--card-border)',
    '& > ul': {
      paddingTop: '0px',
    },
  },
  '& .even-stripe': {
    background: 'var(--row-even)',
    '&:hover': {
      background: 'var(--secondary-color-variant)',
      color: 'var(--on-secondary-color-variant)',
    },
  },
  '& .odd-stripe': {
    background: 'var(--row-odd)',
    '&:hover': {
      background: 'var(--secondary-color-variant)',
      color: 'var(--on-secondary-color-variant)',
    },
  },
  '& .empty': {
    pointerEvents: 'none',
  },
});

export const MenuGroupItem = withStyles({
  root: {
    paddingLeft: 'var(--pm-1XS)',
    '& .menu-item-text': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
})(KsMenuItem);

const MenuGroupNameBase = (props) => <KsMenuItem {...props} disabled />;

export const MenuGroupName = withStyles({
  root: {
    height: 'var(--pm-L)',
    backgroundColor: 'var(--nav-top-bg-color)',
    color: 'var(--on-nav-top-bg-color)',
    fontSize: 'var(--tx-S)',
    lineHeight: 'var(--tx-S)',
    paddingLeft: 'var(--pm-1XS)',
    '&.MuiListItem-button.Mui-disabled': {
      opacity: '1',
    },
    '& .menu-item-text': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
})(MenuGroupNameBase);

export const MenuTitle = withStyles({
  root: {
    fontWeight: 'bold',
    fontSize: 'var(--tx-L)',
    height: 'var(--wh-1XS)',
    paddingLeft: 'var(--pm-1XS)',
    backgroundColor: 'var(--secondary-color)',
    color: 'var(--neutral-white-hsla)',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    '&.MuiListItem-button.Mui-disabled': {
      opacity: '1',
    },
  },
})(MenuGroupNameBase);
