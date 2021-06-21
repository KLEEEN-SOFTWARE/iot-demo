import React from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';

function Form({ translate, ...props }) {
  return (
    <AccessControl id={roleAccessKeyTag(`navigation.form`)}>
      <div>Hello World from your Custom Module form</div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Form);
