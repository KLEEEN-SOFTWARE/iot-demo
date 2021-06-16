import { AggregationType, Attribute, Cell, FilterForNumerics, FilterOperators } from '@kleeen/types';
import { areFiltersInUse, useUrlQueryParams } from '@kleeen/react/hooks';

import { mergeDeepLeft } from 'ramda';
import queryString from 'query-string';
import { upperCamelCase } from '@kleeen/common/utils';
import { useHistory } from 'react-router-dom';
import { Translate } from '@kleeen/core-react';
import { ReactNode } from 'react';

export const useFilterItems = ({
  attr,
  cell,
  handleClose,
}: {
  handleClose: () => void;
  attr: Attribute;
  cell: Cell & { formattedValue: ReactNode | number };
}) => {
  const history = useHistory();
  const { paramsBasedOnRoute } = useUrlQueryParams({ useNestedObjects: true });
  const filtersInUse = areFiltersInUse();
  const isNumericType = attr?.format?.isNumericType || FilterForNumerics.includes(attr?.statisticalType);
  const aggregationToExcludeMaxMix = [AggregationType.CountTotal, AggregationType.CountUnique];

  const handleFilterIn = (operator) => () => () => {
    const newFilter = { [upperCamelCase(attr?.name)]: { [operator]: [cell?.displayValue] } };
    const filtersToApply = mergeDeepLeft(newFilter, paramsBasedOnRoute);
    const mapWithStringify = Object.keys(filtersToApply).reduce(
      (acc, key) => ({
        ...acc,
        [key]: JSON.stringify(filtersToApply[key]),
      }),
      {},
    );
    const urlQuery = queryString.stringify(mapWithStringify);
    handleClose();

    history.push(`?${urlQuery}`);
  };

  const menuItems = [];
  if (
    filtersInUse &&
    [
      AggregationType.SelfMulti,
      AggregationType.SelfSingle,
      AggregationType.NoAggregation,
      AggregationType.Max,
      AggregationType.Min,
      AggregationType.Latest,
      AggregationType.Oldest,
    ].includes(attr?.aggregation as AggregationType)
  ) {
    menuItems.push({
      label: (
        <Translate id="app.contextMenu.filter.equalTo" type="html" values={{ value: cell?.formattedValue }} />
      ),
      handleClick: handleFilterIn(FilterOperators.in),
      key: `filter.equals.${attr?.name}`,
      roleAccessKey: `filter.equals.${attr?.name}`,
    });
  }

  if (
    filtersInUse &&
    isNumericType &&
    !aggregationToExcludeMaxMix.includes(attr?.aggregation as AggregationType)
  ) {
    menuItems.push(
      {
        label: (
          <Translate
            id="app.contextMenu.filter.lessThan"
            type="html"
            values={{ value: cell?.formattedValue }}
          />
        ),
        handleClick: handleFilterIn(FilterOperators.max),
        key: `filter.max.${attr?.name}`,
        roleAccessKey: `filter.max.${attr?.name}`,
      },
      {
        label: (
          <Translate
            id="app.contextMenu.filter.moreThan"
            type="html"
            values={{ value: cell?.formattedValue }}
          />
        ),
        handleClick: handleFilterIn(FilterOperators.min),
        key: `filter.min.${attr?.name}`,
        roleAccessKey: `filter.min.${attr?.name}`,
      },
    );
  }

  return menuItems;
};
