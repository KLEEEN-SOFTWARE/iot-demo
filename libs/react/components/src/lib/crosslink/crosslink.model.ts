import { ContextMenuDataPoint, WidgetStateParams } from '@kleeen/types';

import { ReactNode } from 'react';

export interface CrosslinkProps {
  dataPoints: ContextMenuDataPoint[];
  children: ReactNode;
  params?: WidgetStateParams;
  transformationKeyToUse?: string;
  widgetId?: string;
}
