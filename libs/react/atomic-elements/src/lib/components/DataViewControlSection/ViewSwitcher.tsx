import { DisplayViewType, SwitcherProps, TabSwitcherProps, ViewOption } from './DataViewControlSection.model';
import { KsSvgIcon, KsSvgIconSize } from '@kleeen/react/components';
import { Tab, Tabs, useStyles } from './DataViewControlSection.styles';
import { isNilOrEmpty, roleAccessKeyTag } from '@kleeen/common/utils';

import Apps from '@material-ui/icons/Apps';
import AspectRatio from '@material-ui/icons/AspectRatio';
import { ReactElement } from 'react';
import { SelectList } from '../SelectList/SelectList';
import TableChart from '@material-ui/icons/TableChart';
import Tooltip from '@material-ui/core/Tooltip';
import classnames from 'classnames';
import { formatViewOptions } from './index';
import { useAccessControlChecker } from '@kleeen/core-react';

const bem = 'ks-view-switcher';
const rolePermissionOk = 'SHOW';

const IconTable = ({ name }) => (
  <Tooltip title={name} placement="top">
    <TableChart />
  </Tooltip>
);

const IconGrid = ({ name }) => (
  <Tooltip title={name} placement="top">
    <Apps />
  </Tooltip>
);

const IconFullView = ({ name }) => (
  <Tooltip title={name} placement="top">
    <AspectRatio />
  </Tooltip>
);

const getViewOptionPropsBasedOnType = ({ id, name, type }: { id: number; name: string; type: string }) => {
  const sharedProps = { id: `view-tab-${id}` };

  switch (type) {
    case DisplayViewType.FullView:
      return {
        ...sharedProps,
        icon: <IconFullView name={name} />,
        ['aria-label']: 'fullview',
      };
    case DisplayViewType.Grid:
      return {
        ...sharedProps,
        icon: <IconGrid name={name} />,
        ['aria-label']: 'grid',
      };
    case DisplayViewType.Listing:
      return {
        ...sharedProps,
        icon: <IconTable name={name} />,
        ['aria-label']: 'table',
      };
    default:
      return null;
  }
};

const getViewOptionPropsBasedOnId = ({
  name,
  viewId,
}: {
  name: string;
  viewId: string;
}): { id: string; icon: JSX.Element; 'aria-label': string } => {
  const classes = useStyles();

  return {
    id: viewId,
    icon: (
      <Tooltip title={name} placement="top">
        <div className={classnames(bem, classes.IconContainer)}>
          <KsSvgIcon size={KsSvgIconSize.ExtraLarge} icon={viewId} />
        </div>
      </Tooltip>
    ),
    ['aria-label']: name,
  };
};

const TabSwitcher = ({
  handleChangeTab,
  viewOptions,
  value,
  taskName,
  onTabIndexChanged,
}: TabSwitcherProps): ReactElement => (
  <Tabs value={value} scrollButtons="off" aria-label="tabs">
    {viewOptions.map((option, index) => {
      const { name = 'List', type, viewId, viewOrder } = option;
      const props = viewId
        ? getViewOptionPropsBasedOnId({ name, viewId })
        : getViewOptionPropsBasedOnType({ id: index, name, type });

      return (
        <Tab
          key={index}
          {...props}
          selected={value === index}
          onClick={(e) => {
            const selectedIndex = isNilOrEmpty(viewOrder) ? index : viewOrder;
            if (handleChangeTab) {
              handleChangeTab(selectedIndex);
            }
            if (onTabIndexChanged) {
              onTabIndexChanged(selectedIndex, option);
            }
          }}
        />
      );
    })}
  </Tabs>
);

const SelectListWrapper = ({
  handleChangeTab,
  onTabIndexChanged,
  value,
  viewOptions,
  taskName,
}: TabSwitcherProps): JSX.Element => {
  const options = formatViewOptions(viewOptions);

  return (
    <SelectList
      id="select-view"
      label="Select View"
      labelId="select-view"
      onChange={(selectedIndex, option) => {
        if (handleChangeTab) {
          handleChangeTab(selectedIndex);
        }
        if (onTabIndexChanged) {
          onTabIndexChanged(selectedIndex as number, option as ViewOption);
        }
      }}
      options={options}
      value={options[value].label}
      taskName={taskName}
    />
  );
};

export const ViewSwitcher = ({ showDropDown = false, viewOptions, ...rest }: SwitcherProps): JSX.Element => {
  const options = [];
  viewOptions.forEach((vOption) => {
    if (
      rolePermissionOk ===
      useAccessControlChecker(roleAccessKeyTag(`${rest.taskName}.views.${vOption.name}`)).permission
    ) {
      options.push(vOption);
    }
  });

  if (!Array.isArray(viewOptions)) return null;

  return showDropDown ? (
    <SelectListWrapper viewOptions={options} {...rest} />
  ) : (
    <TabSwitcher viewOptions={options} {...rest} />
  );
};
