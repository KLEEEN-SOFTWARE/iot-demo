import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';

import fetch from 'node-fetch';

// View: Sensor Details --- Widget: Sensor Status
// Group by: timestamp
// No Aggregation
// Value: sensorStatus
// Value aggregated by: Change (in count)
// Chart type: Positive Negative Area
export const widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88 = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<any | 'not implemented'> => {
  return fetch(`${environment.backendURL}/sensor/change`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return 'not implemented';
    });
};
