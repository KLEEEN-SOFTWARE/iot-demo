import { ContextCell } from '../contextCell';
import { DataListItem } from '@kleeen/types';
import { ListItemProps } from './ListItem.model';
import { ReactElement } from 'react';
import { useStyles } from './listItem.style';

export function ListItem({ item, columns }: ListItemProps): ReactElement {
  const classes = useStyles();
  const bem = 'ks-list-item';

  const getKey = (dataItem: DataListItem, columnName: string): string =>
    `${dataItem[columnName]?.id} ${dataItem[columnName]?.displayValue}`;

  return (
    <li className={`${bem} ${classes.item}`}>
      {columns.map((column) => {
        return (
          <div key={getKey(item, column?.name)} className={`${bem}__cell ${classes.cell}`}>
            <ContextCell attr={column} cell={item[column.name]} format={column.format} />
          </div>
        );
      })}
    </li>
  );
}
