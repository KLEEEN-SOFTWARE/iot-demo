import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useState } from 'react';
import {
  SimpleLayoutStyle,
  EntityDetailsSection,
  DataViewControlSection,
  DataViewDisplaySectionAtomic,
} from '@kleeen/react/atomic-elements';
import { entityDetailsSectionEntityDetails } from './settings/entity-details-section-entity-details';
import { useKleeenActions } from '@kleeen/react/hooks';
import { viewOptions } from './settings/view-options';
import { workflowAction } from './settings/workflow-action';
import { attributesOnCreate } from './settings/attributes-on-create';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `nodeDetails`;
  const entity = `Node`;
  const [selectedViewOption, setSelectedViewOption] = useState(widgets[0]);
  const [cardsNumber, setCardsNumber] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const classes = SimpleLayoutStyle();
  const [isSummarizeOpen, setIsSummarizeOpen] = useState(true);
  const workflowName = `Node Details`;
  const objectFocus = `node`;
  function handleOnTabIndexChanged(newTabIndex, option) {
    setSelectedViewOption(option);
  }
  const nodeActions = useKleeenActions(taskName);

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
        <div className={classes.entityBrowserDetailsSection}>
          <EntityDetailsSection
            entityName={entity}
            isEditable
            objectValue={objectFocus}
            entityDetails={entityDetailsSectionEntityDetails}
            taskName={taskName}
            displayTaskName={workflowName}
            onChangeFilterVisible={setIsSummarizeOpen}
          />
        </div>
        <div
          className={
            isSummarizeOpen
              ? `${classes.entityBrowserAreaWithDetailsSection} openDetailsSection `
              : `${classes.entityBrowserArea} browserArea `
          }
        >
          <div
            className={`${classes.gridPageIntro} ${cardsNumber > 0 ? `max-card-${cardsNumber}` : ''}`}
            data-testid="page-intro"
          >
            <DataViewControlSection
              actions={workflowAction}
              attributes={attributesOnCreate}
              entity={entity}
              entityActions={nodeActions}
              hideRefreshControl
              isEntityDetails
              objectValue={objectFocus}
              onTabIndexChanged={handleOnTabIndexChanged}
              selectedOption={selectedViewOption}
              setSelectedOption={setSelectedViewOption}
              taskName={taskName}
              title={workflowName}
              viewOptions={viewOptions}
            />
          </div>
          <div
            className={`${classes.dataViewDisplaySection} ${
              selectedRows.length > 0 && selectedViewOption.sortOrder === 0 ? classes.snackbar : ''
            }`}
            data-testid="content-section"
          >
            <DataViewDisplaySectionAtomic
              widgets={widgets}
              entityName={entity}
              selectedOption={selectedViewOption}
              selectedRows={selectedRows}
              setCardsNumber={setCardsNumber}
              setSelectedRows={setSelectedRows}
              taskName={taskName}
              value={selectedViewOption}
            />
          </div>
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
