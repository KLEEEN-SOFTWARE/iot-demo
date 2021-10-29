import { FilterQuery, Widget } from '@kleeen/types';
import { isNilOrEmpty, transformFiltersToDeprecatedVersion } from '@kleeen/common/utils';
import {
  removeInvestigateSuffix,
  useAddInvestigateWidgetProperties,
  useKleeenActions,
} from '@kleeen/react/hooks';
import { useEffect, useState } from 'react';

import { FilterQueryBuilderSection } from '@kleeen/react/atomic-elements';
import { LibraryWidget } from '@kleeen/widgets';
import { getThingByName } from '@kleeen/things';
import { getWidgetWithFilters } from '@kleeen/investigations';

interface UseHeaderFiltersProps {
  widget: Widget;
}

export function useHeaderFilters({ widget }: UseHeaderFiltersProps) {
  const { addWidget } = useKleeenActions('ksInvestigation');
  const [filterQuery, setFilterQuery] = useState<FilterQuery | Record<string, never>>({});
  const [filterableAttributes, setFilterableAttributes] = useState([]);
  const addInvestigationWidgetProperties = useAddInvestigateWidgetProperties();

  useEffect(() => {
    const attributes = getThingByName(widget?.entityName)?.attributes;

    if (isNilOrEmpty(attributes)) return;

    const availableFilters = attributes.map((attribute) => {
      const decoratedAttribute = getThingByName(attribute.name);
      return {
        label: decoratedAttribute.displayName,
        key: decoratedAttribute.name,
        type: decoratedAttribute.statisticalType,
        suggestions: [],
      };
    });

    setFilterableAttributes(availableFilters);
  }, [widget?.entityName]);

  function handleFilter(newQueryFilter: FilterQuery) {
    const filters = transformFiltersToDeprecatedVersion({
      filters: newQueryFilter,
    });
    const resolvedWidgetWithFilters = getWidgetWithFilters({
      filters,
      widget: widget as LibraryWidget,
    });

    // FIXME: @marimba this should be removed once the KSE3-4630 is solved
    const widgetIdWithoutSuffix = removeInvestigateSuffix(resolvedWidgetWithFilters.id);

    const widgetWithInvestigationProperties = addInvestigationWidgetProperties({
      ...resolvedWidgetWithFilters,
      id: widgetIdWithoutSuffix,
    });

    addWidget(widgetWithInvestigationProperties);
  }

  return (
    <FilterQueryBuilderSection
      filterQuery={filterQuery}
      onFilter={handleFilter}
      properties={filterableAttributes}
    />
  );
}
