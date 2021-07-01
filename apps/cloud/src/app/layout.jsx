import { NavigationTask } from './modules/generated/components';
import { NavPosition } from '@kleeen/types';
import { useKleeenRouting } from '@kleeen/react/hooks';
import classnames from 'classnames';
import React from 'react';
import settings from './settings/app.json';

const Layout = ({ modules }) => {
  const KsRouter = useKleeenRouting(modules, [], settings.defaultHomePage);
  const isNavTop = settings.layout.position === NavPosition.top;
  const bem = 'ks-layout';
  const modifier = isNavTop ? 'top' : 'side container-nav-left';

  const Content = () => (
    <main
      className={classnames(`${bem}__content`, 'layout', {
        [NavPosition.top]: isNavTop,
        [NavPosition.left]: !isNavTop,
      })}
    >
      <KsRouter />
    </main>
  );

  return (
    <div className={classnames(`${bem}--${modifier}`, 'content-layout')}>
      <section className={classnames(`${bem}__navigation`)}>
        <NavigationTask />
      </section>
      <Content />
    </div>
  );
};

export default React.memo(Layout);
