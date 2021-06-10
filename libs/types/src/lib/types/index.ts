import React, { Key } from 'react';
import { StatisticalDataType, AggregationType as Transformation } from '../enums';

import { ElementComponents } from './elements';

/**
 * Interfaces
 */

export type Maybe<T> = T | undefined;

// TODO: @Guaria decide where is the best place to keep shared prop types
export interface AttributeProps {
  name: string;
  canAddValues?: boolean;
  type?: string;
}

export type ReactElement = React.ReactElement | null;

export interface ListItem {
  displayValue: string;
  id?: string;
  value?: any;
}

export interface AutocompleteState {
  data: AutocompleteStateOption[];
  isLoading: boolean;
}

export type AutocompleteStateOption = ListItem;

export interface GenericFunctions {
  [key: string]: GenericFunction;
}

// TODO: @Guaria decide where is the best place to keep shared prop types
export interface ParentProps {
  entity: string;
  id: string;
}

// TODO: @cafe decide where GridSection types should be?
export interface Link {
  slug: string;
  title: string;
  entityType?: string;
  customUrlResolver?: (paramName: string, slug: string, id: string | number, location?: Location) => string;
}

export interface Cell {
  id: number | string;
  displayValue: string | number | boolean;
  $metadata: {
    entityType?: string;
  };
  displayMedia?: {
    type: string;
    value: string;
  };
}

export type DateTimeFormatOptions = {
  weekday?: string;
  era?: string;
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
  timeZoneName?: string;
  hour12?: boolean;
  timeZone?: string;
};

export interface DataListItem {
  [key: string]: Result;
}

export interface DataListMetaData {
  groupByColumnName: string;
  max?: number;
  min?: number;
  negativeBarSpace: number;
  positiveBarSpace: number;
  valueColumnName: string;
}

export interface DataListResult {
  data: DataListItem[];
  metadata?: DataListMetaData;
}

export interface ChangeDirectionsProps {
  changeDirections: string;
}

export interface Action {
  areYouSure: boolean;
  component: CustomWidget | undefined;
  description: string;
  displayName: string;
  name: string;
  type: string;
}

export interface Attribute {
  aggregation?: string | null;
  aggregationMetadata?: ChangeDirectionsProps;
  canAddValues?: boolean;
  crossLinking: Link[];
  dataType?: string;
  deepDataType: string;
  elements?: ElementComponents;
  format?: FormatProps;
  formatType?: string;
  hasMany?: boolean;
  id?: Key;
  isDisplayValue?: boolean;
  isFilterable: { in: boolean; out: boolean };
  label?: string;
  name: string;
  rawEntityName?: string;
  statisticalType?: string | StatisticalDataType;
  settings: {
    isAvatarEditable?: boolean;
    isFilledByEU?: boolean;
    isEditable?: boolean;
  };
  transformation?: Transformation;
}

export interface ResultsProps {
  results: Results;
}

export interface LabelResultsReturnProps extends ResultsProps {
  resultsElement: ReactElement;
}

// TODO: @cafe update this props with real types
export interface FormatProps {
  categories?: string[];
  dateTime?: DateTimeFormatOptions;
  isNumericType?: boolean;
  key?: string;
  max?: number;
  maximumFractionDigits?: number;
  min?: number;
  severityBad?: number;
  severityGood?: number;
  severityLevels?: number;
  type?: string;
  valueLabels?: { [key: number]: string };
}

export interface CrossLinking {
  id: string;
  $metadata: {
    entityType: string;
  };
}

/**
 * Types
 */

export type AmendCellUpdate = (cellUpdate: {
  rowId: string;
  attributeName: string;
  value: any;
  temporaryValue?: any;
}) => void;

export type CustomWidget = (...props: any[]) => ReactElement;

export type FormatMessage = (message: { id: string }, interpolation: { [key: string]: string }) => string;

export type GenericFunction = (...params: any[]) => void;

export type Result = Cell;

export type Results = number[] | string[] | number | string;

export type Translate = (key: string) => string;

export type VizColor = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
