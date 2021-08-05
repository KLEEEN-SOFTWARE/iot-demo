export const attributesOnCreate = [
  {
    dataType: 'string',
    formatType: 'prime',
    description: '',
    id: 120424,
    multiple: true,
    name: 'siteMap',
    statisticalType: 'Data - Categorical',
    format: { examples: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'] },
    settings: { isEditable: true, isFilledByEU: true },
    canAddValues: true,
    canEditValues: true,
    crossLinking: [{ title: 'Site Map Details', slug: 'site-map-details' }],
    label: 'Site Map',
    type: 'string',
    isDisplayValue: true,
    hasMany: false,
    transformation: 'selfSingle',
  },
  {
    dataType: 'SystemHealth',
    formatType: 'severity_level',
    deepDataType: 'severity_level',
    description: '',
    hasMany: false,
    id: 120429,
    isNullable: false,
    multiple: true,
    name: 'systemHealth',
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
    label: 'System Health',
    type: 'SystemHealth',
    isDisplayValue: false,
    transformation: 'selfSingle',
  },
  {
    dataType: 'SiteStatus',
    formatType: 'severity_level',
    deepDataType: 'severity_level',
    description: '',
    hasMany: false,
    id: 120428,
    isNullable: false,
    multiple: true,
    name: 'siteStatus',
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
    label: 'Site Status',
    type: 'SiteStatus',
    isDisplayValue: false,
    transformation: 'selfSingle',
  },
];
