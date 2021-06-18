import { NavLeft, NavTop } from '@kleeen/react/atomic-elements';
import React, { ReactElement } from 'react';

import { KSAuth } from '@kleeen/auth';
import { NavPosition } from '@kleeen/types';
import appSettings from '../../../../settings/app.json';
import { getSettings } from './navigation.settings';
import { useHistory } from 'react-router-dom';
import { useKleeenActions } from '@kleeen/react/hooks';
import { useSnackbar } from 'notistack';

export function NavigationTask(): ReactElement {
  const { logout } = useKleeenActions('endUser');
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  async function onLogout() {
    try {
      logout();
      await KSAuth.signOut();
    } catch (err) {
      enqueueSnackbar(
        {
          message: err.message,
          title: err.message,
        },
        {
          persist: false,
          variant: 'error',
        },
      );
    }
    history.push('/');
  }

  const settings = getSettings(onLogout);

  const navCommonProps = {
    accountMenuList: settings.accountMenuOptions,
    helpUrl: settings.helpUrl,
    logo: settings.logo,
    menuList: settings.menuOptions,
    productName: appSettings.productName,
  };
  const Nav = appSettings.layout.position === NavPosition.top ? NavTop : NavLeft;

  return <Nav {...navCommonProps} />;
}

export default NavigationTask;
