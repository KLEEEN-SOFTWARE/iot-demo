import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';

import fetch from 'node-fetch';

// View: System --- Widget: Site Map
// Group by: siteMap
// No Aggregation
// Value: siteStatus
// Value aggregated by: No Aggregation
// Chart type: [WIDGET] COLUMN_BAR
export const widget_ec00ac75_6320_4963_abcd_4c1aea91727b = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  return fetch('http://localhost:3009/system/site-map')
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return 'not implemented';
    });
};
