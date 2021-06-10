import { BaseTrend } from './base';
import { DisplayComponentProps } from '@kleeen/types';
import { trendFormatter } from '@kleeen/frontend/utils';

export function TrendSparklineHighLow({ value }: DisplayComponentProps) {
  const dataFormatted = trendFormatter({
    highlightMinMax: true,
    values: value?.displayValue,
  });

  return <BaseTrend dataFormatted={dataFormatted} color="var(--viz7)" />;
}
