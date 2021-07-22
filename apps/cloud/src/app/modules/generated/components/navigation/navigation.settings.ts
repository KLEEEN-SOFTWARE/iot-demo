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
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Production KPIs`,
        path: `/production-kp-is`,
        icon: `ks-navigation-p77rZt8jMsSCbnS9P72Lkb`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `System`,
        path: `/system`,
        icon: `ks-navigation-tjaoXrQ72vaE76PcYJvno1`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Sites`,
        path: `/sites`,
        icon: `ks-navigation-9E3PzkenkuMdYfd4FTbeJQ`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Nodes`,
        path: `/nodes`,
        icon: `ks-navigation-8JbMyUSafgnTLTWAtqBXWC`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Sensors`,
        path: `/sensors`,
        icon: `ks-navigation-ri1YjTGoXjuntsUDouUSec`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Site Map Report`,
        path: `/site-map-report`,
        icon: `ks-navigation-oyBJKXZrsLjuR3qUxB2uEW`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Configure Sensor/Node`,
        path: `/configure-sensor-node`,
        icon: `ks-navigation-9bqPxguVQuFBVXU6TeZXYJ`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Form`,
        path: `/form`,
        icon: `ks-navigation-cA5jm6oQvdU4M77sVveHXv`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
    ],
  };
};
