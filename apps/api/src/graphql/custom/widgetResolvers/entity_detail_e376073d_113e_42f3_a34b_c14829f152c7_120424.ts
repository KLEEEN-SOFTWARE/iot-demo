import { GetListingDataResults, DataListingArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';

import fetch from 'node-fetch';

// View: Sensor Details
// Value: siteMap
// Value aggregated by: No Aggregation
// Chart type: Slot
export const entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  return fetch(`${environment.backendURL}/sensor/details`, {
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
