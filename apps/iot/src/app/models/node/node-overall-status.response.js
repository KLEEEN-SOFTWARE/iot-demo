const latestNodeStatus = {
  format: {
    type: 'string',
    key: 'sensorStatus',
    aggregations: null,
    dateTime: null,
    examples: null,
    valueLabels: [
      { label: 'Excellent', value: 3 },
      { label: 'Ok', value: 2 },
      { label: 'Bad', value: 1 },
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
  results: 'Ok',
  transformation: 'latest',
  crossLinking: [],
};

const changeNodeStatus = {
  format: {
    type: 'string',
    key: 'sensorStatus',
    aggregations: null,
    dateTime: null,
    examples: null,
    valueLabels: [
      { label: 'Excellent', value: 3 },
      { label: 'Ok', value: 2 },
      { label: 'Bad', value: 1 },
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
  results: -30,
  transformation: 'changePercent',
  crossLinking: [],
};

const oldestNodeStatus = {
  format: {
    type: 'string',
    key: 'sensorStatus',
    aggregations: null,
    dateTime: null,
    examples: null,
    valueLabels: [
      { label: 'Excellent', value: 3 },
      { label: 'Ok', value: 2 },
      { label: 'Bad', value: 1 },
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
  results: 'Ok',
  transformation: 'oldest',
  crossLinking: [],
};

export const NodeOverallStatus = [{ ...latestNodeStatus }, { ...changeNodeStatus }, { ...oldestNodeStatus }];
