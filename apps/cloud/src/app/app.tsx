import './app.scss';
import './assets/styles/custom.css';
import './assets/styles/custom.scss';

import {
  AttributeContextMenuProvider,
  CrosslinkingInteractionProvider,
  MenuContextProvider,
  ThemeContextProvider,
  WebSocketProvider,
  useLocalization,
} from '@kleeen/react/hooks';
import {
  IconRegistryProvider,
  KUICombineProviders,
  AccessControlProvider as KsAccessControlProvider,
  TranslationProvider,
} from '@kleeen/core-react';
import React, { ReactElement } from 'react';

import { DEFAULT_ROLE } from './settings/default-user-role';
import { KsNotifications } from '@kleeen/react/components';
import Router from './routesLoader';
import ThemeWrapper from './themeWrapper';
import customPermissions from './settings/role-access-keys.custom.json';
import { environment } from '@kleeen/environment';
import iconRegistry from '../assets/icon-registry';
import localeData from './settings/strings-translations.json';
import { merge } from 'lodash';
import permissions from './settings/role-access-keys.json';
import settings from './settings/app.json';
import { useServiceWorker } from './useServiceWorker';

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
  const crosslinkingInteractionValue = settings.crossLinkingInteraction;

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
            <CrosslinkingInteractionProvider crosslinkingInteraction={crosslinkingInteractionValue}>
              <KsNotifications />
              <ThemeWrapper>
                <Router />
                <footer data-testid="app-version">{environment.deployment.version}</footer>
              </ThemeWrapper>
            </CrosslinkingInteractionProvider>
          </KUICombineProviders>
        </TranslateProvider>
      </div>
    </React.StrictMode>
  );
}

export default App;
