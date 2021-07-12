import './DataViewControlSection.scss';

import {
  ActionDialogs,
  ActionsSection,
  AddDialogPayload,
  KsAutoRefreshControl,
  RefreshControl,
} from '@kleeen/react/components';
import { Container, Title, Typography } from './DataViewControlSection.styles';
import { DataViewControlSectionProps } from './DataViewControlSection.model';
import { HeaderTitle, HeaderTitleEllipsis } from '../HeaderTitle';
import { isAddAction } from '@kleeen/render-utils';
import { isEmpty, isNil } from 'ramda';
import { isNilOrEmpty, sortByKeys } from '@kleeen/common/utils';
import { ReactElement, useState } from 'react';
import { useKleeenActions } from '@kleeen/react/hooks';
import { ViewSwitcher } from './ViewSwitcher';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import MuiTooltip from '@material-ui/core/Tooltip';
import { Action } from '@kleeen/types';

const bem = 'ks-data-view-control-section';

export function DataViewControlSection(props: DataViewControlSectionProps): ReactElement {
  if (isNilOrEmpty(props.taskName)) {
    throw new Error(`Value cannot be null. Parameter name: taskName`);
  }
  const { refreshPage } = useKleeenActions(props.taskName);
  const [actionPayload, setActionPayload] = useState({});
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  const { selectedOption, onTabIndexChanged, viewOptions = [] } = props;
  const viewOptionsBySortOrder = sortByKeys(viewOptions, ['viewOrder', 'viewId']);

  const getSelectedOption = () => {
    const hastToChooseADefaultViewOption =
      isNilOrEmpty(selectedOption) && !isNilOrEmpty(viewOptionsBySortOrder) && !isNil(onTabIndexChanged);

    if (hastToChooseADefaultViewOption) {
      const [defaultViewOption] = viewOptionsBySortOrder;
      onTabIndexChanged(0, defaultViewOption);
      return defaultViewOption;
    }
    return viewOptionsBySortOrder.find(
      (viewOption) => selectedOption && viewOption.viewId === selectedOption.viewId,
    );
  };
  // TODO: @cafe move this logic to a shared util and re-use it in HeaderAndSubSectionsComponent
  const viewOptionProps = getSelectedOption();

  const addActions = getAddActions();
  const entityName = isNilOrEmpty(viewOptionProps?.entityName) ? props.entity : viewOptionProps.entityName;
  const modalAttributes = isNilOrEmpty(viewOptionProps?.modalAttributes)
    ? props.attributes
    : viewOptionProps.modalAttributes;

  function dispatchAction({ action, payload }: { action: Action; payload: AddDialogPayload }): void {
    const isCustomDialogOpen = isCustomOpen;
    const needsConfirmation = action?.areYouSure;

    if (isCustomDialogOpen && needsConfirmation) {
      setActionPayload(payload);
      setIsConfirmationOpen(true);
    } else {
      props.entityActions.addRequest(payload || actionPayload);
    }
  }

  function getAddActions(): Action[] {
    const localActions = isNilOrEmpty(viewOptionProps?.actions) ? props.actions : viewOptionProps.actions;
    return (localActions || []).filter(isAddAction);
  }

  function handleClick(action: Action): void {
    if (action?.component) {
      setIsCustomOpen(true);
    } else if (action?.areYouSure) {
      setIsConfirmationOpen(true);
    }
  }

  function handleIsConfirmationOpenChange(): void {
    setIsConfirmationOpen(!isConfirmationOpen);
  }

  function handleIsCustomOpenChange(): void {
    setIsCustomOpen(!isCustomOpen);
  }

  return (
    <>
      <Container className={classnames(bem, 'dataview-control-section')} maxWidth="xl">
        <Grid alignItems="center" className={classnames(`${bem}__container`, 'main-container')} container>
          {props.showAvatar && (
            <Grid
              alignItems="center"
              className={classnames(`${bem}__avatar-container`)}
              container
              item
              sm={2}
              xs={4}
            >
              <AvatarSection />
            </Grid>
          )}
          <Grid
            className={classnames(`${bem}__typography`, 'typography-ellipsis')}
            container
            direction="column"
          >
            <MuiTooltip title={HeaderTitle(props)} placement="top-start">
              <Title>
                <Typography variant="h2" component="h1">
                  {HeaderTitleEllipsis(props)}
                </Typography>
              </Title>
            </MuiTooltip>
            {props.results != null && (
              <Typography className={classnames(`${bem}__results`, 'results')}>
                <>{props.results} Results</>
              </Typography>
            )}
          </Grid>
        </Grid>
        {viewOptionsBySortOrder.length > 1 && (
          <Grid alignItems="center" className={classnames(`${bem}__options`, 'options')} container>
            <ViewSwitcher
              handleChangeTab={props.handleChangeTab}
              onTabIndexChanged={props.onTabIndexChanged}
              showDropDown={props.showDropDown}
              taskName={props.taskName}
              value={viewOptionsBySortOrder.indexOf(viewOptionProps)}
              viewOptions={viewOptionsBySortOrder}
            />
          </Grid>
        )}
        <Grid className="actions" container alignItems="center">
          {!props.hideRefreshControl && (
            <>
              <RefreshControl onRefresh={refreshPage} taskName={props.taskName} />
              <KsAutoRefreshControl taskName={props.taskName} onRefresh={refreshPage} />
            </>
          )}
          {!isEmpty(addActions) && (
            <ActionsSection actions={addActions} entity={entityName} handleAddClick={handleClick} />
          )}
        </Grid>
      </Container>
      {addActions.map((action) => (
        <ActionDialogs
          action={action}
          attributes={modalAttributes}
          dispatchAction={dispatchAction}
          entity={entityName}
          isConfirmationOpen={isConfirmationOpen}
          isCustomOpen={isCustomOpen}
          key={`${action.name}-dialogs`}
          onIsConfirmationOpenChange={handleIsConfirmationOpenChange}
          onIsCustomOpenChange={handleIsCustomOpenChange}
          parent={props.parent}
          taskName={props.taskName}
        />
      ))}
    </>
  );
}

function AvatarSection(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect id="blue_square" fill="#069" x="0" y="0" width="100%" height="100%" />
    </svg>
  );
}

export default DataViewControlSection;
