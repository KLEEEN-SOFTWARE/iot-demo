import { Attribute } from '@kleeen/types';
import { Key } from 'react';
import { VizCommonParams } from '../../../../types';

export interface SummaryStatisticsWidgetProps extends VizCommonParams {
  attributes?: Attribute[];
  taskName: string;
  widgetId: Key;
}
