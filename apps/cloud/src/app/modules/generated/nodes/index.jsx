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
  const taskName = `nodes`;
  const workflowData = {
    hasFilters: false,
    taskName: 'nodes',
    workflowId: '3e93db18-fe67-43a2-be09-6ecf9873ee74',
    entity: 'Node',
  };
  const entity = `Node`;
  const classes = CollectionLayoutStyle();
  const workflowName = `Nodes`;
  const objectFocus = `node`;
  const nodeActions = useKleeenActions(taskName);
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
              entityActions: nodeActions,
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
