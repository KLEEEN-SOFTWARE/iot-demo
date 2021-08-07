import { ContextMenuProps, MenuItemType } from './context-menu.model';
import { FilterTypes, Widget } from '@kleeen/types';
import { Menu, MenuGroupItem, MenuGroupName, MenuTitle } from './contextual-menu.style';
import {
  PreviewItem,
  useCrossLinkingItems,
  useFilterItems,
  useHoverIntent,
  usePreviewItems,
  usePreviewPanel,
  useTextFormatter,
  useTheme,
} from '@kleeen/react/hooks';
import { isNilOrEmpty, roleAccessKeyTag } from '@kleeen/common/utils';
import { useEffect, useRef } from 'react';

import { AccessControl } from '@kleeen/core-react';
import Tooltip from '@material-ui/core/Tooltip';
import { Translate } from '@kleeen/core-react';
import { WidgetScope } from '@kleeen/widgets';

const hidePermission = 'HIDE';

export const KsContextMenu = ({
  anchorEl,
  autoClose,
  attr,
  cell,
  displayColumnAttribute,
  handleClose,
  row,
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

  const previewItems = usePreviewItems({
    attr,
    cell: { ...cell, formattedValue },
    displayColumnAttribute,
    row,
  });
  // TODO: Move these inside a useEffect
  const previewSectionAndItems = getPreviewItemsAsMenuItems({ handleClose, previewItems });

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
    ...previewSectionAndItems,
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

//#region Private Members
interface GetPreviewItemsAsMenuItemsParams {
  handleClose: () => void;
  previewItems: PreviewItem[];
}

function getPreviewItemsAsMenuItems({ handleClose, previewItems }: GetPreviewItemsAsMenuItemsParams) {
  const previewContext = usePreviewPanel();

  if (isNilOrEmpty(previewItems)) {
    return [];
  }

  return [
    {
      type: MenuItemType.Section,
      label: <Translate id="app.contextMenu.preview" type="html" />,
    },
    ...previewItems.map(({ entity, filteredBy, scope, value, widgets }) => {
      return scope === WidgetScope.Single
        ? {
            label: <Translate id="app.contextMenu.preview.single" type="html" values={{ value }} />,
            handleClick: () => () => {
              handleClose();
              previewContext.setPreviewWidgets(widgets as Widget[]);
              previewContext.openPreviewPanel();
            },
            key: `preview.single`,
            roleAccessKey: `preview.single`,
          }
        : {
            label: (
              <Translate
                id="app.contextMenu.preview.collection"
                type="html"
                values={{ entity, filteredBy }}
              />
            ),
            handleClick: () => () => {
              handleClose();
              previewContext.setPreviewWidgets(widgets as Widget[]);
              previewContext.openPreviewPanel();
            },
            key: `preview.collection`,
            roleAccessKey: `preview.collection`,
          };
    }),
  ];
}
//#endregion
