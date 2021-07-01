import { AccessControl } from '@kleeen/core-react';
import { FooterNavLeft } from './Footer/Index';
import { HeaderNavLeft } from './Header/Index';
import { KsSvgIcon } from '@kleeen/react/components';
import { NavLeftProps } from './NavLeft.model';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '@kleeen/react/hooks';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classnames from 'classnames';

const bem = 'ks-nav-left';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: 'var(--left-nav-bar-width)',
      flexShrink: 0,
      '& .MuiList-root': {
        '& .MuiTypography-root': {
          fontSize: 'var(--tx-M)',
          display: 'flex',
          alignItems: 'center',
        },
        '& .MuiListItem-root': {
          '& .MuiListItemText-root': {
            margin: '0px',
          },
          color: 'var(--on-nav-top-bg-color)',
          padding: 'var(--pm-S) var(--pm-2XL)',
          '&:hover': {
            color: 'var(--on-left-nav-bar-button-hover)',
            background: 'var(--left-nav-bar-button-hover)',
          },
          '&.active': {
            cursor: 'auto',
            color: 'var(--on-left-nav-bar-active-item-color)',
            background: 'var(--left-nav-bar-active-item-bg)',
            '& .MuiTypography-root': {
              fontWeight: '700',
            },
            borderLeft: 'solid var(--left-nav-bar-active-item-border-left) var(--on-application-background)',
          },
          '&:focus': {
            color: 'var(--on-left-nav-bar-active-item-color)',
            background: 'var(--left-nav-bar-active-item-bg)',
          },
          '& .ks-svg-icon': {
            marginRight: 'var(--pm-M)',
          },
        },
      },
      borderTopRightRadius: 'var(--left-nav-border-radius)',
      borderBottomRightRadius: 'var(--left-nav-border-radius)',
    },
    drawerPaper: {
      background: 'var(--nav-top-bg-color)',
      width: 'var(--left-nav-bar-width)',
      borderTopRightRadius: 'var(--card-border-radius)',
      borderBottomRightRadius: 'var(--card-border-radius)',
      border: 'none',
      boxShadow: 'var(--left-nav-bar-shadow)',
    },
    list: {
      marginTop: 'var(--pm-1XL)',
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        width: '0px',
      },
    },
  }),
);

export const NavLeft = ({
  accountMenuList,
  helpUrl,
  logo,
  menuList,
  productName,
}: NavLeftProps): JSX.Element => {
  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigation();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (location.pathname) {
      setActivePath(location.pathname);
    }
  }, [location]);

  const isActivePath = (path: string): string => path === activePath && 'active';

  return (
    <Drawer
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classnames(bem, classes.drawer)}
      variant="permanent"
    >
      {logo || productName ? <HeaderNavLeft logo={logo} productName={productName} /> : null}
      <List className={classnames(`${bem}__lists`, classes.list)}>
        {menuList.map(({ title, path, func, icon }) => {
          const navigationTitle = roleAccessKeyTag(`navigation.${title}`);
          return (
            <AccessControl key={navigationTitle} id={navigationTitle}>
              <ListItem
                button
                key={title}
                className={classnames(`${bem}__lists-item`, isActivePath(path))}
                onClick={(e) => {
                  e.preventDefault();
                  if (func) {
                    func();
                    return;
                  }
                  setActivePath(path);
                  navigate(path, false);
                }}
              >
                {icon && <KsSvgIcon icon={icon} />}
                <ListItemText primary={title} />
              </ListItem>
            </AccessControl>
          );
        })}
      </List>
      <FooterNavLeft helpUrl={helpUrl} accountMenuList={accountMenuList} navigate={navigate} />
    </Drawer>
  );
};
