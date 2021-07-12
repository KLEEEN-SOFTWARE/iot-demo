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
    id: 'entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424',
    params: {
      baseModel: 'Node',
      operationName: 'entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424',
      value: {
        format: { examples: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'] },
        formatType: 'prime',
        name: 'siteMap',
        transformation: 'selfSingle',
      },
      taskName: 'nodeDetails',
    },
    readOnly: false,
    statisticalType: 'Data - Categorical',
  },
];
