import { Crosslink } from '../../crosslink';
import { DisplayComponentProps } from '@kleeen/types';
import { getColorForSeverityValues } from '@kleeen/frontend/utils';
import { KsDisplayMedia } from '@kleeen/react/components';
import { useStyles } from '../styles/label.styles';
import { useTextFormatter } from '@kleeen/react/hooks';
import classNames from 'classnames';
import MuiTooltip from '@material-ui/core/Tooltip';

const bem = 'ks-label';

export function Label({
  attribute,
  format,
  formatType,
  highlighted,
  transformation,
  value,
}: DisplayComponentProps) {
  const color = getColorForSeverityValues(value?.displayValue, format, transformation);
  const classes = useStyles();
  const [formatter] = useTextFormatter({
    format,
    formatType,
    transformation,
  });

  const formattedValue = formatter(value?.displayValue) || '';

  return (
    <div className={classNames(bem, classes.label, { highlighted })}>
      <Crosslink attribute={attribute} value={value}>
        {value?.displayMedia && (
          <div className={classes.displayMedia}>
            <KsDisplayMedia
              className={'ks-label__display-media'}
              color={color}
              size={16}
              type={value?.displayMedia.type}
              value={value?.displayMedia.value}
            />
          </div>
        )}
        <MuiTooltip enterDelay={500} enterNextDelay={500} title={formattedValue} placement="top-start">
          <div className={classNames('ks-label__text', classes.text, { highlighted })} style={{ color }}>
            <span className={classNames(classes.text, { highlighted })}>{formattedValue} </span>
          </div>
        </MuiTooltip>
      </Crosslink>
    </div>
  );
}
