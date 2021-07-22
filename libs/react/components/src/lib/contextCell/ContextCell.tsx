import './ContextCell.scss';

import { AggregationType, Attribute, Cell, DisplayMediaType, LabelResultsReturnProps } from '@kleeen/types';
import { ContextMenuProps, LabelResultsProps } from './ContextCell.model';
import React, { ReactElement } from 'react';
import { isEmpty, isNil, pathOr } from 'ramda';
import {
  isLinkFilterableByEntityType,
  useAnchorElement,
  useCrosslinking,
  useHoverIntent,
} from '@kleeen/react/hooks';

import { ArrowPoint } from '../arrowPoint/ArrowPoint';
import { BootstrapTooltip } from './bootstrap-tooltip';
import { ClickableChipsCell } from './ClickableChips/ClickableChipsCell';
import { KsContextMenu } from '../context-menu/context-menu';
import KsDisplayMedia from '../KsDisplayMedia/KsDisplayMedia';
import { NEW_ROW_ID_PREFIX } from '@kleeen/common/utils';
import { TextFormatter } from '../textFormatter/TextFormatter';
import classNames from 'classnames';
import { isAttributeNumericType } from '@kleeen/frontend/utils';
import { useStyles } from './ContextCell.style';

const MAX_TEXT_LENGTH = 15;

export function ContextCell(props: ContextMenuProps): ReactElement {
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const { crosslink } = useCrosslinking();
  const { ref } = useHoverIntent({
    delayOnEnter: 800,
    onMouseEnterFn: handleClick,
  });
  const classes = useStyles();

  const cell = props.cell as Cell;

  if (isNil(cell)) {
    return null;
  }

  const isMultipleValuesColumn = props.attr?.aggregation === AggregationType.SelfMulti;
  const shouldDisplayClickableChipsCell = isMultipleValuesColumn && Array.isArray(props.cell);

  const beFormat = props.format;
  const ksFormat = pathOr({}, ['attr', 'format'], props);
  const format = isNil(beFormat) || isEmpty(beFormat) ? ksFormat : beFormat;
  const { displayValue, $metadata: metadata } = cell;
  const cellEntityType = metadata?.entityType;
  const isIdTemporary = props?.row?.id?.toString().includes(NEW_ROW_ID_PREFIX);

  if (shouldDisplayClickableChipsCell) {
    return (
      <ClickableChipsCell
        attribute={props.attr}
        cellItems={props.cell as Cell[]}
        columnLabel={props.attr?.label}
        format={format}
        openShowMoreModal={props.openShowMoreModal}
        rowDisplayValue={props.rowDisplayValue}
        cellEntityType={cellEntityType}
        isIdTemporary={isIdTemporary}
      />
    );
  }

  const validCrosslinks =
    (!isIdTemporary &&
      Array.isArray(props.attr?.crossLinking) &&
      props.attr?.crossLinking?.length > 0 &&
      props.attr.crossLinking.filter((link) => isLinkFilterableByEntityType(cellEntityType, link))) ||
    [];
  const showAppliedFormat = applyFormat(displayValue, props.attr) ?? '';
  const showAppliedTruncated = shouldTruncateText(showAppliedFormat);
  const { results, resultsElement } = labelResults({
    changeDirections: props.attr?.aggregationMetadata?.changeDirections,
    format,
    formatType: props.attr?.formatType,
    results: showAppliedFormat,
    transformation: props.attr?.aggregation,
    hasDisplayMedia: props.hasDisplayMedia,
    cell,
  });
  const isNumericType = isAttributeNumericType(props.attr);
  const textClasses = {
    'truncate-text': showAppliedTruncated,
    'text-align-right': isNumericType,
    'text-align-left': !isNumericType,
  };
  const tooltipTitle = showAppliedTruncated ? results : '';

  function onCellClick() {
    if (validCrosslinks) {
      const [onlyValidLink] = validCrosslinks;
      crosslink(onlyValidLink.slug, cell, props.attr);
    }
  }

  return (
    <>
      <span
        className={`${classes.mediaValueContainer} ${validCrosslinks.length > 0 && 'clickable'}`}
        onClick={onCellClick}
        ref={ref}
      >
        {props.hasDisplayMedia && cell.displayMedia.type !== DisplayMediaType.Svg && (
          <KsDisplayMedia
            className={classes.displayMedia}
            size={21}
            type={cell.displayMedia.type}
            value={cell.displayMedia.value}
          />
        )}
        {validCrosslinks.length > 0 || props.attr?.isFilterable?.in ? (
          <BootstrapTooltip placement="top" title={tooltipTitle}>
            <span className={classNames('context-menu-button', textClasses)}>{resultsElement}</span>
          </BootstrapTooltip>
        ) : (
          <BootstrapTooltip placement="top" title={tooltipTitle}>
            <span className={classNames('context-menu-only-text', textClasses)}>{resultsElement}</span>
          </BootstrapTooltip>
        )}
      </span>
      {Boolean(anchorEl) && (
        <KsContextMenu
          anchorEl={anchorEl}
          attr={props.attr}
          autoClose
          cell={cell}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

//#region Private Members

function applyFormat(value: any, attr: Attribute): any {
  const type = attr?.deepDataType;
  if (type === 'boolean') return value ? 'True' : 'False';
  if (React.isValidElement(value)) return value; // FIXME: Please consider this comment: https://github.com/KLEEEN-SOFTWARE/kapitan/pull/1800/files?file-filters%5B%5D=.tsx#r600664986
  if (typeof value === 'object') return value?.displayValue;

  return value;
}

function shouldTruncateText(text): boolean {
  return text ? text.toString().trim().length >= MAX_TEXT_LENGTH : false;
}

function labelResults({
  changeDirections,
  format,
  formatType,
  results,
  transformation,
  hasDisplayMedia,
  cell,
}: LabelResultsProps): LabelResultsReturnProps {
  const labelReturn: LabelResultsReturnProps = {
    results,
    resultsElement: (
      <TextFormatter
        format={format}
        transformation={transformation || AggregationType.SelfSingle}
        formatType={formatType}
        textAlignment="flex-end"
        hasDisplayMedia={hasDisplayMedia}
        cell={cell}
      >
        {results}
      </TextFormatter>
    ),
  };

  if (transformation === AggregationType.ChangePercent || transformation === AggregationType.ChangeCount) {
    labelReturn.results = Math.abs(results as number);
    labelReturn.resultsElement = (
      <ArrowPoint
        changeDirections={changeDirections}
        result={results as number}
        className="context-cell-arrow"
        showPercentage={transformation === AggregationType.ChangePercent}
      />
    );
  }

  return labelReturn;
}

//#endregion
