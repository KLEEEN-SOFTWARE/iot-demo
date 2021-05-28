import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function WidgetMZRjK3GjtEuCmaeVabcb2C({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://screenshots.imgix.net/recharts/recharts/radial-bar-chart/1.6.2/5ced11d870f126001cdb7dff/4fd21f64-4981-4ab5-86e1-1ff15a0840c9.png" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(WidgetMZRjK3GjtEuCmaeVabcb2C);
