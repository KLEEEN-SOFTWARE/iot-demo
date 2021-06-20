import { MultiTransFormationResults, MultiTransFormationArgs, AuthContext } from '../../../types';
import { environment } from '../../../environments/environment';

import fetch from 'node-fetch';
import { isNilOrEmpty } from '@kleeen/common/utils';

// View: Sensor Details --- Widget: Status
// Value: sensorStatus
// Value aggregated by:
// Chart type: [WIDGET] GAUGE_SEVERITY_LEVEL
export const widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c = async (
  input: MultiTransFormationArgs,
  context: AuthContext,
): Promise<any | 'not implemented'> => {
  const siteStatusResponse = {
    format: {
      type: 'string',
      key: 'sensorStatus',
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

  return fetch(`${environment.backendURL}/sensor/details`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: input.filters.sensor }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (isNilOrEmpty(res?.data)) return [];
      siteStatusResponse.results = res?.data.pop().siteMapStatus;
      return [siteStatusResponse];
    })
    .catch((err) => {
      console.log(err);
    });
};
