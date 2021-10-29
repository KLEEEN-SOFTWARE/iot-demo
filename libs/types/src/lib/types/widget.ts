import { AggregationType, StatisticalDataType, TemporalInterval, ViewType } from '../enums';
import { Attribute, ChangeDirectionsProps } from './attributes';
import { Maybe, OnInputChangeEvent, RegisterEvents } from './base';
import { WidgetScope, WidgetTypes } from '../enums/widgets';

import { Action } from './actions';
import { Filters } from './filters';
import { Pagination } from './pagination';
import { Sorting } from './sort';

interface WidgetBaseType extends VizCommonParams {
  actions: Action[];
  attributes: Attribute[];
  chartType?: string;
  entityId?: number;
  entityName?: string;
  id: string;
  isNewWidget?: boolean;
  name?: string;
  title?: string;
  type?: ViewType;
  viewId?: string;
  viewOrder?: number;
}
export interface Widget extends WidgetBaseType {
  chartType: WidgetTypes;
  component?: Maybe<string>;
  scope?: WidgetScope;
  sortOrder?: number;
  statisticalType?: StatisticalDataType;
  viableSolutions?: WidgetTypes[];
}

export interface ViewShapeType extends WidgetBaseType {
  widgets: Widget[];
}

export type SetCurrentViewType = (currentView: ViewShapeType) => void;

export interface TemporalBucket {
  interval: TemporalInterval;
  magnitude: number;
}

// Include new bucket types with an | (or) here
export type Bucket = TemporalBucket;

export interface GroupByProps {
  bucket?: Bucket;
  name: string;
  transformation: string;
  formatType: string;
}

export interface MenuListProps {
  func?: () => void;
  icon?: string;
  path: string;
  title: string;
}

export interface TransformationProps {
  isPrimary?: boolean;
  transformation: AggregationType;
  transformationMetadata?: ChangeDirectionsProps;
  metadata?: ChangeDirectionsProps;
}
export interface ValueProp {
  name: string;
  transformation?: string;
  formatType?: string;
}

export interface ValuesPropsAttributes {
  name: string;
}

export interface ValuesProps {
  attributes?: ValuesPropsAttributes[];
  label: string;
  name: string;
  transformations: TransformationProps[];
  formatType: string;
}

export interface VizParams {
  baseModel: string;
  cardinality?: string;
  displayName?: string;
  filters?: Filters;
  groupBy?: GroupByProps;
  operationName?: string;
  taskName?: string;
  value?: ValueProp | ValuesProps;
}

export interface WidgetContextParams extends VizParams {
  aggregatedByType?: string;
  attributes?: Attribute[] | string;
  pagination?: Pagination;
  sorting?: Sorting;
}

export interface VizCommonParams {
  params: VizParams;
}

export interface WidgetProps extends VizCommonParams {
  actions?: Action[];
  attributes?: Attribute[];
  chartType?: string;
  taskName: string;
  widgetId: string;
}

export interface CustomWidgetContainerProps {
  disableHeightCalculation: boolean;
  Header?: JSX.Element;
  onInputChange?: OnInputChangeEvent;
  registerEvents?: RegisterEvents;
  taskName: string;
  widget: Widget;
}

export interface CustomWidgetProps extends CustomWidgetContainerProps {
  className: string;
  key: string;
  title: string;
}

export interface VisualizationWidgetProps extends VizCommonParams {
  attributes: Attribute[];
  chartType?: string;
  context: WidgetState;
  widgetId: string;
}

export type WidgetStateParamsGroupBy = Pick<GroupByProps, 'bucket' | 'transformation'>;

export interface WidgetStateParams {
  filters?: Filters;
  groupBy?: WidgetStateParamsGroupBy;
}

export interface WidgetState {
  data: any;
  error: any;
  isLoading: boolean;
  params: WidgetStateParams;
}

export type WidgetsByEntityByType<T> = {
  [key in WidgetScope]?: T[];
};

export interface WidgetsByEntityMap<T> {
  [key: string]: WidgetsByEntityByType<T>;
}

export type WidgetDefinition = string;
export type WidgetIdsByEntity = WidgetsByEntityMap<WidgetDefinition>;
