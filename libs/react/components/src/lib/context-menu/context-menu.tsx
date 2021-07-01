import { ContextMenuProps, MenuItemType } from './context-menu.model';
import { Menu, MenuGroupItem, MenuGroupName, MenuTitle } from './contextual-menu.style';
import React, { useEffect, useRef } from 'react';
import { isNilOrEmpty, roleAccessKeyTag } from '@kleeen/common/utils';
import {
  useCrossLinkingItems,
  useTheme,
  useFilterItems,
  useHoverIntent,
  useTextFormatter,
} from '@kleeen/react/hooks';

import { AccessControl } from '@kleeen/core-react';
import Tooltip from '@material-ui/core/Tooltip';
import { Translate } from '@kleeen/core-react';

import { FilterTypes } from '@kleeen/types';

const hidePermission = 'HIDE';
export const KsContextMenu = ({
  autoClose,
  attr,
  cell,
  handleClose,
  anchorEl,
}: ContextMenuProps): JSX.Element => {
  const { themeClass } = useTheme();
  const timerRef = useRef(null);
  const { ref } = useHoverIntent<HTMLUListElement>({
    delayOnEnter: 0,
    onMouseEnterFn: clearTimeOut,
    onMouseLeaveFn: handleClose,
  });

  const crossLinkItems = useCrossLinkingItems({
    handleClose,
    attr,
    cell,
  });
  const [formatter] = useTextFormatter({
    format: attr?.format,
    formatType: attr?.formatType,
    transformation: attr?.aggregation,
  });
  const formattedValue = formatter(cell?.displayValue);
  const filtersMenuItems = useFilterItems({
    attr,
    cell: { ...cell, formattedValue },
    handleClose,
  });

  useEffect(() => {
    if (autoClose) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, 2000);

      return () => {
        clearTimeout(timerRef.current);
      };
    }
  }, []);

  function clearTimeOut() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  const filterInMenuItems = filtersMenuItems.length
    ? filtersMenuItems.filter((item) => item.filterType === FilterTypes.in)
    : [];
  const filterOutMenuItems = filtersMenuItems.length
    ? filtersMenuItems.filter((item) => item.filterType === FilterTypes.out)
    : [];

  const prepareCrossLinkingSectionAndItems = crossLinkItems.length
    ? [
        {
          type: MenuItemType.Section,
          label: (
            <Translate
              id="app.contextMenu.goTo.value"
              type="html"
              values={{ value: formattedValue as string }}
            />
          ),
        },
        ...crossLinkItems,
      ]
    : [];
  const prepareFilterInSectionAndItems = filterInMenuItems.length
    ? [
        {
          type: MenuItemType.Section,
          label: (
            <Translate id="app.contextMenu.filter.addAndApply" type="html" values={{ value: attr?.label }} />
          ),
        },
        ...filterInMenuItems,
      ]
    : [];
  const prepareFilterOutSectionAndItems = filterOutMenuItems.length
    ? [
        {
          type: MenuItemType.Section,
          label: (
            <Translate
              id="app.contextMenu.filter.removeAndApply"
              type="html"
              values={{ value: attr?.label }}
            />
          ),
        },
        ...filterOutMenuItems,
      ]
    : [];
  const menuItems = [
    ...prepareCrossLinkingSectionAndItems,
    ...prepareFilterInSectionAndItems,
    ...prepareFilterOutSectionAndItems,
  ];

  if (isNilOrEmpty(menuItems)) return null;

  return (
    <>
      <Menu
        id="context-menu"
        className={themeClass}
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        MenuListProps={{ ref }}
      >
        <MenuTitle>{formattedValue}</MenuTitle>
        {menuItems.map((item, i) => {
          if (item.type === MenuItemType.Section)
            return (
              <MenuGroupName key={i}>
                <Tooltip title={item.label} placement="top">
                  <span className="menu-item-text">{item.label}</span>
                </Tooltip>
              </MenuGroupName>
            );

          const itemAccessKey = roleAccessKeyTag(item.roleAccessKey);

          return (
            <AccessControl id={itemAccessKey} key={item.key}>
              {({ permission }) => (
                <MenuGroupItem
                  disabled={permission === hidePermission}
                  key={item.key}
                  onClick={item.handleClick(item)}
                  className={`${i % 2 ? 'odd-stripe' : 'even-stripe'}`}
                >
                  <Tooltip title={item.label} placement="top">
                    <span className="menu-item-text">{item.label}</span>
                  </Tooltip>
                </MenuGroupItem>
              )}
            </AccessControl>
          );
        })}
      </Menu>
    </>
  );
};
