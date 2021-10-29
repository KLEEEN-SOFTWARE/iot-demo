import {
  ActionDialogProps,
  ActionDialogsConditionProps,
  ActionsDropdownProps,
  DataCustomActionProps,
  GenerateCustomActionPayloadArgs,
} from './actions-dropdown.model';
import { ActionDialogs, InputElementProps, KsButtonText, KsDropDown } from '@kleeen/react/components';
import { Ref, forwardRef, useState } from 'react';
import { isNilOrEmpty, upperCamelCase } from '@kleeen/common/utils';

import { Action } from '@kleeen/types';
import { KUIConnect } from '@kleeen/core-react';
import classnames from 'classnames';
import { pathOr } from 'ramda';
import { useKleeenActions } from '@kleeen/react/hooks';

const bem = 'ks-investigate-actions-dropdown';

const InputElement = forwardRef(({ translate, setOpen }: InputElementProps, ref: Ref<HTMLButtonElement>) => {
  const onClick = () => setOpen(true);
  return (
    <KsButtonText className={classnames(bem, 'anchor-button')} onClick={onClick} ref={ref}>
      {translate('app.gridSection.actionsTableHeaderRow')}
    </KsButtonText>
  );
});

function ActionsDropdownComponent({
  nameUseKleeenActions,
  taskName,
  translate,
  widget,
}: ActionsDropdownProps) {
  const accessKey = 'investigate-actions';
  const [actionDialog, setActionDialog] = useState<ActionDialogProps>();
  const { dispatchCustomAction } = useKleeenActions(nameUseKleeenActions);

  const { actions, entityName, entityId, id: widgetId } = widget;
  const dataPointId = pathOr('', ['params', 'filters', widget.entityName], widget);

  const actionsAsOptions = actions?.map(({ name, displayName, ...rest }) => ({
    label: displayName,
    key: name,
    ...rest,
  }));

  function handleOnClick(_, { label, key, ...rest }) {
    const displayName = label as string;
    const name = key;
    const action = { displayName, name, ...rest } as Action;
    triggerCustomAction(action);
  }

  function triggerCustomAction(action: Action) {
    const dataCustomAction = generateCustomActionPayload({
      action,
      baseModel: upperCamelCase(entityName),
      dataPointId,
      entityId,
      taskName,
      widgetId,
    });

    if (action.areYouSure) {
      setActionDialog({ action, dataCustomAction });
      return;
    }

    dispatchCustomAction(dataCustomAction);
  }

  return (
    <>
      <KsDropDown
        accessKey={accessKey}
        handleOnClick={handleOnClick}
        InputElement={InputElement}
        options={actionsAsOptions}
        translate={translate}
      />
      <ConfirmationDialog
        actionDialog={actionDialog}
        setActionDialog={setActionDialog}
        dispatchCustomAction={dispatchCustomAction}
        taskName={taskName}
      />
    </>
  );
}

function ConfirmationDialog({
  actionDialog,
  dispatchCustomAction,
  setActionDialog,
  taskName,
}: ActionDialogsConditionProps) {
  if (isNilOrEmpty(actionDialog)) return null;

  const { action, dataCustomAction } = actionDialog;

  const key = `${action.name}-dialogs`;

  const onChange = () => setActionDialog(null);
  const dispatchAction = () => dispatchCustomAction(dataCustomAction);

  return (
    <ActionDialogs
      action={action}
      dispatchAction={dispatchAction}
      isConfirmationOpen
      isCustomOpen
      key={key}
      onIsConfirmationOpenChange={onChange}
      onIsCustomOpenChange={onChange}
      taskName={taskName}
    />
  );
}

function generateCustomActionPayload({
  action,
  baseModel,
  dataPointId,
  entityId,
  taskName,
  widgetId,
}: GenerateCustomActionPayloadArgs): DataCustomActionProps {
  const dataCustomAction = {
    params: {
      baseModel,
      displayName: action.displayName,
      operationName: `${action.name}${entityId}`,
      filters: { [baseModel]: dataPointId },
    },
    taskName,
    widgetId,
  };

  return dataCustomAction;
}

export const ActionsDropdown = KUIConnect(({ translate }) => ({ translate }))(ActionsDropdownComponent);
