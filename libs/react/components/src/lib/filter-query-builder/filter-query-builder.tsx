import { Binding, Filter, PropertyDescription, useQueryFilters } from 'react-query-filter';
import {
  FilterCombinator,
  FilterOperation,
  FilterQuery,
  FilterRuleValue,
  PrimitiveType,
} from '@kleeen/types';
import {
  FilterOption,
  FilterOptionTypes,
  FilterQueryBuilderProps,
  FilterSuggestions,
  GetValue,
} from './filter-query-builder.model';
import { useEffect, useState } from 'react';

import { FilterRow } from './components';
import { KsButton } from '../..';
import { SelectOption } from 'react-query-filter/dist/select-option';
import camelCase from 'lodash.camelcase';
import classnames from 'classnames';
import { getThingByName } from '@kleeen/things';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './filter-query-builder.styles';
import { v4 as uuid } from 'uuid';

const bem = 'ks-filter-query-builder';
const defaultCombinator = Binding.AND;
const defaultOperation = FilterOperation.Is;

export function KsFilterQueryBuilder({
  filterQuery,
  onChange,
  onFilter,
  properties,
  translate,
}: FilterQueryBuilderProps) {
  const useQueryFiltersParams = getQueryFiltersParams(properties, filterQuery);
  const { filters, onAddFilter, createFilterRowProps } = useQueryFilters(useQueryFiltersParams);
  const defaultCombinatorOption = {
    value: defaultCombinator,
    label: translate(`app.filter.combinator.${defaultCombinator}`),
  };
  const [combinator, setCombinator] = useState<SelectOption<Binding>>(defaultCombinatorOption);
  const [suggestions, setSuggestions] = useState<FilterSuggestions>({});
  const classes = useStyles();

  useEffect(() => {
    if (isNilOrEmpty(filters?.length)) {
      setCombinator(defaultCombinatorOption);
    }

    handleChange();
  }, [filters?.length]);

  useEffect(() => {
    if (isNilOrEmpty(filterQuery?.combinator)) {
      return;
    }

    setCombinator({
      label: translate(`app.filter.combinator.${Binding[filterQuery.combinator]}`),
      value: Binding[filterQuery.combinator],
    });
  }, [filterQuery?.combinator]);

  useEffect(() => {
    if (isNilOrEmpty(properties)) return;

    const newSuggestions = convertArrayToObject(
      properties.map((prop) => ({ key: prop.key, suggestions: convertArrayToObject(prop?.suggestions) })),
      'key',
    );

    setSuggestions(newSuggestions);
  }, [properties]);

  function handleFilter() {
    if (typeof onFilter == 'function') {
      const query = getQuery({ filters, suggestionsObj: suggestions });
      onFilter(query);
    }
  }

  function handleChange() {
    if (typeof onChange == 'function') {
      const query = getQuery({ filters, suggestionsObj: suggestions });

      onChange(query);
    }
  }

  return (
    <div className={classnames(bem, classes.filterSelectionContainer)}>
      {filters.map((filter, index) => (
        <FilterRow
          combinator={combinator}
          disabled={index > 1}
          key={filter.id}
          properties={properties}
          setCombinator={setCombinator}
          translate={translate}
          {...createFilterRowProps(index)}
        />
      ))}
      {isNilOrEmpty(filters) && (
        <div className={classnames(`${bem}__no-filters`, classes.noFilters)}>
          {translate('app.filterSelection.filter.noApplied')}
        </div>
      )}
      <div className={classnames(`${bem}__actions`, classes.actions)}>
        <KsButton className={classnames(`${bem}__actionButton`, classes.actionButton)} onClick={onAddFilter}>
          {translate('app.filterSelection.filter.add')}
        </KsButton>
        <KsButton className={classnames(`${bem}__actionButton`, classes.actionButton)} onClick={handleFilter}>
          {translate('app.filterSelection.filter.apply')}
        </KsButton>
      </div>
    </div>
  );
}

//#region Private members
function convertArrayToObject(array = [], key = 'id'): FilterSuggestions {
  return array.reduce((acc, item) => {
    return {
      ...acc,
      [item[key]]: item,
    };
  }, {});
}

function filterInvalidRules({ field, operation, value }: Filter) {
  return !(isNilOrEmpty(field) || isNilOrEmpty(operation) || isNilOrEmpty(value));
}

function getCombinator(filterCombinator: string): FilterCombinator {
  const isInvalidFilterCombinator = !Object.values(FilterCombinator).includes(
    filterCombinator as FilterCombinator,
  );

  if (isInvalidFilterCombinator) return FilterCombinator.AND;

  return FilterCombinator[filterCombinator];
}

function getOperation(filterOptionOperation: FilterOption): FilterOperation {
  if (isNilOrEmpty(filterOptionOperation?.value)) return defaultOperation;

  const filterOperation = filterOptionOperation?.value;

  return filterOperation;
}

interface GetQuery {
  filters: Filter[];
  suggestionsObj: FilterSuggestions;
}

function getQuery({ filters, suggestionsObj }: GetQuery): FilterQuery {
  const rules =
    filters?.filter(filterInvalidRules)?.map((filter: Filter) => {
      return {
        field: camelCase(filter.field?.[FilterOptionTypes.Label]),
        operation: getOperation(filter?.operation as unknown as FilterOption),
        value: getValue({ filter, suggestionsObj }),
      };
    }) || [];
  const query = {
    rules,
    combinator: getCombinator(filters[1]?.binding),
  };

  return query;
}

function getQueryFiltersParams(properties: PropertyDescription[], filterQuery: FilterQuery) {
  return isNilOrEmpty(filterQuery)
    ? {
        properties,
      }
    : {
        properties,
        initialValue: outputToInput(filterQuery),
      };
}

export function getValue({ filter }: GetValue): FilterRuleValue {
  if (isNilOrEmpty(filter)) return null;

  const filterValue = filter?.value as PrimitiveType;

  return { displayValue: filterValue };
}

function outputToInput(filterQuery: FilterQuery): Filter[] {
  const { rules } = filterQuery;

  return rules.map((rule, index) => ({
    binding: index && filterQuery.combinator,
    field: { value: rule.field, label: getThingByName(rule.field).displayName },
    id: uuid(),
    operation: { value: rule.operation, label: rule.operation },
    value: Array.isArray(rule.value) ? rule.value : rule.value.displayValue,
  })) as unknown as Filter[];
}
//#endregion
