import React from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';

function Events({ translate, ...props }) {
  return (
    <AccessControl id={roleAccessKeyTag(`navigation.events`)}>
      <div>Hello World from your Custom Module events</div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Events);
