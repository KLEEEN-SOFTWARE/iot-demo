import { styled, withStyles } from '@material-ui/core';

import MuiBadge from '@material-ui/core/Badge';

export const KsBadge = withStyles({
  // Default badge uses main clickable color
  root: {
    '& .iconFilter': {
      position: 'relative',
    },
    '& .MuiBadge-colorPrimary': {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--on-primary-color)',
    },
    '& .MuiBadge-colorSecondary': {
      backgroundColor: 'var(--secondary-color)',
      color: 'var(--on-secondary-color)',
    },
    '&:hover': {
      color: 'var(--secondary-color-variant)',
      background: 'var(--transparent)',
    },
  },
})(MuiBadge);
