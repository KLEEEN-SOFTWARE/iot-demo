import { ReactElement } from 'react';

/**
 * Interfaces
 */

export type Maybe<T> = T | undefined;

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

//TODO @cafe This looks just like DataListItem
export type Row = {
  id: string;
} & {
  [key: string]: Cell;
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

export interface ResultsProps {
  results: Results;
}

export interface LabelResultsReturnProps extends ResultsProps {
  resultsElement: ReactElement;
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

export type FormatMessage = (message: { id: string }, interpolation: { [key: string]: string }) => string;

export type GenericFunction = (...params: any[]) => void;

export type Result = Cell;

export type Results = number[] | string[] | number | string;

export type Translate = (key: string) => string;

export type VizColor = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
