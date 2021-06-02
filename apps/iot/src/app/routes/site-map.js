import { sheets, spreadsheetId } from '../googleapis/client.js';

export function siteMapById(req, res) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'site-map!all',
    },
    (_, response) => {
      const { values } = response?.data;
      res.send(values.filter(([site]) => site == req.body.site));
    },
  );
}
