import { Attribute, Cell } from '@kleeen/types';

export interface ContextMenuProps {
  anchorEl: null | HTMLElement;
  attr: Attribute;
  autoClose?: boolean;
  cell: Cell;
  handleClose: () => void;
}

export enum MenuItemType {
  Section = 'section',
  Empty = 'empty',
}
