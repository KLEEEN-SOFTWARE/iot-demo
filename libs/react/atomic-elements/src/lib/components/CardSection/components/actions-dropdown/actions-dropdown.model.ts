import { Action, Translate, Widget } from '@kleeen/types';

export interface DataCustomActionProps {
  params: {
    baseModel: string;
    displayName: string;
    filters: { [key: string]: string };
    operationName: string;
  };
  taskName: string;
  widgetId: string;
}

export interface ActionsDropdownProps {
  nameUseKleeenActions: string;
  taskName: string;
  translate: Translate;
  widget: Widget;
}

export interface ActionDialogProps {
  action: Action;
  dataCustomAction: DataCustomActionProps;
}

export interface GenerateCustomActionPayloadArgs {
  action: Action;
  baseModel: string;
  dataPointId: string;
  entityId: string | number;
  taskName: string;
  widgetId: string;
}

export interface ActionDialogsConditionProps {
  actionDialog: ActionDialogProps;
  dispatchCustomAction: (e: DataCustomActionProps) => void;
  setActionDialog: (e: ActionDialogProps) => void;
  taskName: string;
}
