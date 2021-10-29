import { FormatMessage, GenericFunctions, ReactElement, Translate, Widget } from '@kleeen/types';

export interface SectionComponentType {
  component: ReactElement;
  endSeparator?: boolean;
  flexNumber?: number;
}

export interface SectionType {
  flexNumber?: number;
  sections: SectionComponentType[];
}

export interface WidgetHeaderProps {
  actions?: GenericFunctions;
  // TODO: Change CardWidgetProps to only accept strings (icons should be strings)
  // This has repercussions on custom pages like EndUserPreferences
  formatMessage?: FormatMessage;
  icon?: string | boolean;
  title: string | JSX.Element | null | undefined;
  translate?: Translate;
  widget?: Widget;
}
