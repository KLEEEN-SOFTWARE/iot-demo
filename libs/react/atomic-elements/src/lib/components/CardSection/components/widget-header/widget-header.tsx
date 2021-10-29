import { KsSubNav, KsTitle } from '@kleeen/react/components';

import { KUIConnect } from '@kleeen/core-react';
import { WidgetHeaderProps } from './widget-header.model';
import { useHeaderGranularity } from '../../hooks';
import { useStyles } from './widget-header.styles';

function WidgetHeaderBase({ actions, icon, title, widget }: WidgetHeaderProps): JSX.Element {
  const classes = useStyles();

  const GranularityDropdown = useHeaderGranularity({
    actions,
    widget,
  });

  return (
    <div className={classes.widgetHeader}>
      <KsSubNav
        endSection={{
          flexNumber: 0,
          sections: [
            {
              component: GranularityDropdown,
            },
          ],
        }}
        startSection={{
          sections: [
            {
              component: (
                <KsTitle className={classes.widgetHeaderTitle} icon={icon as string} title={title} />
              ),
              endSeparator: true,
            },
          ],
        }}
      />
    </div>
  );
}

export const WidgetHeader = KUIConnect(({ formatMessage, translate }) => ({ formatMessage, translate }))(
  WidgetHeaderBase,
);
