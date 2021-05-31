import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';

import fetch from 'node-fetch';

// View: System --- Widget: Node Status
// Group by: timestamp
// No Aggregation
// Value: node
// Value aggregated by: Total Count
// Chart type: [WIDGET] AREA_GRADIENT
export const widget_5d346104_9524_4ba4_a30a_bb9c509fc439 = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  return fetch('http://localhost:3009/system/node-status')
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return 'not implemented';
    });
};
