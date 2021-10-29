import { ReactElement, useState } from 'react';
import {
  useAnchorElement,
  useCrosslinking,
  useCrosslinkingInteraction,
  useHoverIntent,
  validateCrosslinkingInteraction,
} from '@kleeen/react/hooks';

import { CrosslinkProps } from './crosslink.model';
import { KsContextMenu } from '@kleeen/react/components';
import { KsLink } from '../link';
import { getLinkStyle } from '@kleeen/frontend/utils';
import { useAttributeInteractions } from '../context-cell/hooks';

export function KsCrosslink({
  children,
  dataPoints,
  params,
  transformationKeyToUse,
  widgetId,
}: CrosslinkProps): ReactElement {
  const [dataPoint] = dataPoints;
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const { crosslink } = useCrosslinking();
  const { ref } = useHoverIntent<HTMLDivElement>({
    delayOnEnter: 800,
    onMouseEnterFn: handleClick,
  });
  const { hasCrossLinking, hasFilters, hasPreview } = useAttributeInteractions({
    attribute: dataPoint?.attribute,
    cellEntityType: dataPoint?.value?.$metadata?.entityType,
    isIdTemporary: false,
    transformationKeyToUse,
  });
  const [openModal, setOpenModal] = useState(false);

  function handleCloseHelper() {
    setOpenModal(false);
    handleClose();
  }

  function onCellClick() {
    const { attribute, value } = dataPoint;

    if (hasCrossLinking) {
      const [firstValidCrossLink] = attribute?.crossLinking;
      crosslink(firstValidCrossLink.slug, value, attribute);
    }
  }

  const { onClickFunction, onContextMenuFunction, validation } = validateCrosslinkingInteraction(
    onCellClick,
    openModal,
    setOpenModal,
    anchorEl,
  );

  const { crosslinkingInteraction } = useCrosslinkingInteraction();
  const { highlight, underline } = getLinkStyle({
    hasPreview,
    hasCrossLink: hasCrossLinking,
    hasFilter: hasFilters,
    linkInteraction: crosslinkingInteraction,
  });

  return (
    <>
      <KsLink
        anchorEl={ref}
        highlight={highlight}
        onClick={onClickFunction}
        onContextMenu={onContextMenuFunction}
        underline={underline}
      >
        {children}
      </KsLink>
      {validation && (
        <KsContextMenu
          anchorEl={anchorEl}
          autoClose
          dataPoints={dataPoints}
          onClose={handleCloseHelper}
          widgetContextParams={params}
          widgetId={widgetId}
        />
      )}
    </>
  );
}
