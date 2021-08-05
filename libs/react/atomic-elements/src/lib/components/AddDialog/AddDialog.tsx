import { AttributeInputEvents, useEntityDetailsEventHandler, useTheme } from '@kleeen/react/hooks';
import { BaseAddDialogProps, KsButton } from '@kleeen/react/components';
import { Dialog as KsDialog, useStyles } from './AddDialog.styles';
import { MouseEvent, useEffect } from 'react';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { InputElement } from '../input-element';
import { KeyValue } from '../key-value';
import { Translate } from '@kleeen/core-react';
import capitalize from 'lodash.capitalize';
import classnames from 'classnames';

type BuildEntityProps = {
  attributeEventList: AttributeInputEvents[];
};

const layoutProps = {
  keyWidth: 125,
  valueWidth: 300,
};

const bem = 'ks-dialog';

export function AddDialog({
  open,
  onAction,
  onClose,
  parent,
  title,
  taskName,
  action,
}: BaseAddDialogProps): JSX.Element {
  const attributes = action.addModalAttributes;
  const { themeClass } = useTheme();
  const [attributeEventList, { addEvent, clearEventList }] = useEntityDetailsEventHandler();
  const classes = useStyles();

  useEffect(() => {
    return clearEventList;
  }, []);

  const registerEvents = (event: AttributeInputEvents): void => {
    addEvent(event);
  };

  const onSave = (e: MouseEvent): void => {
    const baseAttribute = attributes.find(({ isDisplayValue }) => isDisplayValue);
    const entityKey = baseAttribute?.params?.baseModel || attributes[0]?.params?.baseModel;
    const form = buildEntity({ attributeEventList });

    const isFormValid = Object.keys(form).includes(entityKey);
    const payload = {
      entity: form,
      parent,
      entityKey,
    };

    if (!isFormValid) return;

    onAction(e, payload);
    onClose();
  };

  useEffect(() => {
    return () => clearEventList();
  }, []);

  function handleClose(): void {
    onClose();
  }

  return (
    <KsDialog
      aria-labelledby="form-dialog-title"
      className={classnames(`${bem}`, themeClass)}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle id="form-dialog-title">
        {typeof title === 'string' ? capitalize(title.toString()) : title}
      </DialogTitle>
      <DialogContent>
        {attributes.map((attr) => (
          <div className={classnames(`${bem}__form-group`, classes.formGroup)}>
            <KeyValue
              key={attr.id}
              keyComponent={attr.label}
              layoutProps={layoutProps}
              valueComponent={
                <InputElement
                  attributes={[attr]}
                  elements={attr.elements}
                  registerEvents={registerEvents}
                  params={attr.params}
                  taskName={taskName}
                  widgetId={attr.id}
                />
              }
            />
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <KsButton onClick={handleClose}>
          <Translate id="app.modal.action.cancel" type="html" />
        </KsButton>
        <KsButton color="primary" onClick={onSave}>
          {title}
        </KsButton>
      </DialogActions>
    </KsDialog>
  );
}
//#region private methods

function buildEntity({ attributeEventList }: BuildEntityProps) {
  const widgetsData = attributeEventList.map((event) => event.onSave()).filter((data) => data?.entity);

  const data = widgetsData.reduce((acc: any, current: any) => {
    return {
      ...acc,
      [current.entity]: current.params,
    };
  }, {});

  return data;
}

//#endregion
