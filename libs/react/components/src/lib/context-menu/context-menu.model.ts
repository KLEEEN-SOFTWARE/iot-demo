import { Attribute, Cell } from '@kleeen/types';

export interface ContextMenuProps {
  attr: Attribute;
  cell: Cell;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

export enum MenuItemType {
  Section = 'section',
  Empty = 'empty',
}
