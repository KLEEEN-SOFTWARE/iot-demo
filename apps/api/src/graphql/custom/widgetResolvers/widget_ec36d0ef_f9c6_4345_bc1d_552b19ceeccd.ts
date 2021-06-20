import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';

import fetch from 'node-fetch';

// View: System --- Widget: Sensor Status
// Group by: timestamp
// No Aggregation
// Value: sensor
// Value aggregated by: Total Count
// Chart type: [WIDGET] AREA_GRADIENT
export const widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  return fetch(`${environment.backendURL}/system/sensor-status`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return 'not implemented';
    });
};
