import {
  ContextMenuDataPoint,
  ContextMenuItem,
  DataPointWithFormattedValue,
  Filters,
  ReactElement,
  WidgetStateParams,
} from '@kleeen/types';

export type FormattedContextDataPoint = DataPointWithFormattedValue & ContextMenuDataPoint;

export interface DataPointWithFilters extends DataPointWithFormattedValue {
  filters?: Filters;
}

//#region Context Menu
export type HandleContextMenuClose = () => void;

export interface ContextMenuProps {
  anchorEl: null | HTMLElement;
  autoClose?: boolean;
  dataPoints: ContextMenuDataPoint[];
  onClose: HandleContextMenuClose;
  widgetContextParams?: WidgetStateParams;
  widgetId?: string;
}
//#endregion

//#region Context Menu Section
export interface ContextMenuSectionItem {
  key: string;
  label: ReactElement;
  menuItems: ContextMenuItem[];
}

export interface ContextMenuSectionProps {
  dataPoints: DataPointWithFormattedValue[];
  dataPointsToShow: DataPointWithFormattedValue[];
  handleClose: HandleContextMenuClose;
  widgetContextParams?: WidgetStateParams;
  widgetId?: string;
}
//#endregion

//#region Context Menu Section Item
export interface ContextMenuClickHandler<T> {
  handleClose: HandleContextMenuClose;
  item: T;
}
//#endregion
