import express from 'express';
import * as system from './system-dashboard.js';
import * as siteMap from './site-map.js';
import * as sensor from './sensor.js';
import * as node from './node.js';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Google Sheets API v4 integration.');
});

router.get('/error', () => {
  throw new Error("Oops! It isn't you, I promise!");
});

router.get('/system/utilization-saturation-errors', system.utilizationSaturationErrors);
router.get('/system/system-health', system.systemHealth);
router.get('/system/site-map', system.siteMap);
router.get('/system/sensor-status', system.sensorStatus);
router.get('/system/sensor-overall-status', system.sensorOverallStatus);
router.get('/system/node-status', system.nodeStatus);
router.get('/system/node-overall-status', system.nodeOverallStatus);

router.get('/sensor', sensor.sensors);
router.get('/sensor/change', sensor.statusChange);
router.get('/sensor/:id', sensor.sensorById);
router.post('/sensor', sensor.sensor);
router.post('/sensor/details', sensor.sensorDetails);

router.get('/node', node.nodes);

router.post('/site-map', siteMap.siteMapById);

export default router;
