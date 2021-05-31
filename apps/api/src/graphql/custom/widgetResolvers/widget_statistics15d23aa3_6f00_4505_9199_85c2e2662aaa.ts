import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';

import fetch from 'node-fetch';

// View: System --- Widget: Sensor Overall Status
// Value: sensorOverallStatus
// Value aggregated by:
// Chart type: Summary Statistics
export const widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<MultiTransFormationResults | 'not implemented'> => {
  return fetch('http://localhost:3009/system/sensor-overall-status')
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return 'not implemented';
    });
};
