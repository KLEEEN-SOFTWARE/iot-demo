import { useEffect } from 'react';

import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';

function ProductionKpIs({ translate, ...props }) {
  useEffect(() => {
    const containerDiv = document.getElementById('region'),
      url =
        'https://public.tableau.com/views/IoTexample/Utilizationsoverview?:language=en-US&:display_count=n&:origin=viz_share_link',
      options = {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        height: '100vh',
        width: 'calc(100vw - var(--left-nav-bar-width))',
        hideTabs: true,
      };
    const vizFrame = new tableau.Viz(containerDiv, url);
    return () => vizFrame.dispose();
  });
  return (
    <AccessControl id={roleAccessKeyTag(`navigation.productionKpIs`)}>
      <div id="region"></div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(ProductionKpIs);
