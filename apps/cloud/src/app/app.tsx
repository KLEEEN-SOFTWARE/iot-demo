import './app.scss';
import './assets/styles/custom.css';
import './assets/styles/custom.scss';

import {
  AccessControlProvider as KsAccessControlProvider,
  IconRegistryProvider,
  KUICombineProviders,
  TranslationProvider,
} from '@kleeen/core-react';
import {
  AttributeContextMenuProvider,
  MenuContextProvider,
  ThemeContextProvider,
  useLocalization,
  WebSocketProvider,
} from '@kleeen/react/hooks';
import { DEFAULT_ROLE } from './settings/default-user-role';
import { environment } from '@kleeen/environment';
import { KsNotifications } from '@kleeen/react/components';
import { merge } from 'lodash';
import { useServiceWorker } from './useServiceWorker';
import customPermissions from './settings/role-access-keys.custom.json';
import iconRegistry from '../assets/icon-registry';
import localeData from './settings/strings-translations.json';
import permissions from './settings/role-access-keys.json';
import React, { ReactElement } from 'react';
import Router from './routesLoader';
import ThemeWrapper from './themeWrapper';

merge(permissions, customPermissions);

const AccessControlProvider = ({ children }) => (
  <KsAccessControlProvider
    accessControlSettings={{
      defaultRole: DEFAULT_ROLE,
      pathToRoleOnState: 'endUser.currentUser.role',
      permissions,
    }}
  >
    {children}
  </KsAccessControlProvider>
);

function App(): ReactElement {
  useServiceWorker();
  const { language } = useLocalization();
  const TranslateProvider = TranslationProvider({
    defaultLocale: 'en',
    locale: language,
    localeData,
    onError: (err: string): void => {
      console.debug('TranslateProvider', err);
    },
  });

  return (
    <React.StrictMode>
      <div className="app">
        <TranslateProvider>
          <KUICombineProviders
            providers={[
              AccessControlProvider,
              AttributeContextMenuProvider,
              IconRegistryProvider({ iconRegistry }),
              MenuContextProvider,
              ThemeContextProvider,
              WebSocketProvider,
            ]}
          >
            <KsNotifications />
            <ThemeWrapper>
              <Router />
              <footer>{environment.deployment.version}</footer>
            </ThemeWrapper>
          </KUICombineProviders>
        </TranslateProvider>
      </div>
    </React.StrictMode>
  );
}

export default App;
