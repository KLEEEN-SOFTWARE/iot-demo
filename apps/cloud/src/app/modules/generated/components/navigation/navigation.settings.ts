import { NavigationSettings } from './navigation.model';

export const getSettings = (logout: () => void): NavigationSettings => {
  return {
    accountMenuOptions: [
      {
        title: 'User Preferences',
        path: '/profile/endUserPreferences/edit',
      },
      {
        title: 'Logout',
        path: '/logout',
        func: logout,
      },
    ],
    helpUrl: `https://kleeensoftware.zendesk.com/hc/en-us`,
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
        title: `Sites`,
        path: `/sites`,
        icon: `ks-navigation-9E3PzkenkuMdYfd4FTbeJQ`,
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
      {
        title: `Form`,
        path: `/form`,
        icon: `ks-navigation-cA5jm6oQvdU4M77sVveHXv`,
      },
    ],
  };
};
