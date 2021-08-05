import { ReactElement, useState } from 'react';
import { isNilOrEmpty, isTransformationARecord } from '@kleeen/common/utils';
import {
  useAnchorElement,
  useCrosslinking,
  useHoverIntent,
  useLocalStorage,
  validateCrosslinkingInteraction,
} from '@kleeen/react/hooks';

import { CrosslinkProps } from './crosslink.model';
import { KsContextMenu } from '@kleeen/react/components';
import classNames from 'classnames';
import { useStyles } from './crosslink.styles';

const bem = 'ks-crosslink';

export function Crosslink({ attribute, children, value }: CrosslinkProps): ReactElement {
  const classes = useStyles();
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const { crosslink } = useCrosslinking();
  const [openModal, setOpenModal] = useState(false);
  const { ref } = useHoverIntent<HTMLDivElement>({
    delayOnEnter: 800,
    onMouseEnterFn: handleClick,
  });
  const hasCrosslinking =
    Array.isArray(attribute?.crossLinking) &&
    !isNilOrEmpty(attribute.crossLinking) &&
    isTransformationARecord(attribute.transformation);

  function onCellClick() {
    if (hasCrosslinking) {
      const [onlyValidLink] = attribute?.crossLinking;
      crosslink(onlyValidLink.slug, value, attribute);
    }
  }

  const { onClickFunction, onContextMenuFunction, validation } = validateCrosslinkingInteraction(
    anchorEl,
    onCellClick,
    openModal,
    setOpenModal,
  );
  const handleCloseHelper = () => {
    setOpenModal(false);
    handleClose();
  };

  return (
    <>
      <div
        className={classNames(bem, classes.crosslink, { [classes.hasCrosslink]: hasCrosslinking })}
        onClick={onClickFunction}
        onContextMenu={onContextMenuFunction}
        ref={ref}
      >
        {children}
      </div>
      {validation && (
        <KsContextMenu
          anchorEl={anchorEl}
          attr={attribute}
          autoClose
          cell={value}
          handleClose={handleCloseHelper}
        />
      )}
    </>
  );
}
