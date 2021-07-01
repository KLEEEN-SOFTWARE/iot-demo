import { CrosslinkProps } from './crosslink.model';
import { isNilOrEmpty, isTransformationARecord } from '@kleeen/common/utils';
import { KsContextMenu } from '@kleeen/react/components';
import { ReactElement } from 'react';
import { useAnchorElement, useCrosslinking, useHoverIntent } from '@kleeen/react/hooks';
import { useStyles } from './crosslink.styles';
import classNames from 'classnames';

const bem = 'ks-crosslink';

export function Crosslink({ attribute, children, value }: CrosslinkProps): ReactElement {
  const classes = useStyles();
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const { crosslink } = useCrosslinking();
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

  return (
    <>
      <div
        className={classNames(bem, classes.crosslink, { [classes.hasCrosslink]: hasCrosslinking })}
        onClick={onCellClick}
        ref={ref}
      >
        {children}
      </div>
      {Boolean(anchorEl) && (
        <KsContextMenu
          anchorEl={anchorEl}
          attr={attribute}
          autoClose
          cell={value}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
