import { DataPointValue, FilterOperation, FilterQuery, Translate } from '@kleeen/types';
import { Filter, PropertyDescription } from 'react-query-filter';

export interface FilterOption {
  label: string;
  value: FilterOperation;
  default?: boolean;
}

export enum FilterOptionTypes {
  Label = 'label',
  Value = 'value',
}

export interface FilterQueryBuilderProps {
  filterQuery?: FilterQuery;
  onFilter?: FilterQueryBuilderOnFilter;
  onChange?: (filterQuery: FilterQuery) => void;
  properties: PropertyDescription[];
  translate: Translate;
}

export type FilterQueryBuilderOnFilter = (filterQuery: FilterQuery) => void;

export enum FilterSectionOption {
  Combinator = 'combinator',
  Field = 'field',
  Operation = 'operation',
}

export interface FilterSuggestions {
  [key: string]: {
    key: string;
    suggestions: Suggestions;
  };
}

export interface GetValue {
  filter: Filter;
  suggestionsObj: FilterSuggestions;
}

export interface Suggestions {
  [key: string]: Omit<DataPointValue, 'id'> & {
    id: string;
  };
}
