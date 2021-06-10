export const dataViewControlSectionViewOptions = [
  {
    actions: [],
    entityName: '',
    modalAttributes: [],
    name: 'Overview',
    type: 'fullView',
    viewId: 'ks-view-6MxSUSiehmRP9kh7u543zo',
    viewOrder: 0,
  },
  {
    actions: [
      {
        areYouSure: true,
        component: undefined,
        description: undefined,
        displayName: `reboot`,
        name: `reboot`,
        type: `custom`,
      },
    ],
    entityName: 'Sensor',
    modalAttributes: [
      { name: 'sensor' },
      { name: 'sensorOverallStatus' },
      { name: 'sensorStatus' },
      { name: 'siteMap' },
    ],
    name: 'Sensors',
    type: 'listing',
    viewId: 'ks-view-4QW2xvV3Vsfs1RDwBfmZ6Q',
    viewOrder: 1,
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
    entityName: 'Node',
    modalAttributes: [
      { name: 'node' },
      { name: 'nodeOverallStatus' },
      { name: 'nodeStatus' },
      { name: 'siteMap' },
    ],
    name: 'Nodes',
    type: 'listing',
    viewId: 'ks-view-ozFw5fbSFqWz82tFnVgnAm',
    viewOrder: 2,
  },
];
