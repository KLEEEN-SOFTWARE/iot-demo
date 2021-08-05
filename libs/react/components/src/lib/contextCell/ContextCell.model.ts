import { Attribute, Cell, ChangeDirectionsProps, FormatProps, Row } from '@kleeen/types';
export interface RowProps {
  id?: string;
}
export interface ContextMenuProps {
  attr: Attribute;
  cell: Cell | Cell[];
  displayColumnAttribute?: Attribute;
  format?: FormatProps;
  rowDisplayValue?: boolean | number | string;
  row?: Row;
  openShowMoreModal?: (ListingModalSettings) => void;
  hasDisplayMedia?: boolean;
}

export interface LabelResultsProps extends ChangeDirectionsProps {
  results: string | number;
  transformation: string;
  format?: FormatProps;
  formatType?: string;
  hasDisplayMedia?: boolean;
  cell?: Cell | Cell[];
}
