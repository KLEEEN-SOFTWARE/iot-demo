import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { Translate } from '@kleeen/types';
import { KsSvgIconSize } from '../svg-icon/svg-icon.model';
import { PopperPlacementType } from '@material-ui/core';

export interface ItemType<T = any> {
  disabled?: boolean;
  handleOnClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ItemType) => void;
  icon?: string;
  iconSize?: KsSvgIconSize;
  key: string;
  label: string | JSX.Element;
  option?: T;
  path?: string;
}

export interface KsMenuProps {
  accessKey?: string;
  anchorEl: null | HTMLElement;
  className?: string;
  handleClose: (e: React.MouseEvent<Document, MouseEvent>) => void;
  handleOnClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ItemType) => void;
  headerSection?: string;
  isInvestigate?: boolean;
  open: boolean;
  options: ItemType[];
  placement?: PopperPlacementType;
  selectedItem?: ItemType;
  shouldHighlightSelected?: boolean;
  syncWidth?: boolean;
}

export interface InputElementProps {
  currentItem: ItemType;
  options: ItemType[];
  setOpen: (open: boolean) => void;
  translate: Translate;
}

export interface KsDropDownProps {
  accessKey?: string;
  dataTestId?: string;
  defaultDropdownClass?: string;
  handleOnClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ItemType) => void;
  headerSection?: string;
  InputElement?: ForwardRefExoticComponent<InputElementProps & RefAttributes<HTMLElement>>;
  options: ItemType[];
  hideIcon?: boolean;
  isInvestigate?: boolean;
  placement?: PopperPlacementType;
  selectedItem?: ItemType;
  shouldHighlightSelected?: boolean;
  syncWidth?: boolean;
  translate?: Translate;
}
