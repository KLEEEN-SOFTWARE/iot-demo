import { IsOnboardingEnable, OnBoardingTask } from './modules/generated/components';
import React, { useState } from 'react';
import { useKleeenActions, useKleeenContext, useSyncUserPreferences } from '@kleeen/react/hooks';

import { Authenticator } from './modules/custom/components';
import Highcharts from 'highcharts';
import { HookableContextMenu } from '@kleeen/react/atomic-elements';
import { KUIConnect } from '@kleeen/core-react';
import Layout from './layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { fontFamily } from './settings/font-family';
import getModules from './modules';

const IsAuthEnabled = true;

async function syncUser(setCurrentUser, currentUser, currentAuthenticatedUser) {
  try {
    if (currentAuthenticatedUser?.username !== currentUser?.username) {
      setCurrentUser(currentAuthenticatedUser);
    }
  } catch (err) {
    console.error(err);
  }
}

const modulesToLoad = [
  {
    folder: require.context('./modules/generated', true, /\.jsx$/),
    modulePath: './modules/generated',
  },
  {
    folder: require.context('./modules/custom', true, /\.jsx$/),
    modulePath: './modules/custom',
    priority: 1,
  },
];

function PagesManager() {
  const [modules, setModules] = useState(null);
  const [{ showOnboardingPage }] = useSyncUserPreferences();
  const { currentUser } = useKleeenContext('endUser');
  const { setCurrentUser } = useKleeenActions('endUser');

  initializeHighcharts();

  return (
    <Router>
      <Authenticator
        afterLoginSuccess={async ({ currentAuthenticatedUser }) => {
          const loadedModules = await getModules(modulesToLoad);
          syncUser(setCurrentUser, currentUser, currentAuthenticatedUser);
          setModules(loadedModules);
        }}
        hideDefault={true}
        isEnabled={IsAuthEnabled}
      >
        <RenderLayout modules={modules} showOnboardingPage={IsOnboardingEnable && showOnboardingPage} />
      </Authenticator>
    </Router>
  );
}

function RenderLayout({ showOnboardingPage, modules }) {
  if (showOnboardingPage) {
    return <OnBoardingTask />;
  }
  return (
    <>
      <HookableContextMenu />
      <Layout modules={modules} />
    </>
  );
}

function initializeHighcharts() {
  // Add font to highcharts
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily,
      },
    },
  });

  // Workaround for https://github.com/highcharts/highcharts/issues/13710
  (function (H) {
    H.seriesTypes.pie.prototype.drawEmpty = function () {
      let centerX,
        centerY,
        start = this.startAngleRad,
        end = this.endAngleRad,
        options = this.options;
      // Draw auxiliary graph if there're no visible points.
      if (this.total === 0) {
        centerX = this.center[0];
        centerY = this.center[1];
        if (!this.graph) {
          this.graph = this.chart.renderer
            .arc(centerX, centerY, this.center[1] / 2, 0, start, end)
            .addClass('highcharts-empty-series')
            .add(this.group);
        }
        this.graph.attr({
          d: H.SVGRenderer.prototype.symbols.arc(centerX, centerY, this.center[2] / 2, 0, {
            start,
            end,
            innerR: this.center[3] / 2,
          }),
        });
        if (!this.chart.styledMode) {
          this.graph.attr({
            'stroke-width': options.borderWidth,
            fill: options.fillColor || 'none',
            stroke: options.color || '#cccccc',
          });
        }
      } else if (this.graph) {
        // Destroy the graph object.
        this.graph = this.graph.destroy();
      }
    };
  })(Highcharts);
}

export default React.memo(
  KUIConnect(({ locale, setLocale }) => ({
    locale,
    setLocale,
  }))(PagesManager),
);
