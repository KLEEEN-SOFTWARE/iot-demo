import { Filters, InvestigationCard, InvestigationDataPoint, InvestigationMetadata } from '@kleeen/types';

export interface GetInitialInvestigation {
  investigationDataPoint: InvestigationDataPoint;
  investigationFilters: Filters;
  originWidgetId: string;
  pageFilters: Filters;
  user?: string;
}

export function getInitialInvestigationCards({
  investigationDataPoint,
  investigationFilters,
  originWidgetId,
  pageFilters,
  user,
}: GetInitialInvestigation): InvestigationCard {
  const metadata: InvestigationMetadata = {
    createdAt: new Date().toISOString(),
    user,
  };

  const firstInvestigationCard: InvestigationCard = {
    dataPoint: investigationDataPoint,
    filters: { ...pageFilters, ...investigationFilters },
    metadata,
  };

  return {
    filters: pageFilters,
    followUpCards: [firstInvestigationCard],
    metadata,
    widgetId: originWidgetId,
  };
}

export interface GetInvestigationCardByDataPoint {
  inheritedFilters: Filters;
  dataPoint: InvestigationDataPoint;
  user?: string;
}

export function getInvestigationCardByDataPoint({
  dataPoint,
  inheritedFilters,
  user,
}: GetInvestigationCardByDataPoint): InvestigationCard {
  return {
    dataPoint,
    filters: inheritedFilters,
    followUpCards: [],
    metadata: {
      createdAt: new Date().toISOString(),
      user,
    },
  };
}
