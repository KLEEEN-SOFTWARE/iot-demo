import { FilterOperators, Link } from '@kleeen/types';
import moment, { Moment } from 'moment';

export function getWidgetContextName({ taskName, widgetId }: { taskName: string; widgetId: string }): string {
  return `${taskName}_${widgetId}`;
}

export const isLinkFilterableByEntityType = (entityType: string, link: Link): boolean =>
  !link.entityType || link.entityType === entityType;

export const manageOperations = (
  operator: FilterOperators,
  value: string | number | boolean,
  operators,
): any => {
  if (Array.isArray(operators) || operator === FilterOperators.in) {
    return [...(operators || []), value];
  }
  return value;
};

export const getFromValueOf = (paramsBasedOnRoute): undefined | Moment =>
  paramsBasedOnRoute?.Timestamp?.from ? moment(paramsBasedOnRoute?.Timestamp?.from) : undefined;

export const getToValueOf = (paramsBasedOnRoute): undefined | Moment =>
  paramsBasedOnRoute?.Timestamp?.to ? moment(paramsBasedOnRoute?.Timestamp?.to) : undefined;

export const getRelativeDateValueOf = (paramsBasedOnRoute): undefined | string =>
  paramsBasedOnRoute?.Timestamp?.relativeDate;

export const mapWithStringify = (filtersToApply) => {
  return Object.keys(filtersToApply).reduce(
    (acc, key) => ({
      ...acc,
      [key]: JSON.stringify(filtersToApply[key]),
    }),
    {},
  );
};

export const getFiltersInitialState = (params: Record<string, any>) => {
  const initialState = Object.keys(params).reduce((acc, key) => {
    return {
      ...acc,
      [key]: params[key],
    };
  }, {});

  return initialState;
};

export const getTimestamp = (params: Record<string, any>) => {
  const from = getFromValueOf(params);
  const to = getToValueOf(params);
  const relativeDate = getRelativeDateValueOf(params);
  const Timestamp: { from?: number; to?: number; relativeDate?: string } = {};
  if (from || to || relativeDate) {
    if (from) Timestamp.from = moment.utc(from).valueOf();
    if (to) Timestamp.to = moment.utc(to).valueOf();
    if (relativeDate) Timestamp.relativeDate = relativeDate;
  }
  return Timestamp;
};
