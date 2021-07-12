import './GridAreaSection.scss';
import { ReactElement } from 'react';
import {
  getWidgetContextName,
  useKleeenActions,
  useUrlQueryParams,
  useWidgetContext,
} from '@kleeen/react/hooks';

import { KsVirtualTable } from '@kleeen/react/components';
import { Widget } from '../../../types';

interface Row {
  [key: string]: string | number;
}

export interface GridAreaSectionProps {
  entityName: string;
  selectedRows: Row[];
  setSelectedRows: () => void;
  taskName: string;
  widget: Widget;
  entityId?: string;
  sortableColumns?: boolean;
  columnWidth?: number;
  className?: string;
}

export const GridAreaSection = (props: GridAreaSectionProps): ReactElement => {
  const { taskName, widget } = props;
  const { actions, id: widgetId, attributes, entityId, params } = widget;
  const entityActions = useKleeenActions(taskName);
  const contextName = getWidgetContextName({ taskName, widgetId: widgetId as string });
  const widgetActions = useKleeenActions(contextName);
  const widgetData = useWidgetContext({ taskName, widgetId, params: { ...params, attributes } });
  const data = widgetData?.data?.data;
  const format = widgetData?.data?.format;
  const isLoading = widgetData?.isLoading;
  const pagination = widgetData?.data?.pagination;
  const entityData = { data, format, isLoading, pagination };
  const paramsBasedOnRoute = useUrlQueryParams({ useNestedObjects: true });

  const getMoreRows = (nextPage) => {
    widgetActions.getMoreData({
      taskName,
      widgetId,
      params: { ...params, attributes, pagination: nextPage },
      paramsBasedOnRoute,
    });
  };

  return (
    <KsVirtualTable
      actions={actions}
      attributes={attributes}
      entity={entityData}
      entityActions={entityActions}
      entityId={entityId}
      widgetId={widgetId}
      getMoreRows={getMoreRows}
      sortableColumns={props.sortableColumns}
      {...props}
    />
  );
};

export default GridAreaSection;
