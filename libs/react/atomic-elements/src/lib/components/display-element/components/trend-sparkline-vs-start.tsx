import { BaseTrend } from './base';
import { DisplayComponentProps } from '@kleeen/types';
import { trendFormatter } from '@kleeen/frontend/utils';

export function TrendSparklineVsStart({ value }: DisplayComponentProps) {
  const highlightStart = true;
  const dataFormatted = trendFormatter({
    highlightStart,
    values: value?.displayValue,
  });

  return (
    <BaseTrend
      dataFormatted={dataFormatted}
      dataRaw={value?.displayValue}
      highlightStart={highlightStart}
      color="var(--viz3)"
    />
  );
}
