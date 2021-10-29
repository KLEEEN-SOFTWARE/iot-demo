import { KsSubNav, KsTitle } from '@kleeen/react/components';

import { Thing, TranslateProps, Widget, WidgetScope } from '@kleeen/types';
import { useCardSelector, useHeaderActions, useHeaderFilters, useHeaderGranularity } from '../../hooks';

import { KUIConnect } from '@kleeen/core-react';
import { WidgetHeaderProps } from './widget-header.model';
import { getIconByWidgetType } from '@kleeen/common/utils';
import { getThingByName } from '@kleeen/things';
import { useStyles } from './widget-header.styles';

function InvestigationWidgetHeaderBase({ actions, formatMessage, translate, widget }: WidgetHeaderProps) {
  const classes = useStyles();
  const widgetFocus = getThingByName(widget.entityName);

  const FilterPicker = useHeaderFilters({
    widget,
  });

  const GranularityDropdown = useHeaderGranularity({
    actions,
    widget,
  });

  const ActionsDropdown = useHeaderActions({
    widget,
  });

  const CardSelector = useCardSelector({ widget });

  // TODO delete this styles when the actual components are in place
  const temporalStyles = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    padding: '0 5px',
  };

  const investigationStartSection = {
    flexNumber: 1,
    sections: [
      {
        component: (
          <div style={temporalStyles}>
            <KsTitle
              className={classes.widgetHeaderTitle}
              icon={getIconByWidgetType(widget.chartType)}
              title={getTitle({ formatMessage, translate, widget, widgetFocus })}
              upText={widget.title}
            />
            {CardSelector}
          </div>
        ),
        endSeparator: true,
      },
    ],
  };

  const investigationCenterSection = {
    flexNumber: 0,
    sections: [
      {
        component: FilterPicker,
        endSeparator: false,
      },
      {
        component: GranularityDropdown,
        endSeparator: true,
      },
    ],
  };

  const investigationEndSection = {
    flexNumber: 0,
    sections: [
      {
        component: ActionsDropdown,
      },
    ],
  };

  return (
    <div className={classes.widgetHeader}>
      <KsSubNav
        centerSection={investigationCenterSection}
        endSection={investigationEndSection}
        startSection={investigationStartSection}
      />
    </div>
  );
}

interface GetTitleProps extends TranslateProps {
  widget: Widget;
  widgetFocus: Thing;
}

function getTitle({ formatMessage, translate, widget, widgetFocus }: GetTitleProps): string {
  const translationKey =
    widget.scope === WidgetScope.Single
      ? 'app.subHeader.investigation.title.single'
      : 'app.subHeader.investigation.title.collection';
  const thing = translate(`entities.${widgetFocus.name}.${widgetFocus.name}`);

  return formatMessage({ id: translationKey }, { thing });
}

export const InvestigationWidgetHeader = KUIConnect(({ formatMessage, translate }) => ({
  formatMessage,
  translate,
}))(InvestigationWidgetHeaderBase);
