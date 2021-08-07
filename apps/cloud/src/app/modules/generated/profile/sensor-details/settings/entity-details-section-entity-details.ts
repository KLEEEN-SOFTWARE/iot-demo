export const entityDetailsSectionEntityDetails = [
  {
    attributes: [
      {
        id: 120424,
        statisticalType: 'Data - Categorical',
        canAddValues: true,
        canEditValues: true,
        format: { examples: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'] },
        formatType: 'prime',
        hasMany: false,
        label: 'Site Map',
        name: 'siteMap',
        rawEntityName: 'SiteMap',
        crossLinking: [{ title: 'Site Map Details', slug: 'site-map-details' }],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
      },
    ],
    chartType: '[WIDGET] SLOT',
    elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
    fullWidth: false,
    id: 'entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424',
    params: {
      baseModel: 'Sensor',
      operationName: 'entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424',
      value: {
        format: { examples: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'] },
        formatType: 'prime',
        name: 'siteMap',
        transformation: 'selfSingle',
      },
      taskName: 'sensorDetails',
    },
    readOnly: false,
    statisticalType: 'Data - Categorical',
  },
];
