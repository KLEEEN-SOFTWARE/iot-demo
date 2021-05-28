import React from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';

function ProductionKpIs({ translate, ...props }) {
  return (
    <AccessControl id={roleAccessKeyTag(`navigation.productionKpIs`)}>
      <div>Hello World from your Custom Module productionKpIs</div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(ProductionKpIs);
