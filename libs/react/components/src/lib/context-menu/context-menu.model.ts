import { Attribute, Cell, Row } from '@kleeen/types';

export interface ContextMenuProps {
  anchorEl: null | HTMLElement;
  attr: Attribute;
  autoClose?: boolean;
  cell: Cell;
  // TODO: @cafe optional until we find a more generic interface
  displayColumnAttribute?: Attribute;
  handleClose: () => void;
  row?: Row;
}

export enum MenuItemType {
  Section = 'section',
  Empty = 'empty',
}
