import { KeyValueProps } from './key-value.model';
import { useStyles } from './key-value.styles';
import classNames from 'classnames';
import MuiTooltip from '@material-ui/core/Tooltip';

const bem = 'ks-key-values';

const defaultLayoutProps = {
  keyWidth: 144,
  valueWidth: 233,
};

export function KeyValue({ highlighted, keyComponent, layoutProps, valueComponent }: KeyValueProps) {
  const classes = useStyles({ ...defaultLayoutProps, ...layoutProps });

  return (
    <div className={classNames(bem, classes.content)}>
      <MuiTooltip title={keyComponent} placement="top">
        <span className={classNames(`${bem}__key`, 'key-value__key', classes.key, { highlighted })}>
          {keyComponent}
        </span>
      </MuiTooltip>
      <div className={classNames(`${bem}__value`, 'key-value__value', classes.value, { highlighted })}>
        {valueComponent}
      </div>
    </div>
  );
}
