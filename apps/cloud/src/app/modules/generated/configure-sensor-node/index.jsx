import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useKleeenActions } from '@kleeen/react/hooks';
import {
  EntireProductDomainLayoutStyle,
  DataViewControlSection,
  ViewsManager,
} from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `configureSensorNode`;
  const workflowData = {
    hasFilters: false,
    taskName: 'configureSensorNode',
    workflowId: '423dd7b6-59e4-44dd-a0d5-6451cb74c96e',
  };
  const classes = EntireProductDomainLayoutStyle();
  const workflowName = `Configure Sensor/Node`;
  const configureSensorNodeActions = useKleeenActions(taskName);

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              hideRefreshControl: true,
              taskName,
              title: workflowName,
            }}
            containerClasses={`${classes.entityBrowserArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.gridGridSection}`}
            entityActions={configureSensorNodeActions}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
