import { Attribute, StatisticalDataType } from '@kleeen/types';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckboxCellInput from '../../components/CheckboxCellInput';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import DropdownCellInput from '../../components/DropdownCellInput';
import { EditDataViewProps } from './CellRenderer.model';
import FreeFormCellInput from '../../components/FreeFormCellInput';
import { IconButton } from '@material-ui/core';
import { KsContextCell } from '../../../context-cell';
import { MultipleModalInput } from '../../components/MultipleModalInput';
import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import { TableCell } from '../../components';
import classnames from 'classnames';
import { getRowDisplayValue } from '@kleeen/common/utils';
import { validateOrderColum } from './utils';

const DragHandle = SortableHandle(({ children }) => <div>{children}</div>);

interface GetInputComponentProps {
  attr: Attribute;
  cellIsBeingEdited: boolean;
  hasMany: boolean;
  isInputEditable: boolean;
}

const getInputComponent = ({ attr, cellIsBeingEdited, hasMany, isInputEditable }: GetInputComponentProps) => {
  if (attr.statisticalType === StatisticalDataType.Binary && isInputEditable) return CheckboxCellInput;

  if (!cellIsBeingEdited) return KsContextCell;
  if (hasMany) return MultipleModalInput;

  if (attr.canAddValues) return FreeFormCellInput;
  if (!attr.canAddValues) return DropdownCellInput;
};

function EditDataView({
  amendCellUpdate,
  attr,
  autocomplete,
  deleteProcess,
  displayColumnAttribute,
  draggable,
  editingCell,
  idx,
  isDeletable,
  onAutocompleteRequest,
  openShowMoreModal,
  orderColumnName,
  row,
  rowData,
  setEditingCell,
}: EditDataViewProps): JSX.Element {
  const rowDisplayValue = getRowDisplayValue(rowData, displayColumnAttribute?.name);
  const isInputEditable = Boolean(attr?.settings?.isEditable);
  const hasMany = Boolean(attr?.hasMany);
  const cellIsBeingEdited = editingCell.rowId === rowData.id && editingCell.attributeName === attr.name;
  const showDeleteIcon = isDeletable && !cellIsBeingEdited && idx === 0;
  const showEditIcon =
    isInputEditable && !cellIsBeingEdited && attr.statisticalType !== StatisticalDataType.Binary;
  const isPencilIcon = attr.canAddValues || hasMany;
  const rowKey = `${rowData.id}-${`${attr.isDisplayValue ? `displayValue::${attr.name}` : attr.name}`}`;

  const CellInputComponent = getInputComponent({ attr, cellIsBeingEdited, hasMany, isInputEditable });

  function _draggableColumn(children) {
    return <DragHandle>{children}</DragHandle>;
  }

  return (
    <React.Fragment key={rowKey}>
      <TableCell
        className={classnames(
          'editable-cell',
          { 'sortable-cell': draggable },
          draggable ? 'firstColumn' : '',
        )}
      >
        {draggable &&
          _draggableColumn(
            <div className="draggable-container">
              <div className="draggable-column data-view">
                <DragIndicatorIcon />
              </div>
              <div className="draggable-column-number">{validateOrderColum(rowData, orderColumnName)}</div>
            </div>,
          )}
        <CellInputComponent
          amendCellUpdate={amendCellUpdate}
          attr={attr}
          autocomplete={autocomplete}
          cell={row}
          displayColumnAttribute={displayColumnAttribute}
          editingCell={editingCell}
          format={attr.format}
          openShowMoreModal={openShowMoreModal}
          row={rowData}
          rowDisplayValue={rowDisplayValue}
          setEditingCell={setEditingCell}
        />
        <div className={'actions-container'}>
          {showDeleteIcon && (
            <IconButton
              onClick={() => {
                deleteProcess(rowData.id);
              }}
              aria-label="delete"
              size="small"
            >
              <DeleteOutlineIcon className="icon" style={{ fontSize: 'var(--tx-L)' }} />
            </IconButton>
          )}
          {showEditIcon && (
            <IconButton
              onClick={() => {
                onAutocompleteRequest(attr.name);
                setEditingCell({
                  attributeName: attr.name,
                  rowId: rowData.id,
                  temporaryValue: String(row?.displayValue),
                });
              }}
              aria-label="edit"
              size="small"
            >
              {isPencilIcon ? (
                <CreateIcon className="icon" style={{ fontSize: 'var(--tx-L)' }} />
              ) : (
                <ArrowDropDownIcon className="icon" />
              )}
            </IconButton>
          )}
        </div>
      </TableCell>
    </React.Fragment>
  );
}

export default EditDataView;
