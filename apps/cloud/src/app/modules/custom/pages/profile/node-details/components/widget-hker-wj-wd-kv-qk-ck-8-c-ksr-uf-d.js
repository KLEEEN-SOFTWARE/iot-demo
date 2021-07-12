import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function WidgetHkerWjWdKvQkCk8CKsrUfD({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://global-uploads.webflow.com/5bf64c08cc98dd2c68779d68/5c9a4c015717265082d77d22_single_value_chart.png" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(WidgetHkerWjWdKvQkCk8CKsrUfD);
