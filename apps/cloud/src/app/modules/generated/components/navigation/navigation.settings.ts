import { KSAuth } from '@kleeen/auth';
import { NavigationSettings } from './navigation.model';

export const Settings: NavigationSettings = {
  accountMenuOptions: [
    {
      title: 'User Preferences',
      path: '/profile/endUserPreferences/edit',
    },
    {
      title: 'Logout',
      path: '/logout',
      func: (): Promise<unknown> => KSAuth.signOut().catch(console.warn),
    },
  ],
  helpUrl: undefined,
  logo: `assets/logo.png`,
  menuOptions: [
    {
      title: `Events`,
      path: `/events`,
      icon: `ks-navigation-naX8kq49HS9GMz3ASo7AaH`,
    },
    {
      title: `Production KPIs`,
      path: `/production-kp-is`,
      icon: `ks-navigation-p77rZt8jMsSCbnS9P72Lkb`,
    },
    {
      title: `System`,
      path: `/system`,
      icon: `ks-navigation-tjaoXrQ72vaE76PcYJvno1`,
    },
    {
      title: `Nodes`,
      path: `/nodes`,
      icon: `ks-navigation-8JbMyUSafgnTLTWAtqBXWC`,
    },
    {
      title: `Sensors`,
      path: `/sensors`,
      icon: `ks-navigation-ri1YjTGoXjuntsUDouUSec`,
    },
    {
      title: `Configure Sensor/Node`,
      path: `/configure-sensor-node`,
      icon: `ks-navigation-9bqPxguVQuFBVXU6TeZXYJ`,
    },
  ],
};
