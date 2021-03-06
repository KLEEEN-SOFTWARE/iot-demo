import CustomView_6MxSUSiehmRP9kh7u543zo from '../../../../custom/profile/site-map-details/components/custom-view-6-mx-su-siehm-rp-9-kh-7-u-543-zo';

export const widgets = [
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
      {
        areYouSure: true,
        component: undefined,
        description: undefined,
        displayName: `Reboot`,
        name: `reboot`,
        type: `custom`,
      },
    ],
    attributes: [
      {
        editable: false,
        dataType: 'string',
        formatType: 'prime',
        description: '',
        id: 120425,
        multiple: true,
        name: 'sensor',
        statisticalType: 'Data - Categorical',
        format: {
          examples: ['A03', 'A5279', 'B1001', 'B35', 'B40', 'B9719', 'C4351', 'C641', 'C6990', 'C8172'],
        },
        settings: { isEditable: true, isFilledByEU: true },
        canAddValues: true,
        canEditValues: true,
        crossLinking: [{ title: 'Sensor Details', slug: 'sensor-details' }],
        label: 'sensor',
        type: 'string',
        isDisplayValue: true,
        hasMany: false,
        transformation: 'selfSingle',
        aggregation: 'selfSingle',
      },
      {
        editable: false,
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
        label: 'sensor status',
        type: 'SensorStatus',
        isDisplayValue: false,
        transformation: 'selfSingle',
        aggregation: 'selfSingle',
      },
    ],
    chartType: `[WIDGET] FULL_TABLE`,
    component: undefined,
    entityId: 120425,
    id: `1f20697a-3aa6-4ce4-a14a-8d50d486ce36`,
    params: {
      baseModel: 'Sensor',
      operationName: 'object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36',
      taskName: 'Site Map Details',
    },
    statisticalType: undefined,
    title: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-4QW2xvV3Vsfs1RDwBfmZ6Q',
    viewOrder: 1,
  },
  {
    actions: [],
    attributes: [],
    chartType: `[WIDGET] CUSTOM`,
    component: CustomView_6MxSUSiehmRP9kh7u543zo,
    entityId: undefined,
    id: `2ed9ceee-e3dd-4f0d-805b-87645661b690`,
    params: {},
    statisticalType: undefined,
    title: `Overview`,
    type: 'custom',
    viableSolutions: [],
    viewId: 'ks-view-6MxSUSiehmRP9kh7u543zo',
  },
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
      {
        areYouSure: true,
        component: undefined,
        description: undefined,
        displayName: `Reboot`,
        name: `reboot`,
        type: `custom`,
      },
    ],
    attributes: [
      {
        editable: false,
        dataType: 'string',
        formatType: 'prime',
        description: 'Network Nodes',
        id: 120421,
        multiple: true,
        name: 'node',
        statisticalType: 'Data - Categorical',
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
        type: 'string',
        isDisplayValue: true,
        hasMany: false,
        transformation: 'selfSingle',
        aggregation: 'selfSingle',
      },
      {
        editable: false,
        dataType: 'NodeStatus',
        formatType: 'severity_level',
        deepDataType: 'severity_level',
        description: '',
        hasMany: false,
        id: 120423,
        isNullable: false,
        multiple: true,
        name: 'nodeStatus',
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
        label: 'node status',
        type: 'NodeStatus',
        isDisplayValue: false,
        transformation: 'selfSingle',
        aggregation: 'selfSingle',
      },
    ],
    chartType: `[WIDGET] FULL_TABLE`,
    component: undefined,
    entityId: 120421,
    id: `b6dcf2f6-6cc1-418f-b027-34d3e60bb8c4`,
    params: {
      baseModel: 'Node',
      operationName: 'object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4',
      taskName: 'Site Map Details',
    },
    statisticalType: undefined,
    title: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-ozFw5fbSFqWz82tFnVgnAm',
    viewOrder: 3,
  },
];
