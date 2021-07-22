export const attributesOnCreate = [
  {
    dataType: 'string',
    formatType: 'prime',
    description: '',
    id: 120425,
    multiple: true,
    name: 'sensor',
    statisticalType: 'Data - Categorical',
    format: { examples: ['A03', 'A5279', 'B1001', 'B35', 'B40', 'B9719', 'C4351', 'C641', 'C6990', 'C8172'] },
    settings: { isEditable: true, isFilledByEU: true },
    canAddValues: true,
    canEditValues: true,
    crossLinking: [{ title: 'Sensor Details', slug: 'sensor-details' }],
    label: 'sensor',
    type: 'string',
    isDisplayValue: true,
    hasMany: false,
    transformation: 'selfSingle',
  },
  {
    dataType: 'Ppm',
    formatType: 'integer',
    deepDataType: 'integer',
    description: '',
    hasMany: false,
    id: 135534,
    isNullable: false,
    multiple: true,
    name: 'ppm',
    statisticalType: 'Data - Numeric - NTG - Discrete',
    prototypeId: 95952,
    format: {},
    settings: {},
    canAddValues: false,
    canEditValues: false,
    crossLinking: [],
    label: 'ppm',
    type: 'Ppm',
    isDisplayValue: false,
    transformation: 'selfSingle',
  },
  {
    dataType: 'Node',
    formatType: 'prime',
    deepDataType: 'string',
    description: 'Network Nodes',
    hasMany: false,
    id: 120421,
    isNullable: false,
    multiple: true,
    name: 'node',
    statisticalType: 'Data - Categorical',
    prototypeId: 95949,
    format: {
      examples: [
        '452220955-X',
        '124233324-X',
        '400991223-5',
        '616225596-4',
        '394359908-6',
        '779526478-6',
        '275677011-6',
        '672357182-7',
        '468597930-3',
        '190975058-1',
      ],
    },
    settings: { isEditable: true, isFilledByEU: true },
    canAddValues: true,
    canEditValues: true,
    crossLinking: [{ title: 'Node Details', slug: 'node-details' }],
    label: 'node',
    type: 'Node',
    isDisplayValue: false,
    transformation: 'selfSingle',
  },
  {
    dataType: 'SensorOverallStatus',
    formatType: 'severity_level',
    deepDataType: 'severity_level',
    description: '',
    hasMany: false,
    id: 120426,
    isNullable: false,
    multiple: true,
    name: 'sensorOverallStatus',
    statisticalType: 'Data - Categorical - ordered - Severity Ranking',
    prototypeId: 96079,
    format: {
      examples: ['Bad', 'Ok', 'Excellent'],
      valueLabels: [
        { label: 'Bad', value: 1 },
        { label: 'Ok', value: 2 },
        { label: 'Excellent', value: 3 },
      ],
      max: 3,
      min: 1,
      severityBad: 1,
      severityGood: 3,
      severityLevels: 3,
    },
    settings: { isEditable: true, isFilledByEU: true },
    canAddValues: false,
    canEditValues: true,
    crossLinking: [],
    label: 'sensorOverallStatus',
    type: 'SensorOverallStatus',
    isDisplayValue: false,
    transformation: 'selfSingle',
  },
  {
    dataType: 'SensorStatus',
    formatType: 'severity_level',
    deepDataType: 'severity_level',
    description: '',
    hasMany: false,
    id: 120427,
    isNullable: false,
    multiple: true,
    name: 'sensorStatus',
    statisticalType: 'Data - Categorical - ordered - Severity Ranking',
    prototypeId: 96079,
    format: {
      examples: ['Bad', 'Ok', 'Excellent'],
      valueLabels: [
        { label: 'Bad', value: 1 },
        { label: 'Ok', value: 2 },
        { label: 'Excellent', value: 3 },
      ],
      max: 3,
      min: 1,
      severityBad: 1,
      severityGood: 3,
      severityLevels: 3,
    },
    settings: { isEditable: true, isFilledByEU: true },
    canAddValues: false,
    canEditValues: true,
    crossLinking: [],
    label: 'sensorStatus',
    type: 'SensorStatus',
    isDisplayValue: false,
    transformation: 'selfSingle',
  },
  {
    dataType: 'SiteMap',
    formatType: 'prime',
    deepDataType: 'string',
    description: '',
    hasMany: false,
    id: 120424,
    isNullable: false,
    multiple: true,
    name: 'siteMap',
    statisticalType: 'Data - Categorical',
    prototypeId: 95949,
    format: { examples: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'] },
    settings: { isEditable: true, isFilledByEU: true },
    canAddValues: true,
    canEditValues: true,
    crossLinking: [{ title: 'Site Map Details', slug: 'site-map-details' }],
    label: 'siteMap',
    type: 'SiteMap',
    isDisplayValue: false,
    transformation: 'selfSingle',
  },
];