import { CrossLinkingProps, useCrossLinkingMenuOnViz } from '@kleeen/react/hooks';
import { clone, has, pathOr } from 'ramda';
import HighchartsColorAxis from 'highcharts/modules/coloraxis';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Loader } from '@kleeen/react/components';
import React from 'react';
import { generalBaseOptions } from '../generalBaseOptions';
import { getOptions } from './options';
import more from 'highcharts/highcharts-more';
more(Highcharts);
HighchartsColorAxis(Highcharts);

export const BubbleChart = ({ translate, ...props }: HighchartsReact.Props): React.ReactElement => {
  const widgetId = pathOr('', ['widgetId'], props);
  const results = pathOr([], ['context', 'data', 'results'], props);
  const format = pathOr({}, ['context', 'data', 'format'], props);
  const xAxis = clone(pathOr({}, ['xAxis'], format));
  const { isLoading } = pathOr(false, ['context'], props);
  if (!has('key', xAxis)) {
    xAxis['key'] = widgetId;
  }

  const { crossLinkingValuesForAxis, openMenuIfCrossLink } = useCrossLinkingMenuOnViz(
    props as CrossLinkingProps,
    {
      xAxis,
    },
  );

  const options: Highcharts.Options = getOptions(
    results,
    format,
    generalBaseOptions,
    props.params,
    openMenuIfCrossLink,
    crossLinkingValuesForAxis,
  );

  const containerPropsPlus = {
    ...props,
    style: { height: '100%', width: props.bigWidget ? '50%' : '100%' },
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <HighchartsReact
          containerProps={containerPropsPlus}
          highcharts={Highcharts}
          key={`bubble-chart-${props.bigWidget.toString()}`}
          options={clone(options)}
          {...props}
        />
      )}
    </>
  );
};

export default React.memo(BubbleChart);
