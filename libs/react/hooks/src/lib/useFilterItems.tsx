import { AggregationType, Attribute, Cell, FilterOperators, FilterTypes } from '@kleeen/types';
import { ReactNode, useEffect, useState } from 'react';
import { areFiltersInUse, useLocalStorage, useUrlQueryParams, useUserInfo } from '@kleeen/react/hooks';
import { getFiltersInitialState, getTimestamp, manageOperations, mapWithStringify } from '../helpers';
import {
  isCountTransformations,
  isNumericType,
  isSingleCardinalityTransformation,
} from '@kleeen/frontend/utils';
import { isNilOrEmpty, upperCamelCase } from '@kleeen/common/utils';

import { Translate } from '@kleeen/core-react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

const existsInFilter = (attribute, value, operator, filters) => {
  const capitalizedAttribute = upperCamelCase(attribute);
  const filteredAttr = filters[capitalizedAttribute];
  const filteredValues = filteredAttr ? filteredAttr[operator] : null;

  return !isNilOrEmpty(filteredValues) && Array.isArray(filteredValues)
    ? filteredValues.includes(value)
    : filteredValues === value;
};

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
  const filtersAdded = getFiltersInitialState(paramsBasedOnRoute);
  const _user = useUserInfo();
  const userName = _user?.userInfo?.username;
  const localStoragekey = userName ? `filters-${history.location.pathname}-${userName}` : null;
  const { localStorageValue, setLocalStorageValue } = useLocalStorage(localStoragekey, '');
  const filtersInUse = areFiltersInUse();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const handleFilterIn = (operator: FilterOperators) => () => () => {
      const category = upperCamelCase(attr?.name);
      const newCategory = filtersAdded[category] || {};
      const newOperator = manageOperations(operator, cell?.displayValue, newCategory[operator]);
      const newFilter = {
        ...filtersAdded,
        [category]: { ...newCategory, [operator]: newOperator },
      };
      //Get time filters from url
      const Timestamp = getTimestamp(paramsBasedOnRoute);
      const timeFilters = Object.keys(Timestamp).length ? { Timestamp } : { Timestamp: undefined };
      const filtersToApply = {
        ...newFilter,
        ...timeFilters,
      };
      setLocalStorageValue(filtersToApply);
      // Apply filters into url
      const urlQuery = queryString.stringify(mapWithStringify(filtersToApply));
      history.push(`?${urlQuery}`);
      handleClose();
    };
    const handleFilterOut = (operator: FilterOperators) => () => () => {
      const category = upperCamelCase(attr?.name);
      const name = cell?.displayValue;
      const newCategory = filtersAdded[category];
      if (operator === FilterOperators.in) {
        const currentOperatorValues = newCategory[operator] || [];
        const newOperatorValues = currentOperatorValues.filter((value) => name !== value);
        newCategory[operator] = newOperatorValues;

        if (newOperatorValues.length === 0) {
          delete newCategory[operator];
        }
      } else if (operator === FilterOperators.max || operator === FilterOperators.min) {
        delete newCategory[operator];
      }
      const newFilter = {
        ...filtersAdded,
        [category]: newCategory,
      };
      if (Object.keys(newCategory).length === 0) {
        delete newFilter[category];
      }
      //Get time filters from url
      const Timestamp = getTimestamp(paramsBasedOnRoute);
      const timeFilters = Object.keys(Timestamp).length ? { Timestamp } : { Timestamp: undefined };
      const filtersToApply = {
        ...newFilter,
        ...timeFilters,
      };
      setLocalStorageValue(filtersToApply);
      // Apply filters into url
      const urlQuery = queryString.stringify(mapWithStringify(filtersToApply));
      history.push(`?${urlQuery}`);
      handleClose();
    };
    const items = [];
    const transformation = attr?.aggregation as AggregationType;
    if (filtersInUse && isSingleCardinalityTransformation(transformation)) {
      const inFiltersIn = existsInFilter(attr?.name, cell?.displayValue, FilterOperators.in, filtersAdded);
      items.push({
        label: (
          <Translate
            id="app.contextMenu.filter.equalTo"
            type="html"
            values={{ value: cell?.formattedValue }}
          />
        ),
        handleClick: inFiltersIn ? handleFilterOut(FilterOperators.in) : handleFilterIn(FilterOperators.in),
        key: `filter.equals.${cell?.id}`,
        roleAccessKey: `filter.equals.${attr?.name}`,
        filterType: inFiltersIn ? FilterTypes.out : FilterTypes.in,
      });
    }
    if (filtersInUse && isNumericType(attr) && !isCountTransformations(transformation)) {
      const inFiltersMax = existsInFilter(attr?.name, cell?.displayValue, FilterOperators.max, filtersAdded);
      items.push({
        label: (
          <Translate
            id="app.contextMenu.filter.lessThan"
            type="html"
            values={{ value: cell?.formattedValue }}
          />
        ),
        handleClick: inFiltersMax
          ? handleFilterOut(FilterOperators.max)
          : handleFilterIn(FilterOperators.max),
        key: `filter.max.${attr?.name}`,
        roleAccessKey: `filter.max.${attr?.name}`,
        filterType: inFiltersMax ? FilterTypes.out : FilterTypes.in,
      });
      const inFiltersMin = existsInFilter(attr?.name, cell?.displayValue, FilterOperators.min, filtersAdded);
      items.push({
        label: (
          <Translate
            id="app.contextMenu.filter.moreThan"
            type="html"
            values={{ value: cell?.formattedValue }}
          />
        ),
        handleClick: inFiltersMin
          ? handleFilterOut(FilterOperators.min)
          : handleFilterIn(FilterOperators.min),
        key: `filter.min.${attr?.name}`,
        roleAccessKey: `filter.min.${attr?.name}`,
        filterType: inFiltersMin ? FilterTypes.out : FilterTypes.in,
      });
    }

    setMenuItems(items);
  }, [filtersInUse, attr?.name, attr?.aggregation, cell.id, userName, localStoragekey]);

  return menuItems;
};
