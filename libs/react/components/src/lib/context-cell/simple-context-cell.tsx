import './context-cell.scss';

import { AggregationType, Cell, ContextMenuDataPoint } from '@kleeen/types';
import { KsClickableChipsCell } from './components';
import { ContextMenuProps } from './context-cell.model';
import { NEW_ROW_ID_PREFIX } from '@kleeen/common/utils';
import React, { ReactElement } from 'react';
import { isNil } from 'ramda';
import { getLinkStyle, isValidLinkByEntityType } from '@kleeen/frontend/utils';
import { useStyles } from './context-cell.style';
import { KsLink } from '../link';
import { useHoverIntent } from '@kleeen/react/hooks';
import { CellBody, getCellInfo, getFormat, getIfShouldDisplayClickableChipsCell } from './context-cell';
import { CellFormatResultsType } from '../GridSection/VirtualScroll/CellRenderer/CellRenderer.model';

export function KsSimpleContextCell(
  props: ContextMenuProps & { cellFormatResults: CellFormatResultsType },
): ReactElement | null {
  const classes = useStyles();

  const cell = props.cell as Cell;

  if (isNil(cell)) return null;

  const shouldDisplayClickableChipsCell = getIfShouldDisplayClickableChipsCell(
    props.attr?.aggregation as AggregationType,
    props.cell,
  );
  const format = getFormat(props);

  const { $metadata: metadata } = cell;
  const cellEntityType = metadata?.entityType;

  const { dataPoints, tooltipTitle, isNumericType, showAppliedTruncated, resultsElement } = getCellInfo({
    attr: props.attr,
    cell,
    cellFormatResults: props.cellFormatResults,
    displayColumnAttribute: props.displayColumnAttribute,
    format,
    hasDisplayMedia: props.hasDisplayMedia,
    row: props.row,
    rowDisplayValue: props.rowDisplayValue,
  });

  const { ref } = useHoverIntent<HTMLDivElement, ContextMenuDataPoint[]>({
    delayOnEnter: 800,
    onMouseEnterFn: props?.cellInteraction?.handleAnchorClick,
    onMouseEnterFnParams: dataPoints,
  });

  const isIdTemporary = props?.row?.id?.toString().includes(NEW_ROW_ID_PREFIX);
  if (shouldDisplayClickableChipsCell) {
    return (
      <KsClickableChipsCell
        attribute={props.attr}
        cellEntityType={cellEntityType}
        cellItems={props.cell as Cell[]}
        columnLabel={props.attr?.label}
        displayColumnAttribute={props.displayColumnAttribute}
        format={format}
        isIdTemporary={isIdTemporary}
        openShowMoreModal={props.openShowMoreModal}
        row={props.row}
        rowDisplayValue={props.rowDisplayValue}
        widgetId={props.widgetId}
      />
    );
  }

  const hasCrossLink =
    !isIdTemporary &&
    props?.cellInteraction?.hasCrossLink &&
    isValidLinkByEntityType(props.attr, cellEntityType);

  const { highlight, underline } = getLinkStyle({
    ...props?.cellInteraction,
    hasCrossLink,
  });

  return (
    <KsLink
      anchorEl={ref}
      highlight={highlight}
      onClick={() => {
        props?.cellInteraction?.onCellClickFunction(dataPoints, hasCrossLink);
      }}
      onContextMenu={() => {
        props?.cellInteraction?.onCellContextMenuFunction();
      }}
      underline={underline}
    >
      <CellBody
        cell={cell}
        classes={classes}
        hasDisplayMedia={props.hasDisplayMedia}
        isNumericType={isNumericType}
        resultsElement={resultsElement}
        showAppliedTruncated={showAppliedTruncated}
        tooltipTitle={tooltipTitle}
      />
    </KsLink>
  );
}
