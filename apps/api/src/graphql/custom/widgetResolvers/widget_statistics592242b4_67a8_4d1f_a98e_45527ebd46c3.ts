import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';

import fetch from 'node-fetch';

// View: Sensor Details --- Widget: Site Status
// Value: siteStatus
// Value aggregated by:
// Chart type: [WIDGET] GAUGE_SEVERITY_LEVEL
export const widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3 = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<any | 'not implemented'> => {
  const siteStatusDefaultResponse = {
    format: {
      type: 'string',
      key: 'siteStatus',
      aggregations: null,
      dateTime: null,
      examples: null,
      valueLabels: [
        { label: 'Bad', value: 1 },
        { label: 'Ok', value: 2 },
        { label: 'Excellent', value: 3 },
      ],
      max: 3,
      min: 1,
      prefix: null,
      severityBad: 1,
      severityGood: 3,
      severityLevels: 3,
      suffix: null,
      isNumericType: false,
    },
    results: '',
    transformation: 'selfSingle',
  };

  return fetch('http://localhost:3009/sensor/details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: input.filters.sensor }),
  })
    .then((res) => res.json())
    .then((res) => {
      siteStatusDefaultResponse.results = res?.data.pop().siteMapStatus;
      return [siteStatusDefaultResponse];
    })
    .catch((err) => {
      console.log(err);
    });
};
