import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function CustomView6MxSuSiehmRp9Kh7U543Zo({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://miro.medium.com/max/3024/1*hEionJFom9HEPXUuNcV5BA.png" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(CustomView6MxSuSiehmRp9Kh7U543Zo);
