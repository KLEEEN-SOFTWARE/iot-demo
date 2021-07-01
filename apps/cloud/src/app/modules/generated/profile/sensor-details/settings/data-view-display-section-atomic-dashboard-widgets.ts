export const dataViewDisplaySectionAtomicDashboardWidgets = [
  {
    actions: [],
    addModalAttributes: [],
    attributes: [
      {
        crossLinking: [],
        format: {
          min: 1,
          max: 3,
          prefix: null,
          suffix: null,
          aggregations: null,
          examples: ['Bad', 'Ok', 'Excellent'],
          severityBad: 1,
          severityGood: 3,
          severityLevels: 3,
        },
        formatType: 'severity_level',
        isFilterable: { in: false, out: false },
        label: 'Site Status',
        name: 'siteStatus',
        aggregation: 'selfSingle',
        id: 120428,
        statisticalType: 'Data - Categorical - ordered - Severity Ranking',
        elements: { displayComponent: 'Label' },
      },
    ],
    chartType: `[WIDGET] GAUGE_SEVERITY_LEVEL`,
    component: undefined,
    description: undefined,
    id: `592242b4-67a8-4d1f-a98e-45527ebd46c3`,
    params: {
      operationName: 'widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3',
      taskName: 'Sensor Details',
      value: {
        label: 'Site Status',
        name: 'siteStatus',
        transformations: [{ isPrimary: true, transformation: 'selfSingle' }],
        format: {
          min: 1,
          max: 3,
          prefix: null,
          suffix: null,
          aggregations: null,
          examples: ['Bad', 'Ok', 'Excellent'],
          severityBad: 1,
          severityGood: 3,
          severityLevels: 3,
        },
        formatType: 'severity_level',
      },
    },
    statisticalType: undefined,
    title: `Site Status`,
    viableSolutions: [],
    viewId: 'ks-view-5ehycKcM5CKMLjBnhE2GcB',
  },
  {
    actions: [],
    addModalAttributes: [],
    attributes: [
      {
        crossLinking: [],
        format: {
          min: 1,
          max: 3,
          prefix: null,
          suffix: null,
          aggregations: null,
          examples: ['Bad', 'Ok', 'Excellent'],
          severityBad: 1,
          severityGood: 3,
          severityLevels: 3,
        },
        formatType: 'severity_level',
        isFilterable: { in: false, out: false },
        label: 'Sensor Status',
        name: 'sensorStatus',
        aggregation: 'selfSingle',
        id: 120427,
        statisticalType: 'Data - Categorical - ordered - Severity Ranking',
        elements: { displayComponent: 'Label' },
      },
    ],
    chartType: `[WIDGET] GAUGE_SEVERITY_LEVEL`,
    component: undefined,
    description: undefined,
    id: `86ae65f8-0d94-499f-86e2-60c17bc48f2c`,
    params: {
      operationName: 'widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c',
      taskName: 'Sensor Details',
      value: {
        label: 'Sensor Status',
        name: 'sensorStatus',
        transformations: [{ isPrimary: true, transformation: 'selfSingle' }],
        format: {
          min: 1,
          max: 3,
          prefix: null,
          suffix: null,
          aggregations: null,
          examples: ['Bad', 'Ok', 'Excellent'],
          severityBad: 1,
          severityGood: 3,
          severityLevels: 3,
        },
        formatType: 'severity_level',
      },
    },
    statisticalType: undefined,
    title: `Status`,
    viableSolutions: [],
    viewId: 'ks-view-5ehycKcM5CKMLjBnhE2GcB',
  },
  {
    actions: [],
    addModalAttributes: [],
    attributes: [
      {
        crossLinking: [],
        format: null,
        formatType: 'timestamp',
        isFilterable: { in: false, out: false },
        label: 'Timestamp',
        name: 'timestamp',
        aggregation: 'selfMulti',
        id: 96096,
        statisticalType: 'Data - Numeric - Temporal',
      },
      {
        crossLinking: [],
        format: {
          min: 1,
          max: 3,
          prefix: null,
          suffix: null,
          aggregations: null,
          examples: ['Bad', 'Ok', 'Excellent'],
          severityBad: 1,
          severityGood: 3,
          severityLevels: 3,
        },
        formatType: 'severity_level',
        isFilterable: { in: false, out: false },
        label: 'Change of Sensor Status',
        name: 'sensorStatus',
        aggregation: 'changeCount',
        id: 120427,
        statisticalType: 'Data - Categorical - ordered - Severity Ranking',
      },
    ],
    chartType: `[WIDGET] POSITIVE_NEGATIVE_AREA`,
    component: undefined,
    description: undefined,
    id: `f2e76b4e-b7ab-4a57-bb13-6e7c3c783e88`,
    params: {
      cardinality: 'SINGLE',
      groupBy: { name: 'timestamp', transformation: 'selfMulti', formatType: 'timestamp' },
      operationName: 'widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88',
      taskName: 'Sensor Details',
      value: { name: 'sensorStatus', transformation: 'changeCount', formatType: 'severity_level' },
    },
    statisticalType: undefined,
    title: `Sensor Status`,
    viableSolutions: ['[WIDGET] SIMPLE_LIST_RANKED'],
    viewId: 'ks-view-5ehycKcM5CKMLjBnhE2GcB',
  },
  {
    actions: [
      {
        areYouSure: true,
        component: undefined,
        description: undefined,
        displayName: `Reboot`,
        name: `reboot`,
        type: `custom`,
      },
    ],
    addModalAttributes: [],
    attributes: [],
    chartType: `[WIDGET] CUSTOM_ACTION`,
    component: undefined,
    description: undefined,
    id: `3b73adbb-d755-414b-b017-1d964567aa2d`,
    params: {
      baseModel: 'Sensor',
      displayName: 'Reboot',
      operationName: 'custom_action_3b73adbb_d755_414b_b017_1d964567aa2d',
    },
    statisticalType: undefined,
    title: `Reboot Sensor`,
    viableSolutions: [],
    viewId: 'ks-view-5ehycKcM5CKMLjBnhE2GcB',
  },
];
