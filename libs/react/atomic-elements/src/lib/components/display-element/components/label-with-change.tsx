import { Arrow } from '../../Arrow/Arrow';
import { DisplayComponentProps } from '@kleeen/types';
import classNames from 'classnames';
import { useStyles } from '../styles/label.styles';

export function LabelWithChange({ attribute, highlighted, transformation, value }: DisplayComponentProps) {
  const classes = useStyles();

  return (
    <div className={classNames('ks-label', classes.label, { highlighted })}>
      <Arrow
        highlighted={highlighted}
        transformation={{
          transformation,
          metadata: attribute.aggregationMetadata,
        }}
        value={value?.displayValue}
      />
    </div>
  );
}
