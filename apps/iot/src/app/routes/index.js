import express from 'express';
import * as system from './system-dashboard.js';
import * as siteMap from './site-map.js';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Google Sheets API v4 integration.');
});

router.get('/error', () => {
  throw new Error("Oops! It isn't you, I promise!");
});

router.get('/system/sensor-overall-status', system.sensorOverallStatus);
router.get('/system/node-overall-status', system.nodeOverallStatus);
router.get('/system/system-health', system.systemHealth);
router.get('/system/utilization-saturation-errors', system.utilizationSaturationErrors);
router.get('/system/site-map', system.siteMap);
router.get('/system/node-status', system.nodeStatus);
router.get('/system/sensor-status', system.sensorStatus);
router.post('/site-map', siteMap.siteMapById);

export default router;
