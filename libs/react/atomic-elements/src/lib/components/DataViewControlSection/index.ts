import {
  DataViewControlSectionProps as DataViewControlSectionPropsType,
  ViewOption,
} from './DataViewControlSection.model';

import { isNilOrEmpty } from '@kleeen/common/utils';

export * from './DataViewControlSection';
export type DataViewControlSectionProps = DataViewControlSectionPropsType;

export function formatViewOptions(viewOptions: ViewOption[]) {
  return viewOptions.map((option, index) => {
    const { name, viewOrder } = option;
    return {
      label: name,
      viewOrder: isNilOrEmpty(viewOrder) ? index : viewOrder,
      value: name,
      option,
    };
  });
}
