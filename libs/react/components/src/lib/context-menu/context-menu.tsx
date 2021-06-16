import { AccessControl } from '@kleeen/core-react';
import { Menu, MenuGroupItem, MenuGroupName, MenuTitle } from './contextual-menu.style';
import { useCrossLinkingItems, useFilterItems, useTextFormatter } from '@kleeen/react/hooks';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { isNilOrEmpty, roleAccessKeyTag } from '@kleeen/common/utils';
import { useTheme } from '@kleeen/react/hooks';
import { Translate } from '@kleeen/core-react';
import { ContextMenuProps, MenuItemType } from './context-menu.model';

export const KsContextMenu = ({ attr, cell, handleClose, anchorEl }: ContextMenuProps): JSX.Element => {
  const { themeClass } = useTheme();
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
  const prepareFilterSectionAndItems = filtersMenuItems.length
    ? [
        {
          type: MenuItemType.Section,
          label: (
            <Translate id="app.contextMenu.filter.addAndApply" type="html" values={{ value: attr?.label }} />
          ),
        },
        ...filtersMenuItems,
      ]
    : [];
  const menuItems = [...prepareCrossLinkingSectionAndItems, ...prepareFilterSectionAndItems];

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
      >
        <MenuTitle>{formattedValue}</MenuTitle>
        {menuItems.map((item, i) => {
          if (item.type === MenuItemType.Section)
            return (
              <MenuGroupName>
                <Tooltip title={item.label} placement="top">
                  <span className="menu-item-text">{item.label}</span>
                </Tooltip>
              </MenuGroupName>
            );

          const itemAccessKey = roleAccessKeyTag(item.roleAccessKey);

          return (
            <AccessControl id={itemAccessKey} key={itemAccessKey}>
              {({ permission }) => (
                <MenuGroupItem
                  disabled={permission === 'HIDE'}
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
