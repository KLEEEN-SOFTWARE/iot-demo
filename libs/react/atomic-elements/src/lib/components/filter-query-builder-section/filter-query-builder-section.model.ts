import { FilterQuery, Translate } from '@kleeen/types';

import { PropertyDescription } from 'react-query-filter';

export interface FilterQueryBuilderSectionProps {
  filterQuery: FilterQuery;
  onFilter?: (filterQuery: FilterQuery) => void;
  properties: PropertyDescription[];
  translate: Translate;
}
