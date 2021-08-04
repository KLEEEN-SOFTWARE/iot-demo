import { getRowDisplayValue, overwriteFormat } from '@kleeen/common/utils';

import ActionsForm from '../../ActionsForm';
import ConfirmForm from '../../ConfirmForm';
import { ContextCell } from '../../../contextCell';
import { DataViewRowProps } from './CellRenderer.model';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import { TableCell } from '../../components/index';
import { useStyles } from './CellRenderer.styles';
import { validateOrderColum } from './utils';

const DragHandle = SortableHandle(({ children }) => <div>{children}</div>);

function DataViewRow({
  actions,
  attr,
  deleteContainer,
  deleteProcess,
  displayColumnAttribute,
  hasActions,
  idx,
  isDeletable,
  localization,
  openShowMoreModal,
  props,
  row = {},
  rowData,
  toggleDelete,
  triggerCustomAction,
  draggable,
  orderColumnName,
}: DataViewRowProps): JSX.Element {
  function _draggableColumn(children) {
    return <DragHandle>{children}</DragHandle>;
  }
  const isFirstColumn = idx === 0;
  const classes = useStyles();
  if (deleteContainer && deleteContainer.includes(rowData.id) && isFirstColumn) {
    const confirmMethod = () => {
      deleteProcess(rowData.id);
    };
    const rejectMethod = () => {
      toggleDelete(rowData.id);
    };

    return (
      <TableCell colSpan={props.attributes.length + 1}>
        <div className="confirm-delete-container">
          <ConfirmForm
            localization={localization}
            confirmMethod={confirmMethod}
            rejectMethod={rejectMethod}
          />
          <div className="confirm-delete-label">{localization.confirmDeleteLabel}</div>
        </div>
      </TableCell>
    );
  }
  if (deleteContainer && deleteContainer.includes(rowData.id)) {
    return null;
  }

  const rowKey = `${row.id}-${`${attr.isDisplayValue ? `displayValue::${attr.name}` : attr.name}`}`;
  const rowDisplayValue = getRowDisplayValue(rowData, displayColumnAttribute?.name);

  if (isFirstColumn) {
    const hasBorderRight = hasActions ? 'no-border-right' : null;
    const handleCustomAction = (action) => triggerCustomAction(action, rowData.id);

    const handleDelete = () => toggleDelete(rowData.id);
    const handleEdit = (): void => {
      return;
    };

    return (
      <React.Fragment key={`${row.id}-fragment`}>
        {draggable &&
          _draggableColumn(
            <div className="draggable-container">
              <div className="draggable-column data-view">
                <DragIndicatorIcon />
              </div>
              <div className="draggable-column-number">{validateOrderColum(rowData, orderColumnName)}</div>
            </div>,
          )}
        <TableCell
          key={rowKey}
          className={`${hasBorderRight} ${draggable ? 'firstColumn' : ''} ${
            row.displayMedia && classes.tableCellContainer
          }`}
        >
          <ContextCell
            attr={attr}
            cell={row}
            displayColumnAttribute={displayColumnAttribute}
            format={overwriteFormat(props?.entity?.format[attr.name], attr.format)}
            hasDisplayMedia={row.displayMedia ? true : false}
            openShowMoreModal={openShowMoreModal}
            row={rowData}
            rowDisplayValue={rowDisplayValue}
          />
        </TableCell>
        {hasActions && (
          <TableCell key={`${rowKey}-actions`} className="actions-form-cell">
            <ActionsForm
              actions={actions}
              handleCustomAction={handleCustomAction}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isDeletable={isDeletable}
              localization={localization}
              row={rowData}
            />
          </TableCell>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <TableCell key={rowKey} className={`${row.displayMedia && classes.tableCellContainer}`}>
        <ContextCell
          attr={attr}
          cell={row}
          displayColumnAttribute={displayColumnAttribute}
          format={overwriteFormat(props?.entity?.format[attr.name], attr.format)}
          row={rowData}
          rowDisplayValue={rowDisplayValue}
          openShowMoreModal={openShowMoreModal}
          hasDisplayMedia={row.displayMedia ? true : false}
        />
      </TableCell>
    );
  }
}

export default DataViewRow;
