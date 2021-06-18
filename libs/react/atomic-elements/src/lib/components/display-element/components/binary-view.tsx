import { DisplayComponentProps } from '@kleeen/types';
import classNames from 'classnames';
import { useStyles } from '../styles/label.styles';

export function BinaryView({ highlighted, value }: DisplayComponentProps) {
  const displayValue = value?.displayValue ? 'True' : 'False';
  const classes = useStyles();

  return (
    <div className={classNames('ks-label', classes.label, { highlighted })}>
      <span>{displayValue}</span>
    </div>
  );
}
