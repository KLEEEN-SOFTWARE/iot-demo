import { DataPointWithFormattedValue, Filters, Maybe, WidgetScope, WidgetStateParams } from '@kleeen/types';
import { getContextDataPoints, getFiltersForDataPoints } from '@kleeen/investigations';

import { InvestigationItemWithDataPointData } from './investigation-item.model';
import { entityHasWidgets } from '@kleeen/widgets';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { isSingleCardinalityDataPoint } from '@kleeen/frontend/utils';

export interface GetInvestigationItemsProps {
  dataPoint: DataPointWithFormattedValue;
  dataPoints: DataPointWithFormattedValue[];
  paramsBasedOnRoute: Filters;
  widgetContextParams: WidgetStateParams;
}

export function getInvestigationItemValues({
  dataPoint,
  dataPoints,
  paramsBasedOnRoute,
  widgetContextParams,
}: GetInvestigationItemsProps): Maybe<InvestigationItemWithDataPointData> {
  const { attribute, formattedValue, value } = dataPoint;
  const isSingleCardinality = isSingleCardinalityDataPoint(dataPoint);
  const scope = isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection;
  const entityId = attribute.id;

  if (scope === WidgetScope.Single && isNilOrEmpty(value?.id)) {
    return;
  }

  const showInvestigations = entityHasWidgets({
    entityId: attribute.id,
    scope,
  });

  if (!showInvestigations) {
    return;
  }

  const contextDataPoints = getContextDataPoints({
    dataPointToShow: dataPoint,
    dataPoints,
  });
  const filters = getFiltersForDataPoints({
    contextDataPoints,
    dataPoint,
    scope,
    widgetContextParams,
  });

  // TODO: @cafe Handle more than 1 context data point in the future (i.e.: 3 data points)
  const [firstContextDataPoint] = contextDataPoints;
  const filteredBy = firstContextDataPoint?.value.displayValue;
  const filteredByEntity = firstContextDataPoint?.attribute.name;

  const dataPointValues = {
    entity: attribute.name,
    filteredBy: filteredBy || filteredByEntity,
    filteredByEntity,
    value: formattedValue,
  };

  return {
    contextDataPoints,
    dataPointValues,
    filters,
    investigationDataPoint: {
      entityId,
      scope,
    },
    pageFilters: paramsBasedOnRoute,
  };
}
