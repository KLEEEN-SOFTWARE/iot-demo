import { Attribute, TransformationResponse, WidgetStateParams } from '@kleeen/types';

export interface SummaryStatisticsProps {
  attributes: Attribute[];
  data: TransformationResponse[];
  params: WidgetStateParams;
  widgetId: string;
}
