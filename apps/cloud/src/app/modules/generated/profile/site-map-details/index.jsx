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
  const taskName = `siteMapDetails`;
  const workflowData = {
    hasFilters: false,
    taskName: 'siteMapDetails',
    workflowId: '09522661-c6e8-4161-a1cf-8c1e2e499824',
    entity: 'SiteMap',
  };
  const entity = `SiteMap`;
  const classes = SimpleLayoutStyle();
  const [isSummarizeOpen, setIsSummarizeOpen] = useState(true);
  const workflowName = `Site Map Details`;
  const objectFocus = `siteMap`;
  const siteMapActions = useKleeenActions(taskName);

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
              entityActions: siteMapActions,
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
