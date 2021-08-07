import * as siteMapDetails from './siteMapDetails';
import * as nodes from './nodes';
import * as configureSensorNode from './configureSensorNode';
import * as sites from './sites';
import * as form from './form';
import * as events from './events';
import * as siteMapReport from './siteMapReport';
import * as productionKpIs from './productionKpIs';
import * as sensors from './sensors';
import * as system from './system';
import * as sensorDetails from './sensorDetails';
import * as nodeDetails from './nodeDetails';

export default {
  ...Object.values({
    siteMapDetails,

    nodes,

    configureSensorNode,

    sites,

    form,

    events,

    siteMapReport,

    productionKpIs,

    sensors,

    system,

    sensorDetails,

    nodeDetails,
  }),
};
