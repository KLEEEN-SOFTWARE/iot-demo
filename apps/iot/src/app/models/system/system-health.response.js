export const _SystemHealth = {
  format: {
    type: 'string',
    key: 'nodeOverallStatus',
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
  results: 'Excellent',
  transformation: 'latest',
  crossLinking: [],
};

export const SystemHealth = {
  format: {
    type: 'string',
    key: 'systemHealth',
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
  results: 'Excellent',
  transformation: 'selfSingle',
  crossLinking: {
    id: '89ea102b-7fba-45d5-89f1-7997014bd3a3',
    $metadata: { entityType: '' },
  },
};
