import { Key } from 'react';

export interface KeyValueProps {
  keyComponent: string;
  layoutProps?: KeyValueStyleProps;
  valueComponent: JSX.Element;
}

export interface KeyValueStyleProps {
  keyWidth?: Key;
  valueWidth?: Key;
}
