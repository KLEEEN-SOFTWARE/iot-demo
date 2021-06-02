import { sheets, spreadsheetId } from '../googleapis/client.js';
import { Sensors, Summary, SensorStatusResponse } from '../models';

export function sensors(req, res) {
  const svgValueLabels = {
    Bad: 3,
    Ok: 2,
    Excellent: 1,
  };

  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'sensors!sensors',
    },
    (_, response) => {
      const values = response?.data?.values;
      Sensors.data = values.slice(1).map(([sensorValue, status]) => ({
        sensor: {
          id: sensorValue,
          displayValue: sensorValue,
          displayMedia: { type: 'text', value: sensorValue },
        },
        sensorStatus: {
          displayValue: status,
          displayMedia: {
            type: 'svg',
            value: `https://raw.githubusercontent.com/KLEEEN-SOFTWARE/Kleeen-svgs/main/assets/severity-levels-svgs/severity-level-${svgValueLabels[status]}of3.svg`,
          },
        },
      }));
      res.send(Sensors);
    },
  );
}

export function sensor(req, res) {
  const { displayValue, sensorStatus } = req?.body;

  sheets.spreadsheets.values.append(
    {
      spreadsheetId,
      range: 'sensors!sensors',
      valueInputOption: 'USER_ENTERED',
      includeValuesInResponse: true,
      resource: {
        values: [[displayValue.displayValue, sensorStatus.displayValue]],
      },
    },
    (_, response) => {
      res.send(response?.data.updates);
    },
  );
}

export function sensorById(req, res) {
  // res.send('not implemented');
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'sensors!sensors',
    },
    (_, response) => {
      const { values } = response?.data;
      res.send(values.filter(([site]) => site == req.params.id));
    },
  );
}

// displayMedia: { type: 'text', value: id }
// Doesn't work
export function sensorDetails(req, res) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'sensors!sensorDetail',
    },
    (_, response) => {
      const { values } = response?.data;
      Summary.data = values
        .filter(([site]) => site == req?.body.id)
        .map(([sensorId, sensorStatus, siteMapId, siteMapStatus]) => ({
          'displayValue::sensor': { id: sensorId, displayValue: sensorId },
          sensor: { id: sensorId, displayValue: sensorId, displayMedia: { type: 'text', value: sensorId } },
          siteMap: {
            id: siteMapId,
            displayValue: siteMapId,
            displayMedia: { type: 'text', value: siteMapId },
          },
          sensorStatus,
          siteMapStatus,
        }));

      res.send(Summary);
    },
  );
}

export function statusChange(req, res) {
  res.send(SensorStatusResponse);
}
