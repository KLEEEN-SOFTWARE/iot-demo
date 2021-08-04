import { AddDialog } from '@kleeen/react/atomic-elements';

export const workflowAction = [
  {
    addModalAttributes: [
      {
        id: 120425,
        name: 'sensor',
        label: 'Sensor',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'sensor',
        params: {
          baseModel: 'sensor',
          value: {
            formatType: 'prime',
            transformation: 'selfSingle',
            format: {
              examples: ['A03', 'A5279', 'B1001', 'B35', 'B40', 'B9719', 'C4351', 'C641', 'C6990', 'C8172'],
            },
          },
        },
      },
      {
        id: 135534,
        name: 'ppm',
        label: 'Ppm',
        hasMany: false,
        elements: {
          inputComponent: 'CompositeComponent',
          rules: [{ component: 'RadioGroup', maxChoices: 4 }, { component: 'SelectTextAutocomplete' }],
          displayComponent: 'Label',
        },
        rawEntityName: 'ppm',
        params: {
          baseModel: 'ppm',
          value: { formatType: 'integer', transformation: 'selfSingle', format: {} },
        },
      },
      {
        id: 120421,
        name: 'node',
        label: 'Node',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'node',
        params: {
          baseModel: 'node',
          value: {
            formatType: 'prime',
            transformation: 'selfSingle',
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
          },
        },
      },
      {
        id: 120426,
        name: 'sensorOverallStatus',
        label: 'Sensor Overall Status',
        hasMany: false,
        elements: {
          inputComponent: 'CompositeComponent',
          rules: [{ component: 'RadioGroup', maxChoices: 4 }, { component: 'SelectTextAutocomplete' }],
          displayComponent: 'Label',
        },
        rawEntityName: 'sensorOverallStatus',
        params: {
          baseModel: 'sensorOverallStatus',
          value: {
            formatType: 'severity_level',
            transformation: 'selfSingle',
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
          },
        },
      },
      {
        id: 120427,
        name: 'sensorStatus',
        label: 'Sensor Status',
        hasMany: false,
        elements: {
          inputComponent: 'CompositeComponent',
          rules: [{ component: 'RadioGroup', maxChoices: 4 }, { component: 'SelectTextAutocomplete' }],
          displayComponent: 'Label',
        },
        rawEntityName: 'sensorStatus',
        params: {
          baseModel: 'sensorStatus',
          value: {
            formatType: 'severity_level',
            transformation: 'selfSingle',
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
          },
        },
      },
      {
        id: 120424,
        name: 'siteMap',
        label: 'Site Map',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'siteMap',
        params: {
          baseModel: 'siteMap',
          value: {
            formatType: 'prime',
            transformation: 'selfSingle',
            format: { examples: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'] },
          },
        },
      },
    ],
    areYouSure: false,
    component: AddDialog,
    description: undefined,
    displayName: `Add`,
    name: `add`,
    type: `add`,
  },
  {
    areYouSure: false,
    component: undefined,
    description: undefined,
    displayName: `Delete`,
    name: `_delete_`,
    type: `delete`,
  },
];
