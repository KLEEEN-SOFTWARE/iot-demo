export const Nodes = {
  format: {
    node: {
      aggregations: null,
      dateTime: null,
      examples: [],
      valueLabels: null,
      max: null,
      min: null,
      prefix: null,
      severityBad: null,
      severityGood: null,
      severityLevels: null,
      suffix: null,
      isNumericType: false,
    },
    nodeStatus: {
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
  },
  data: [],
  pagination: null,
};
