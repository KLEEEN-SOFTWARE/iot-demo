import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider } from '@kleeen/react/hooks';
import { useState } from 'react';
import {
  EntireProductDomainLayoutStyle,
  DataViewControlSection,
  ViewsManager,
} from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `system`;
  const workflowData = {
    hasFilters: true,
    taskName: 'system',
    workflowId: 'dd2fec0a-f963-423f-93f5-e73664f03258',
  };
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = EntireProductDomainLayoutStyle();
  const workflowName = `System`;

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
            containerClasses={
              isFilterOpen
                ? `${classes.entityBrowserAreaWithFilterSection} openFilterSection`
                : `${classes.entityBrowserArea} browserArea`
            }
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.gridGridSection}`}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
