import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider } from '@kleeen/react/hooks';
import { useState } from 'react';
import { ReportLayoutStyle, DataViewControlSection, ViewsManager } from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `siteMapReport`;
  const workflowData = {
    hasFilters: true,
    taskName: 'siteMapReport',
    workflowId: 'b6b6dfff-c184-4301-a024-a0fdf85b777a',
  };
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = ReportLayoutStyle();
  const workflowName = `Site Map Report`;

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.dashboardTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              hideRefreshControl: true,
              taskName,
              title: workflowName,
            }}
            containerClasses={`${classes.dashboardArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.dataViewDisplaySection}`}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
