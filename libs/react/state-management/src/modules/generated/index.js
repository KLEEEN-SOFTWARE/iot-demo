import * as siteMapDetails from './siteMapDetails';
import * as nodes from './nodes';
import * as configureSensorNode from './configureSensorNode';
import * as sensors from './sensors';
import * as system from './system';
import * as sensorDetails from './sensorDetails';
import * as nodeDetails from './nodeDetails';

export default {
  ...Object.values({
    siteMapDetails,

    nodes,

    configureSensorNode,

    sensors,

    system,

    sensorDetails,

    nodeDetails,
  }),
};
