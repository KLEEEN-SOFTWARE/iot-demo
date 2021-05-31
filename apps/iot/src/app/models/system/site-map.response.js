export const SiteMap = {
  format: {
    xAxis: {
      categories: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'],
      type: 'string',
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
    yAxis: {
      categories: ['', 'Bad', 'Ok', 'Excellent'],
      type: 'number',
      aggregations: null,
      dateTime: null,
      examples: null,
      valueLabels: [
        { label: 'x', value: 0 },
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
  results: [
    [0, 1],
    [1, 3],
    [2, 1],
    [3, 2],
    [4, 1],
  ],
  crossLinking: [
    [
      {
        id: 'c6d54150-cc9d-46ac-a808-7638dc738dcf',
        $metadata: { entityType: '' },
      },
      {
        id: 'efc6f0e8-ebfb-4aec-bec3-3ed35ccf84f9',
        $metadata: { entityType: '' },
      },
      {
        id: 'cbe9abc3-c215-4a28-93f4-52d656fde16d',
        $metadata: { entityType: '' },
      },
      {
        id: '96031780-cccc-4ef5-a046-6af2231e9d25',
        $metadata: { entityType: '' },
      },
      {
        id: 'eb7395b1-4373-45c0-b08b-b9a34af6d967',
        $metadata: { entityType: '' },
      },
    ],
    [
      {
        id: 'db187120-b2b4-4ee4-8218-25e9ebfbd9b1',
        $metadata: { entityType: '' },
      },
      {
        id: '4c8e615a-953d-4b97-b7be-455e93268d7d',
        $metadata: { entityType: '' },
      },
      {
        id: '0229d9f2-9cb2-4339-a039-99d2a81d3963',
        $metadata: { entityType: '' },
      },
    ],
  ],
};
