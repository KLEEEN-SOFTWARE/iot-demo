import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';

import fetch from 'node-fetch';

// View: System --- Widget: Node Overall Status
// Value: nodeOverallStatus
// Value aggregated by:
// Chart type: Summary Statistics
export const widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1 = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<MultiTransFormationResults | 'not implemented'> => {
  return fetch(`${environment.backendURL}/system/node-overall-status`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return 'not implemented';
    });
};
