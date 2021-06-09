import { BaseTrend } from './base';
import { DisplayComponentProps } from '@kleeen/types';
import { trendFormatter } from '@kleeen/frontend/utils';

export function TrendSparklineVsEnd({ value }: DisplayComponentProps) {
  const highlightEnd = true;
  const dataFormatted = trendFormatter({
    highlightEnd,
    values: value?.displayValue,
  });

  return (
    <BaseTrend
      dataFormatted={dataFormatted}
      dataRaw={value?.displayValue}
      highlightEnd={highlightEnd}
      color="var(--viz5)"
    />
  );
}
