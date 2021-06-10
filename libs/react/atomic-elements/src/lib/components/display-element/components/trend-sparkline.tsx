import { BaseTrend } from './base';
import { DisplayComponentProps } from '@kleeen/types';

export function TrendSparkline({ value }: DisplayComponentProps) {
  return <BaseTrend dataFormatted={value?.displayValue} />;
}
