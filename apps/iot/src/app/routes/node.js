import { sheets, spreadsheetId } from '../googleapis/client.js';
import { Nodes } from '../models';

export function nodes(req, res) {
  const svgValueLabels = {
    Bad: 3,
    Ok: 2,
    Excellent: 1,
  };

  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range: 'nodes!nodes',
    },
    (err, response) => {
      const values = response?.data?.values;
      Nodes.data = values.slice(1).map(([node, status]) => ({
        node: {
          id: node,
          displayValue: node,
          displayMedia: { type: 'text', value: node },
        },
        nodeStatus: {
          displayValue: status,
          displayMedia: {
            type: 'svg',
            value: `https://raw.githubusercontent.com/KLEEEN-SOFTWARE/Kleeen-svgs/main/assets/severity-levels-svgs/severity-level-${svgValueLabels[status]}of3.svg`,
          },
        },
      }));
      res.send(Nodes);
    },
  );
}
