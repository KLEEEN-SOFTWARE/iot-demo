import { fontFamily } from './settings/font-family';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useGetThemeStoredValue, useTheme } from '@kleeen/react/hooks';
import classnames from 'classnames';
import settings from './settings/app.json';
import themeSettings from './settings/theme.json';

// Add global font class
const useStyles = makeStyles({
  '@global': {
    '.ks-global-font': {
      fontFamily,
    },
  },
  appContainer: {
    background: 'var(--application-background)',
  },
});

function ThemeWrapper({ children }) {
  const bem = 'ks';
  const { position } = settings.layout;
  const classes = useStyles();
  const { setTheme, themeClass } = useTheme();
  const { storedTheme } = useGetThemeStoredValue(themeSettings);

  useEffect(() => {
    setTheme(storedTheme);
  }, [storedTheme.kit]);

  return (
    <div
      className={classnames(
        'generated-new',
        'ks-global-font',
        bem,
        classes.appContainer,
        position,
        themeClass,
      )}
      data-testid="app-container"
      id={'theme-wrapper-id'}
    >
      {children}
    </div>
  );
}

export default ThemeWrapper;
