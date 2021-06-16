import { isNilOrEmpty, isTransformationARecord } from '@kleeen/common/utils';

import { CrosslinkProps } from './crosslink.model';
import { KsContextMenu } from '@kleeen/react/components';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useAnchorElement } from '@kleeen/react/hooks';
import { useStyles } from './crosslink.styles';

export function Crosslink({ attribute, children, value }: CrosslinkProps): ReactElement {
  const classes = useStyles();
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const hasCrosslinking =
    Array.isArray(attribute?.crossLinking) &&
    !isNilOrEmpty(attribute.crossLinking) &&
    isTransformationARecord(attribute.transformation);

  return (
    <>
      <div
        className={classNames('ks-crosslink', classes.crosslink, { [classes.hasCrosslink]: hasCrosslinking })}
        onClick={handleClick}
      >
        {children}
      </div>
      {Boolean(anchorEl) && (
        <KsContextMenu attr={attribute} cell={value} handleClose={handleClose} anchorEl={anchorEl} />
      )}
    </>
  );
}
