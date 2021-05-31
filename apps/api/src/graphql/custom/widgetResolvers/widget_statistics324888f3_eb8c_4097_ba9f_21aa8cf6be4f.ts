import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';

import fetch from 'node-fetch';

// View: System --- Widget: System Health
// Value: systemHealth
// Value aggregated by:
// Chart type: [WIDGET] GAUGE_SEVERITY_LEVEL
export const widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<MultiTransFormationResults | 'not implemented'> => {
  return fetch('http://localhost:3009/system/system-health')
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return 'not implemented';
    });
};
