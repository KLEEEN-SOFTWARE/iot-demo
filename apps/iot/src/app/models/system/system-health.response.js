export const SystemHealth = {
  format: {
    type: 'string',
    key: 'systemHealth',
    aggregations: null,
    dateTime: null,
    examples: null,
    valueLabels: [
      { label: 'Bad', value: 3 },
      { label: 'Ok', value: 2 },
      { label: 'Excellent', value: 1 },
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
  crossLinking: [],
};
