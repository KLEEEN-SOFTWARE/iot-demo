import { PopperProps } from '@material-ui/core/Popper';
import { MenuListProps } from '../../../../types';
export interface MenuListSectionProps extends Partial<PopperProps> {
  menuList: MenuListProps[];
  handleClose: (event: React.MouseEvent<EventTarget, globalThis.MouseEvent>) => void;
  navigate: (path: any, preserveQueryParams?: boolean) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
