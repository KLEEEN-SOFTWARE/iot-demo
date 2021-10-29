import {
  Attribute,
  ElementComponents,
  FormatProps,
  TransformationProps,
  ValueProp,
  ValuesProps,
  VizParams,
  Widget,
  WidgetScope,
  WidgetsByEntityMap,
} from '@kleeen/types';

export interface WidgetByIdMap {
  [key: string]: LibraryWidget;
}

// TODO: @cafe update this typing when generated Widget code is a much better fit
export type LibraryWidget = Omit<Widget, 'attributes' | 'chartType' | 'params' | 'viableSolutions'> & {
  attributes: (Omit<Attribute, 'elements' | 'format' | 'statisticalType' | 'transformation'> & {
    elements?: Omit<ElementComponents, 'displayComponent' | 'inputComponent'> & {
      displayComponent?: string;
      inputComponent?: string;
    };
    format?: Omit<FormatProps, 'valueLabels'> & {
      valueLabels?: { label: string; value: number }[];
    };
    statisticalType?: string;
    transformation?: string;
  })[];
  chartType: string;
  params: Omit<VizParams, 'baseModel' | 'value'> & {
    baseModel?: string;
    value?:
      | ValueProp
      | (Omit<ValuesProps, 'transformations'> & {
          transformations: (Omit<TransformationProps, 'transformation'> & {
            transformation: string;
          })[];
        });
  };
  viableSolutions: string[];
};

export type WidgetsByEntity = WidgetsByEntityMap<LibraryWidget>;

export interface WidgetByEntityBaseParam {
  entityId: number | string;
  scope: WidgetScope;
}
