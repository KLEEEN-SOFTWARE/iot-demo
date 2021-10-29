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
  const taskName = `sensors`;
  const workflowData = {
    hasFilters: false,
    taskName: 'sensors',
    workflowId: 'ccd4b585-b8d5-4315-817f-bae7060c22e5',
    entity: 'Sensor',
  };
  const entity = `Sensor`;
  const classes = CollectionLayoutStyle();
  const workflowName = `Sensors`;
  const objectFocus = `sensor`;
  const sensorActions = useKleeenActions(taskName);
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
              entityActions: sensorActions,
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
