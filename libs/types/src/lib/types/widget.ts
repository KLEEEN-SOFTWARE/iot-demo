import { Action, Attribute, AttributeProps, CustomWidget, ViewType, WidgetTypes } from '@kleeen/types';

import { AggregationType } from '@kleeen/types';
import { StatisticalType } from '@kleeen/render-utils';

export interface Widget extends VizCommonParams {
  actions: Action[];
  addModalAttributes: AttributeProps[];
  attributes: Attribute[];
  chartType: WidgetTypes;
  component: CustomWidget | undefined;
  entityId?: string;
  id: string | number;
  statisticalType?: StatisticalType;
  viewId: string;
  title: string;
  viableSolutions?: WidgetTypes[];
  type: ViewType;
}

export interface GroupByProps {
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
  transformationMetadata?: TransformationMetadataProps;
  metadata?: TransformationMetadataProps;
}

export interface TransformationMetadataProps {
  changeDirections: string;
}

export interface ValueProp {
  name: string;
  transformation: string;
  formatType: string;
}

export interface ValuesProps {
  label: string;
  name: string;
  transformations: TransformationProps[];
  formatType: string;
}

export interface VizParams {
  baseModel: string;
  cardinality?: string;
  displayName?: string;
  groupBy?: GroupByProps;
  operationName?: string;
  taskName?: string;
  value?: ValueProp | ValuesProps;
}

export interface VizCommonParams {
  params: VizParams;
}
