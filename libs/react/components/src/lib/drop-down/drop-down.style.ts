import { makeStyles, styled } from '@material-ui/core/styles';
import MuiMenuItem from '@material-ui/core/MenuItem';

export const useStyles = makeStyles({
  dropDownSize: {
    width: 'var(--wh-4XL)',
  },
  formControl: {
    height: '100%',
  },
  menuItemIcon: {
    marginRight: 'var(--pm-2XS)',
  },
  popper: {
    backdropFilter: 'blur(4px)',
    width: 'var(--wh-4XL)',
    zIndex: 99,
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  selectedItem: {
    fontWeight: 'bold',
  },
  investigateOptions: {
    maxHeight: 'var(--wh-6XL)',
    overflow: 'auto',
  },
});

export const MenuItemHeader = styled(MuiMenuItem)({
  backgroundColor: 'hsla(var(--on-surface-color-hsl), 0.7)',
  color: 'var(--on-secondary-color-variant)',
  height: 'var(--wh-2XS)',
  fontSize: 'var(--tx-M)',
  pointerEvents: 'none',
});
