import { ApiTimestamp } from '../../custom/entityResolvers/api96096';
import { ApiEvent } from '../../custom/entityResolvers/api120420';
import { ApiNode } from '../../custom/entityResolvers/api120421';
import { ApiNodeOverallStatus } from '../../custom/entityResolvers/api120422';
import { ApiNodeStatus } from '../../custom/entityResolvers/api120423';
import { ApiSiteMap } from '../../custom/entityResolvers/api120424';
import { ApiSensor } from '../../custom/entityResolvers/api120425';
import { ApiSensorOverallStatus } from '../../custom/entityResolvers/api120426';
import { ApiSensorStatus } from '../../custom/entityResolvers/api120427';
import { ApiSiteStatus } from '../../custom/entityResolvers/api120428';
import { ApiSystemHealth } from '../../custom/entityResolvers/api120429';
import { ApiPpm } from '../../custom/entityResolvers/api135534';
import { ApiEventLength } from '../../custom/entityResolvers/api135535';
import { DataSource } from 'apollo-datasource';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { FormatCheckApi } from '../../custom/formatCheckResolver/formatCheckApi';
import { FormatCheckFakeApi } from './formatCheckFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = (): Record<string, DataSource> => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  formatCheckFakeApi: new FormatCheckFakeApi(),
  formatCheckApi: new FormatCheckApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api96096: new ApiTimestamp(),
  api120420: new ApiEvent(),
  api120421: new ApiNode(),
  api120422: new ApiNodeOverallStatus(),
  api120423: new ApiNodeStatus(),
  api120424: new ApiSiteMap(),
  api120425: new ApiSensor(),
  api120426: new ApiSensorOverallStatus(),
  api120427: new ApiSensorStatus(),
  api120428: new ApiSiteStatus(),
  api120429: new ApiSystemHealth(),
  api135534: new ApiPpm(),
  api135535: new ApiEventLength(),
});
