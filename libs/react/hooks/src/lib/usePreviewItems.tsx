import { AggregationType, Attribute, Cell, Row } from '@kleeen/types';
import { LibraryWidget, WidgetScope, entityHasWidgets, getWidgetsByEntity } from '@kleeen/widgets';
import { ReactNode, useEffect, useState } from 'react';
import { getRowDisplayValue, isNilOrEmpty } from '@kleeen/common/utils';

import { isSingleCardinalityTransformation } from '@kleeen/frontend/utils';

export interface PreviewItem {
  entity?: string;
  filteredBy?: string | number | boolean;
  scope: WidgetScope;
  value?: ReactNode;
  widgets: LibraryWidget[];
}

export function usePreviewItems({
  attr,
  cell,
  displayColumnAttribute,
  row,
}: {
  attr: Attribute;
  cell: Cell & { formattedValue: ReactNode | number };
  displayColumnAttribute: Attribute;
  row: Row;
}): PreviewItem[] {
  const [previewItems, setPreviewItems] = useState<PreviewItem[]>([]);

  useEffect(() => {
    // TODO @cafe the check for displayColumnAttribute also guarantees that Viz don't show the options
    if (isNilOrEmpty(attr) || isNilOrEmpty(row) || isNilOrEmpty(displayColumnAttribute)) {
      setPreviewItems([]);
    } else {
      const rowDisplayValue = getRowDisplayValue(row, displayColumnAttribute?.name);
      const items: PreviewItem[] = [];
      const showSinglePreview =
        entityHasWidgets({
          entityId: attr.id,
          scope: WidgetScope.Single,
          // TODO @cafe why are transformation and aggregation different?
        }) && isSingleCardinalityTransformation(attr.aggregation as AggregationType);
      const showCollectionPreview =
        entityHasWidgets({
          entityId: attr.id,
          scope: WidgetScope.Collection,
        }) && !isSingleCardinalityTransformation(attr.aggregation as AggregationType);

      if (showSinglePreview) {
        const widgets = getWidgetsByEntity({
          entityId: attr.id,
          filters: {
            [attr.name]: cell.id,
          },
          scope: WidgetScope.Single,
        });
        items.push({
          scope: WidgetScope.Single,
          value: cell.formattedValue,
          widgets,
        });
      }

      if (showCollectionPreview) {
        const widgets = getWidgetsByEntity({
          entityId: attr.id,
          filters: {
            [displayColumnAttribute.name]: row.id,
          },
          scope: WidgetScope.Collection,
        });
        items.push({
          entity: attr.name,
          filteredBy: rowDisplayValue,
          scope: WidgetScope.Collection,
          widgets,
        });
      }
      setPreviewItems(items);
    }
  }, [attr?.name, attr?.aggregation, cell.id, displayColumnAttribute?.name, row?.id]);

  return previewItems;
}
