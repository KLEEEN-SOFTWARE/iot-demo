export const dataViewDisplaySectionAtomicSingleTableWidgets = [
  {
    actions: [
      {
        areYouSure: false,
        component: undefined,
        description: undefined,
        displayName: `Delete`,
        name: `_delete_`,
        type: `delete`,
      },
    ],
    addModalAttributes: [],
    attributes: [
      {
        canAddValues: false,
        editable: false,
        dataType: 'string',
        formatType: 'prime',
        deepDataType: null,
        description: '',
        hasMany: null,
        id: 120424,
        isComplexObject: null,
        isNullable: null,
        isXor: null,
        multiple: true,
        name: 'siteMap',
        statisticalType: 'Data - Categorical',
        prototypeId: 95949,
        format: {
          aggregations: null,
          dateTime: null,
          examples: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'],
          valueLabels: null,
          max: null,
          min: null,
          prefix: null,
          severityBad: null,
          severityGood: null,
          severityLevels: null,
          suffix: null,
        },
        outbounds: null,
        settings: { isEditable: true, isFilledByEU: true },
        crossLinking: [{ title: 'Site Map Details', slug: 'site-map-details' }],
        isFilterable: { in: false, out: false },
        isDisplayValue: true,
        label: 'site map',
        type: 'string',
        aggregation: 'selfSingle',
        aggregationMetadata: null,
      },
      {
        canAddValues: false,
        editable: false,
        dataType: 'SiteStatus',
        formatType: 'severity_level',
        deepDataType: 'severity_level',
        description: '',
        hasMany: false,
        id: 120428,
        isComplexObject: null,
        isNullable: false,
        isXor: null,
        multiple: true,
        name: 'siteStatus',
        statisticalType: 'Data - Categorical - ordered - Severity Ranking',
        prototypeId: 96079,
        format: {
          aggregations: null,
          dateTime: null,
          examples: ['Bad', 'Ok', 'Excellent'],
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
        },
        outbounds: null,
        settings: { isEditable: true, isFilledByEU: true },
        crossLinking: [],
        isFilterable: { in: false, out: false },
        isDisplayValue: false,
        label: 'site status',
        type: 'SiteStatus',
        aggregation: 'selfSingle',
        aggregationMetadata: null,
      },
      {
        canAddValues: false,
        editable: false,
        dataType: 'Node',
        formatType: 'prime',
        deepDataType: 'string',
        description: 'Network Nodes',
        hasMany: true,
        id: 120421,
        isComplexObject: null,
        isNullable: false,
        isXor: null,
        multiple: true,
        name: 'node',
        statisticalType: 'Data - Categorical',
        prototypeId: 95949,
        format: {
          aggregations: null,
          dateTime: null,
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
          valueLabels: null,
          max: null,
          min: null,
          prefix: null,
          severityBad: null,
          severityGood: null,
          severityLevels: null,
          suffix: null,
        },
        outbounds: null,
        settings: { isEditable: true, isFilledByEU: true },
        crossLinking: [{ title: 'Node Details', slug: 'node-details' }],
        isFilterable: { in: false, out: false },
        isDisplayValue: false,
        label: 'node',
        type: 'Node',
        aggregation: 'selfMulti',
        aggregationMetadata: null,
      },
      {
        canAddValues: false,
        editable: false,
        dataType: 'Sensor',
        formatType: 'prime',
        deepDataType: 'string',
        description: '',
        hasMany: true,
        id: 120425,
        isComplexObject: null,
        isNullable: false,
        isXor: null,
        multiple: true,
        name: 'sensor',
        statisticalType: 'Data - Categorical',
        prototypeId: 95949,
        format: {
          aggregations: null,
          dateTime: null,
          examples: ['A03', 'A5279', 'B1001', 'B35', 'B40', 'B9719', 'C4351', 'C641', 'C6990', 'C8172'],
          valueLabels: null,
          max: null,
          min: null,
          prefix: null,
          severityBad: null,
          severityGood: null,
          severityLevels: null,
          suffix: null,
        },
        outbounds: null,
        settings: { isEditable: true, isFilledByEU: true },
        crossLinking: [{ title: 'Sensor Details', slug: 'sensor-details' }],
        isFilterable: { in: false, out: false },
        isDisplayValue: false,
        label: 'sensor',
        type: 'Sensor',
        aggregation: 'selfMulti',
        aggregationMetadata: null,
      },
    ],
    chartType: `[WIDGET] FULL_TABLE`,
    component: undefined,
    description: undefined,
    id: `object_listing_aecfa22b_e76c_4402_b2ec_cf1c7a4e8781`,
    params: {
      baseModel: 'SiteMap',
      operationName: 'object_listing_aecfa22b_e76c_4402_b2ec_cf1c7a4e8781',
      taskName: 'sites',
    },
    statisticalType: undefined,
    title: undefined,
    viableSolutions: [],
    viewId: 'ks-view-nA1GN1aJqWsavD3vT7SZVK',
  },
];
