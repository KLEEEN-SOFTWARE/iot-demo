import { KUIConnect } from '@kleeen/core-react';
import { KsCustomDialog } from '@kleeen/react/components';
import React from 'react';

function ActionC7RM8AppPfREsDkdczyzcS({ translate, ...props }) {
  return (
    <KsCustomDialog {...props} translate={translate}>
      Hello World from your Custom Action
    </KsCustomDialog>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(ActionC7RM8AppPfREsDkdczyzcS);
