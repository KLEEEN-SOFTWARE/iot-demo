import { GetListingDataResults, DataListingArgs, AuthContext } from '../../../types';

import fetch from 'node-fetch';

// View: Sensor Details
// Value: sensor
// Value aggregated by: No Aggregation
// Chart type: [WIDGET] SUMMARY_TITLE
export const summary_title_e376073d_113e_42f3_a34b_c14829f152c7 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  return fetch('http://localhost:3009/sensor/details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: input.filters.sensor }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
