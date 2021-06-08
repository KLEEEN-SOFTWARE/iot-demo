import { KeyValueProps } from './key-value.model';
import MuiTooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { useStyles } from './key-value.styles';

const defaultLayoutProps = {
  keyWidth: 144,
  valueWidth: 233,
};

export function KeyValue({ keyComponent, layoutProps, valueComponent }: KeyValueProps) {
  const classes = useStyles({ ...defaultLayoutProps, ...layoutProps });

  return (
    <div className={classNames('key-value', classes.content)}>
      <MuiTooltip title={keyComponent} placement="top">
        <span className={classNames('key-value__key', classes.key)}>{keyComponent}</span>
      </MuiTooltip>
      <div className={classNames('key-value__value', classes.value)}>{valueComponent}</div>
    </div>
  );
}
