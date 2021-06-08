import { BasePie } from './base';
import { DisplayComponentProps } from '@kleeen/types';
import { Label } from './label';
import { pathOr } from 'ramda';
import { useStyles } from '../styles/sparkline-max-largest.styles';

export function SparklineMaxLargest(props: DisplayComponentProps) {
  const classes = useStyles();

  const { element, value, ...restOfProps } = props;
  const labelDisplayValue = pathOr('', ['displayValue', '0'], value);
  const labelValue = {
    displayValue: labelDisplayValue,
  };

  return (
    <div className={classes.content}>
      <BasePie data={value?.displayValue} />
      <Label {...restOfProps} value={labelValue} />
    </div>
  );
}
