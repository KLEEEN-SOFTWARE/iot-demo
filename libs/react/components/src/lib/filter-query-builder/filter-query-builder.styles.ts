import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  filterSelectionContainer: {
    padding: 'var(--pm-S)',
  },
  row: {
    alignItems: 'center',
    color: 'var(--on-surface-color)',
    display: 'grid',
    gap: 10,
    gridTemplateColumns: '18% repeat(3, 1fr) var(--wh-3XS)',
    height: 'var(--wh-1XS)',
    marginBottom: '1rem',
    transition: 'all 2s ease-in-out',
    '&:nth-child(2n)': {
      backgroundColor: 'rgba(0, 0, 0, 0.035)',
      borderRadius: 'var(--card-border-radius)',
    },
    width: '100%',
  },
  option: {
    border: 'none',
    minWidth: 'var(--wh-3XL)',
  },
  comparator: {
    '& .MuiFormControl-root': {
      width: '100% !important',
      '& .MuiButtonBase-root.MuiButton-root': {
        width: '100% !important',
      },
    },
  },
  where: {
    fontStyle: 'italic',
  },
  menu: {
    '& .MuiAutocomplete-groupLabel': {
      backgroundColor: 'var(--nav-top-bg-color)',
      color: 'var(--on-nav-top-bg-color)',
      fontSize: 'var(--tx-S)',
      fontWeight: 'bold',
      lineHeight: 'var(--tx-S)',
      padding: 'var(--pm-5XS) var(--pm-1XS) var(--pm-6XS)',
    },
    '& .MuiAutocomplete-option': {
      fontSize: 'var(--tx-M)',
      '&:hover': {
        backgroundColor: 'var(--secondary-color-variant)',
        color: 'var(--on-secondary-color-variant)',
      },
      padding: 'var(--pm-4XS) var(--pm-1XS)',
    },
  },
  removeButton: {
    backgroundColor: 'var(--color-danger)',
    color: 'var(--color-white)',
    height: 'var(--wh-3XS)',
    width: 'var(--wh-3XS)',
    '&:hover': {
      backgroundColor: 'var(--color-error)',
    },
  },
  actionButton: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'var(--secondary-color)',
    fontSize: 'var(--tx-M)',
    fontWeight: 600,
    marginTop: 'var(--pm-1XS)',
    '&:hover': {
      background: 'transparent',
      color: 'var(--secondary-color-variant)',
    },
  },
  noFilters: {
    color: 'var(--secondary-color-variant)',
    fontSize: 'var(--tx-L)',
    fontWeight: 600,
    marginLeft: 'var(--pm-1XS)',
    marginTop: 'var(--pm-M)',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});
