import {
  NodeOverallStatus,
  SensorOverallStatus,
  SystemHealth,
  UtilizationSaturationErrors,
  SiteMap,
  NodeStatus,
  SensorStatus,
} from '../models/system/index.js';

import { sheets, spreadsheetId } from '../googleapis/client.js';

export function sensorOverallStatus(_, res) {
  const [latestSensorStatus, changeSensorStatus, oldestSensorStatus] = SensorOverallStatus;

  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'sensor-overall-status!sensorOverallStatus',
    },
    (err, response) => {
      const { values } = response?.data;
      const [lastElement] = values[values.length - 1];
      const lastElements = values.slice(Math.max(values.length - 2, 0)).map(([labelValue]) => {
        const { value } = changeSensorStatus.format.valueLabels.find(({ label }) => labelValue == label);
        return value;
      });

      latestSensorStatus.results = lastElement;
      changeSensorStatus.results =
        lastElements.reverse().reduce((a, b) => a - b) / lastElements[lastElements.length - 1];
      oldestSensorStatus.results = values.shift().shift();
      res.send([latestSensorStatus, changeSensorStatus, oldestSensorStatus]);
    },
  );
}

export function nodeOverallStatus(_, res) {
  const [latestNodeStatus, changeNodeStatus, oldestNodeStatus] = NodeOverallStatus;

  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'node-overall-status!nodeOverallStatus',
    },
    (err, response) => {
      const { values } = response?.data;
      const [lastElement] = values[values.length - 1];
      const lastElements = values.slice(Math.max(values.length - 2, 0)).map(([labelValue]) => {
        const { value } = changeNodeStatus.format.valueLabels.find(({ label }) => labelValue == label);
        return value;
      });

      latestNodeStatus.results = lastElement;
      changeNodeStatus.results =
        lastElements.reverse().reduce((a, b) => a - b) / lastElements[lastElements.length - 1];
      oldestNodeStatus.results = values.shift().shift();
      res.send([latestNodeStatus, changeNodeStatus, oldestNodeStatus]);
    },
  );
}

export function systemHealth(_, res) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'system-health!systemHealth',
    },
    (err, response) => {
      SystemHealth.results = response?.data.values.pop().pop();
      res.send([SystemHealth]);
    },
  );
}

export function utilizationSaturationErrors(_, res) {
  res.send(UtilizationSaturationErrors);
}

export function siteMap(_, res) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'site-map-status!siteStatus',
    },
    (err, response) => {
      const { values } = response?.data;
      values.shift();
      res.send(SiteMap);
    },
  );
}

export function nodeStatus(_, res) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'node-overall-status!nodeOverallStatus',
    },
    (err, response) => {
      res.send(NodeStatus);
    },
  );
}

export function sensorStatus(_, res) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'sensor-overall-status!sensorOverallStatus',
    },
    (err, response) => {
      res.send(SensorStatus);
    },
  );
}
