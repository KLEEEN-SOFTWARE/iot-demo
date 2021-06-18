import { AggregationType, Attribute, Cell, FilterForNumerics, FilterOperators } from '@kleeen/types';
import { areFiltersInUse, useUrlQueryParams } from '@kleeen/react/hooks';

import { mergeDeepLeft } from 'ramda';
import queryString from 'query-string';
import { upperCamelCase } from '@kleeen/common/utils';
import { useHistory } from 'react-router-dom';
import { Translate } from '@kleeen/core-react';
import { ReactNode, useEffect, useState } from 'react';
import {
  isATransformationsAvailableForFilterIn,
  isCountTransformations,
  isNumericType,
} from '@kleeen/frontend/utils';

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
  const handleFilterIn = (operator: FilterOperators) => () => () => {
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
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const items = [];
    const transformation = attr?.aggregation as AggregationType;
    if (filtersInUse && isATransformationsAvailableForFilterIn(transformation)) {
      items.push({
        label: (
          <Translate
            id="app.contextMenu.filter.equalTo"
            type="html"
            values={{ value: cell?.formattedValue }}
          />
        ),
        handleClick: handleFilterIn(FilterOperators.in),
        key: `filter.equals.${cell?.id}`,
        roleAccessKey: `filter.equals.${attr?.name}`,
      });
    }
    if (filtersInUse && isNumericType(attr) && !isCountTransformations(transformation)) {
      items.push(
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

    setMenuItems(items);
  }, [filtersInUse, attr?.name, attr?.aggregation, cell.id]);

  return menuItems;
};
