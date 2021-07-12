import { ReactNode } from 'react';
import { MenuListProps } from '../../../types';

export interface NavLeftProps {
  accountMenuList: MenuListProps[];
  children?: ReactNode;
  helpUrl?: string;
  logo: string;
  menuList: MenuListProps[];
  productName?: string;
}
