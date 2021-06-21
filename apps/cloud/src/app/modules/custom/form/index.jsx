import React from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';

function Form({ translate, ...props }) {
  return (
    <AccessControl id={roleAccessKeyTag(`navigation.form`)}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdr6PVgqHS163kDcVhP21WsXGEa0RWA1QEa4N1WWOoVqGE2SQ/viewform?embedded=true"
        width="740"
        height="1010"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Form);
