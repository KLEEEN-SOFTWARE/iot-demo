import { Attribute, Cell, FormatProps, Translate } from '@kleeen/types';

import { ListingModalSettings } from '../../ListingModal/ListingModal';

export interface ClickableChipsCellProps {
  cellItems: Cell[];
  format: FormatProps;
  attribute: Attribute;
  columnLabel: string;
  rowDisplayValue?: string;
  openShowMoreModal: (listSettings: ListingModalSettings) => void;
  translate: Translate;
  cellEntityType?: string;
  isIdTemporary?: boolean;
}

interface ValidCrosslink {
  slug: string;
  title: string;
}

export interface PreviewChipsProps {
  items: Cell[];
  attribute: Attribute;
  format: FormatProps;
  translate: Translate;
  validCrosslinks?: ValidCrosslink[];
}
