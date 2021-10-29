import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';
import {
  CollectionLayoutStyle,
  DataViewControlSection,
  ViewsManager,
  getRowsCountFromFirstTable,
} from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';

function Workflow({ translate, ...props }) {
  const taskName = `sites`;
  const workflowData = {
    hasFilters: false,
    taskName: 'sites',
    workflowId: '46191c4f-2521-4d6d-8015-5116357f2668',
    entity: 'SiteMap',
  };
  const entity = `SiteMap`;
  const classes = CollectionLayoutStyle();
  const workflowName = `Sites`;
  const objectFocus = `siteMap`;
  const siteMapActions = useKleeenActions(taskName);
  const paramsBasedOnRoute = useUrlQueryParams();
  const currentEntity = { id: paramsBasedOnRoute[entity], entity };

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              actions: workflowAction,
              entity,
              entityActions: siteMapActions,
              hideRefreshControl: true,
              objectValue: objectFocus,
              parent: currentEntity,
              taskName,
              title: workflowName,
              results: `${getRowsCountFromFirstTable(widgets)} Count of ${entity}`,
            }}
            containerClasses={`${classes.entityBrowserArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.gridGridSection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
