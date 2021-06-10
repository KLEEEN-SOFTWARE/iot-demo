import { AttributeInputEvents } from '@kleeen/react/hooks';
import { ReactNode } from 'react';
import { Widget } from '../../../types';

interface CardWidgetProps {
  children: ReactNode;
  disabled?: boolean;
  hideTitle?: boolean;
  icon: boolean;
  selectedViz?: number;
  title: string | JSX.Element;
  widgetSelector?: null | JSX.Element;
}

interface CardTitleProps {
  icon: boolean;
  title: string | JSX.Element;
}

type GridJustification =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

interface CardSectionProps {
  children?: ReactNode;
  containerId?: string;
  fullWidth?: boolean;
  hideSaveAndClose?: boolean;
  hideTOC?: boolean;
  justifyContent?: GridJustification;
  onInputChange?: (hasChanged: boolean) => void;
  registerEvents?: (event: AttributeInputEvents) => void;
  skipAccessControlCheck?: boolean;
  taskName?: string;
  widgets?: Widget[];
}

interface RenderChildrenProps {
  children?: ReactNode;
  hideSaveAndClose?: boolean;
  onInputChange?: (hasChanged: boolean) => void;
  registerEvents?: (event: AttributeInputEvents) => void;
  taskName: string;
  widgets?: Widget[];
  widgetsRefs?: any;
}

interface RenderWidgetProps {
  hideSaveAndClose?: boolean;
  onInputChange?: (hasChanged: boolean) => void;
  preferredWidget: string;
  registerEvents?: (event: AttributeInputEvents) => void;
  taskName: string;
  widget: Widget;
}

export { CardSectionProps, CardTitleProps, CardWidgetProps, RenderWidgetProps, RenderChildrenProps, Widget };
