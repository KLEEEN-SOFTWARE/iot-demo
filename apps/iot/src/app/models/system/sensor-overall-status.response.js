const latestSensorStatus = {
  format: {
    type: 'string',
    key: 'sensorStatus',
    aggregations: null,
    dateTime: null,
    examples: null,
    valueLabels: [
      { label: 'Critical', value: 1 },
      { label: 'Bad', value: 2 },
      { label: 'Ok', value: 3 },
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

const changeSensorStatus = {
  format: {
    type: 'string',
    key: 'sensorStatus',
    aggregations: null,
    dateTime: null,
    examples: null,
    valueLabels: [
      { label: 'Critical', value: 1 },
      { label: 'Bad', value: 2 },
      { label: 'Ok', value: 3 },
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

const oldestSensorStatus = {
  format: {
    type: 'string',
    key: 'sensorStatus',
    aggregations: null,
    dateTime: null,
    examples: null,
    valueLabels: [
      { label: 'Critical', value: 1 },
      { label: 'Bad', value: 2 },
      { label: 'Ok', value: 3 },
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

export const SensorOverallStatus = [
  { ...latestSensorStatus },
  { ...changeSensorStatus },
  { ...oldestSensorStatus },
];
