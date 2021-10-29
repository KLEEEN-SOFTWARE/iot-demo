import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useKleeenActions } from '@kleeen/react/hooks';
import {
  SimpleLayoutStyle,
  EntityDetailsSection,
  DataViewControlSection,
  ViewsManager,
} from '@kleeen/react/atomic-elements';
import { useState } from 'react';
import { entityDetailsSectionEntityDetails } from './settings/entity-details-section-entity-details';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';

function Workflow({ translate, ...props }) {
  const taskName = `nodeDetails`;
  const workflowData = {
    hasFilters: false,
    taskName: 'nodeDetails',
    workflowId: 'f991e457-5522-4e72-ba6b-9f8811f612af',
    entity: 'Node',
  };
  const entity = `Node`;
  const classes = SimpleLayoutStyle();
  const [isSummarizeOpen, setIsSummarizeOpen] = useState(true);
  const workflowName = `Node Details`;
  const objectFocus = `node`;
  const nodeActions = useKleeenActions(taskName);

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
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
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              actions: workflowAction,
              entity,
              entityActions: nodeActions,
              hideRefreshControl: true,
              isEntityDetails: true,
              objectValue: objectFocus,
              taskName,
              title: workflowName,
            }}
            containerClasses={
              isSummarizeOpen
                ? `${classes.entityBrowserAreaWithDetailsSection} openDetailsSection `
                : `${classes.entityBrowserArea} browserArea `
            }
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.dataViewDisplaySection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
