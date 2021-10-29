import { FormControl, Tooltip } from '@material-ui/core';
import { KsDropDownProps, KsMenuProps } from './drop-down.model';
import { KsMenuContainer, KsMenuItem } from '../menu';
import { KsSvgIcon, KsSvgIconSize } from '../svg-icon';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { isNilOrEmpty, roleAccessKeyTag } from '@kleeen/common/utils';

import { AccessControl } from '@kleeen/core-react';
import Apps from '@material-ui/icons/Apps';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { KsButtonText } from '../button';
import MenuList from '@material-ui/core/MenuList';
import MuiPopper from '@material-ui/core/Popper';
import classnames from 'classnames';
import { MenuItemHeader, useStyles } from './drop-down.style';
import { Translate } from '@kleeen/core-react';

export function KsFloatMenu({
  accessKey = 'menu-item-key',
  anchorEl,
  className,
  handleClose,
  handleOnClick,
  headerSection,
  isInvestigate,
  open,
  options,
  placement,
  selectedItem,
  shouldHighlightSelected,
  syncWidth = false,
}: KsMenuProps): ReactElement {
  const classes = useStyles();
  const style = syncWidth ? { width: anchorEl.offsetWidth } : {};
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <MuiPopper
        anchorEl={anchorEl}
        className={classes.popper}
        disablePortal
        open={open}
        style={style}
        transition
        placement={placement}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <KsMenuContainer className={className} variant="outlined" square>
              {headerSection && (
                <MenuItemHeader>
                  <span className={classes.truncate}>
                    <Translate id={headerSection} type="html" />
                  </span>
                </MenuItemHeader>
              )}
              <MenuList
                data-testid="ks-dropdown-menu"
                className={isInvestigate && classes.investigateOptions}
              >
                {options?.map((item) => (
                  <AccessControl
                    id={roleAccessKeyTag(`${accessKey}.${item.key}`)}
                    key={roleAccessKeyTag(`${accessKey}.${item.key}`)}
                  >
                    <Tooltip title={item.label} placement="top">
                      <KsMenuItem
                        className={classnames({
                          [classes.selectedItem]: shouldHighlightSelected && item.key === selectedItem.key,
                        })}
                        disabled={item.disabled}
                        key={item.key || item.path}
                        onClick={(e) => {
                          if (item.handleOnClick) item.handleOnClick(e, item);
                          if (handleOnClick) handleOnClick(e, item);
                        }}
                      >
                        {item.icon && (
                          <KsSvgIcon
                            size={item.iconSize || KsSvgIconSize.Medium}
                            className={classes.menuItemIcon}
                            icon={item.icon}
                          />
                        )}
                        <span className={classes.truncate}>{item.label}</span>
                      </KsMenuItem>
                    </Tooltip>
                  </AccessControl>
                ))}
              </MenuList>
            </KsMenuContainer>
          </Grow>
        )}
      </MuiPopper>
    </ClickAwayListener>
  );
}

export function KsDropDown({
  accessKey,
  dataTestId = 'drop-down',
  defaultDropdownClass = '',
  handleOnClick,
  headerSection,
  hideIcon = false,
  InputElement,
  isInvestigate = false,
  options,
  placement = 'bottom',
  selectedItem,
  shouldHighlightSelected,
  syncWidth,
  translate,
}: KsDropDownProps) {
  const anchorRef = useRef();
  const [open, setOpen] = useState(false);
  const defaultItem = options[0] || { label: 'No Options', key: 'non-options' };
  const [item, setItem] = useState(selectedItem || defaultItem);

  const classes = useStyles();

  useEffect(() => {
    if (selectedItem) {
      const newItem = options.find((option) => option.key === selectedItem.key) || defaultItem;
      setItem(newItem);
    }
  }, [defaultItem, selectedItem?.key]);

  useEffect(() => {
    if (!isNilOrEmpty(options)) {
      const [firstItem] = options;
      setItem(firstItem);
    } else {
      setItem(defaultItem);
    }
  }, [options?.length]);

  const Icon = item.icon ? (
    <KsSvgIcon size={KsSvgIconSize.Large} className="menu-item-icon" icon={item.icon} />
  ) : (
    <Apps />
  );

  const DropDownButton = InputElement ? (
    <InputElement
      currentItem={item}
      options={options}
      ref={anchorRef}
      setOpen={setOpen}
      translate={translate}
    />
  ) : (
    <KsButtonText
      ref={anchorRef}
      onClick={() => setOpen(true)}
      size={'large'}
      startIcon={hideIcon ? null : Icon}
      endIcon={<KeyboardArrowDownIcon />}
      className={classnames(classes.dropDownSize, defaultDropdownClass)}
    >
      <Tooltip title={item.label} placement="top">
        <span className={classes.truncate}>{item.label}</span>
      </Tooltip>
    </KsButtonText>
  );

  return (
    <FormControl className={classes.formControl} data-testid={dataTestId}>
      {DropDownButton}
      {open && (
        <KsFloatMenu
          accessKey={accessKey}
          anchorEl={anchorRef.current}
          handleOnClick={(e, newItem) => {
            if (handleOnClick) handleOnClick(e, newItem);

            setOpen(false);
            setItem(newItem);
          }}
          handleClose={(e) => {
            setOpen(false);
          }}
          headerSection={headerSection}
          isInvestigate={isInvestigate}
          open={open}
          options={options}
          placement={placement}
          selectedItem={item}
          shouldHighlightSelected={shouldHighlightSelected}
          syncWidth={syncWidth}
        />
      )}
    </FormControl>
  );
}

export { KsButtonText };
