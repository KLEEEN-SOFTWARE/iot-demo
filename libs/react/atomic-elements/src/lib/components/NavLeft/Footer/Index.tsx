import './FooterNavLeft.scss';

import { Button, UserAccountButton } from '../NavLeft.style';
import { FooterNavLeftProps } from './FooterNavLeft.model';
import { useStyles } from './FooterNavLeft.style';
import { useTheme, useUserInfo } from '@kleeen/react/hooks';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AppBar from '@material-ui/core/AppBar';
import classnames from 'classnames';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const bem = 'ks-nav-left-footer';

export const FooterNavLeft = ({ helpUrl, accountMenuList, navigate }: FooterNavLeftProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { userInfo } = useUserInfo();
  const classes = useStyles();
  const { themeClass } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const getUserEmail = (userObj): string => {
    return userObj ? userObj.attributes.email : '';
  };

  return (
    <div className={classnames(bem, classes.appBarContainer, 'nav-bar-footer')}>
      <AppBar position="fixed" color="primary" className={classnames(`${bem}__app-bar`, classes.appBar)}>
        <div className={classnames(`${bem}__content`, classes.appBarContent)}>
          <UserAccountButton onClick={handleClick}>
            <AccountCircleOutlinedIcon />
            <Tooltip title={getUserEmail(userInfo)}>
              <div className={classnames(`${bem}__account--username`, classes.userName)}>
                <div className={classnames(`${bem}__account--user-info`, classes.userNameContent)}>
                  {getUserEmail(userInfo)}
                </div>
              </div>
            </Tooltip>
          </UserAccountButton>
          {Boolean(helpUrl) && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.open(helpUrl, '_blank');
              }}
            >
              <HelpOutlineOutlinedIcon />
            </Button>
          )}
          <Menu
            anchorEl={anchorEl}
            id="simple-menu"
            keepMounted
            MenuListProps={{ className: `${themeClass}` }}
            onClose={handleClose}
            open={Boolean(anchorEl)}
          >
            {accountMenuList.map(({ title, path, func }) => (
              <MenuItem
                key={title}
                className={classnames(`${bem}__menu--item`)}
                onClick={(e) => {
                  e.preventDefault();
                  if (func) {
                    func();
                    return;
                  }
                  navigate(path, false);
                  handleClose();
                }}
              >
                {title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </AppBar>
    </div>
  );
};
