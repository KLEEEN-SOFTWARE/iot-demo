import './ClickableChipsCell.scss';

import { Attribute, Cell, FormatProps } from '@kleeen/types';
import { ClickableChipsCellProps, PreviewChipsProps } from './clickable-chips-cell.model';
import { ContextMenu, isLinkFilterableByEntityType } from '../../contextMenu/ContextMenu';
import { useAnchorElement, useCrosslinking } from '@kleeen/react/hooks';

import { BootstrapTooltip } from '../bootstrap-tooltip';
import { KUIConnect } from '@kleeen/core-react';
import { KsChip } from '../../chip';
import React from 'react';
import TextFormatter from '../../textFormatter/TextFormatter';
import { isNil } from 'ramda';

const generateFormattedElements = ({
  label,
  attribute,
  format,
}: {
  format: FormatProps;
  attribute: Attribute;
  label: string | number;
}) => {
  return (
    <span>
      <TextFormatter
        format={format}
        transformation={attribute?.aggregation || 'selfSingle'}
        formatType={attribute?.formatType}
      >
        {label}
      </TextFormatter>
    </span>
  );
};

const PreviewChips = ({ items, attribute, format, translate, validCrosslinks }: PreviewChipsProps) => {
  const { crosslink } = useCrosslinking();
  const hasCrossLink = validCrosslinks.length >= 1 && !attribute?.isFilterable?.in;

  return (
    <div className="chips-container">
      {items.length ? (
        items.map((label, i) => {
          const { anchorEl, handleClick, handleClose } = useAnchorElement();

          function onCrosslinkClick(item) {
            if (validCrosslinks.length === 1 && !attribute?.isFilterable?.in) {
              const [onlyValidLink] = validCrosslinks;
              crosslink(onlyValidLink.slug, item, attribute);
            } else {
              handleClick(item);
            }
          }

          if (isNil(label)) return;
          const FormattedElements = generateFormattedElements({
            label: label.displayValue as string,
            attribute,
            format,
          });
          return (
            label && (
              <>
                <BootstrapTooltip key={i} placement="top" title={FormattedElements}>
                  <KsChip
                    label={FormattedElements}
                    className={hasCrossLink && 'clickable'}
                    onClick={validCrosslinks.length > 1 ? onCrosslinkClick : () => onCrosslinkClick(items[i])}
                  />
                </BootstrapTooltip>

                {Boolean(anchorEl) && (
                  <ContextMenu attr={attribute} cell={label} handleClose={handleClose} anchorEl={anchorEl} />
                )}
              </>
            )
          );
        })
      ) : (
        <span className="no-chips-label">{`${translate('app.no')} ${attribute?.name}`}</span>
      )}
    </div>
  );
};

const ClickableChipsCellBase = ({
  cellItems,
  format,
  attribute,
  columnLabel,
  rowDisplayValue,
  openShowMoreModal,
  translate,
  cellEntityType,
  isIdTemporary,
}: ClickableChipsCellProps) => {
  const validCrosslinks =
    (!isIdTemporary &&
      Array.isArray(attribute?.crossLinking) &&
      attribute?.crossLinking?.length > 0 &&
      attribute.crossLinking.filter((link) => isLinkFilterableByEntityType(cellEntityType, link))) ||
    [];
  const cellItemsArray = cellItems as Cell[];
  const [firstPreviewItem, secondPreviewItem] = cellItemsArray;
  const onClick = () => {
    openShowMoreModal({
      format,
      attribute,
      data: cellItemsArray,
      columnLabel,
      rowDisplayValue,
      isOpen: true,
    });
  };

  const chips = [];
  if (firstPreviewItem) {
    chips.push(firstPreviewItem);
  }
  if (secondPreviewItem) {
    chips.push(secondPreviewItem);
  }

  return (
    <div className="clickable-chips">
      <PreviewChips
        items={chips}
        attribute={attribute}
        format={format}
        translate={translate}
        validCrosslinks={validCrosslinks}
      />
      <div className="show-more-label" onClick={onClick}>
        <div className="numbers-label-container">{cellItemsArray.length}</div>
        <span>{translate('app.total')}</span>
      </div>
    </div>
  );
};

export const ClickableChipsCell = React.memo(
  KUIConnect(({ translate }) => ({ translate }))(ClickableChipsCellBase),
);
