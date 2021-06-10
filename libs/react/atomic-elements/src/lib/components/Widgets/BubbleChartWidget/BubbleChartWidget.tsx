import React, { ReactElement, useEffect } from 'react';

import BubbleChart from '../../BubbleChart/BubbleChart';
import { BubbleChartWidgetProps } from './BubbleChartWidget.model';
import { Loader } from '@kleeen/react/components';
import { makeStyles } from '@material-ui/core';
import { useMasonry, useWidgetContext } from '@kleeen/react/hooks';

const useStyles = makeStyles({
  widgetContent: {
    height: '100%',
  },
});

export function BubbleChartWidget({
  attributes,
  params,
  taskName,
  widgetId,
}: BubbleChartWidgetProps): ReactElement {
  const widgetData = useWidgetContext({ taskName, widgetId, params });
  const classes = useStyles();
  const { updateLayout } = useMasonry();

  useEffect(() => {
    const cardHeight = 548;
    updateLayout(cardHeight);
  }, [widgetData]);

  if (!widgetData) {
    return <Loader />;
  }

  return (
    <div className={classes.widgetContent}>
      <BubbleChart
        context={widgetData}
        base={params.baseModel}
        params={params}
        widgetId={widgetId}
        attributes={attributes}
      />
    </div>
  );
}
