import { ViewType, Widget } from '@kleeen/types';

import { ReactText } from 'react';
import { ViewOption } from '../DataViewControlSection/DataViewControlSection.model';

export interface DataViewDisplaySectionAtomicProps {
  widgets: Widget[];
  selectedOption: ViewOption;
  dashboardWidgets: Widget[];
  entityName: string;
  selectedRows: Row[];
  setSelectedRows: () => void;
  singleViewWidgets?: Widget[];
  atomicCustomViews?: any[];
  tableWidgets: Widget[];
  taskName: string;
  value: any;
  setCardsNumber?: (e: number) => void;
}

export interface Row {
  [key: string]: string | number;
}

export type DisplaySectionViews = {
  widget: any;
  taskName?: string;
  selectedRows?: Row[];
  setSelectedRows?: () => void;
  dashboardWidgets?: any;
  indexToRender: number;
};

export type DashboardView = {
  type: ViewType;
  viewOrder: number;
  dashboardWidgets: Widget[];
  viewId: ReactText;
};
