import { KUIConnect } from '@kleeen/core-react';
import { KsCustomDialog } from '@kleeen/react/components';
import React from 'react';

function ActionC7RM8AppPfREsDkdczyzcS({ translate, ...props }) {
  return (
    <KsCustomDialog {...props} translate={translate}>
      <div>
        <p>
          Open the code for <strong>adjust</strong>'s Custom Action at
        </p>
        <cite style={{ color: 'var(--secondary-color)', overflowWrap: 'break-word' }}>
          apps/cloud/src/app/modules/custom/sensors/components/action-c-7-r-m-8-app-pf-r-es-dkdczyzc-s.js
        </cite>
        <p>Update the content and save the file to see your changes.</p>
      </div>
    </KsCustomDialog>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(ActionC7RM8AppPfREsDkdczyzcS);
