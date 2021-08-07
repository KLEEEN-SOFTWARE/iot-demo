import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useState } from 'react';
import {
  EntireProductDomainLayoutStyle,
  DataViewControlSection,
  DataViewDisplaySectionAtomic,
} from '@kleeen/react/atomic-elements';
import { viewOptions } from './settings/view-options';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `system`;
  const [selectedViewOption, setSelectedViewOption] = useState(widgets[0]);
  const [cardsNumber, setCardsNumber] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = EntireProductDomainLayoutStyle();
  const workflowName = `System`;
  function handleOnTabIndexChanged(newTabIndex, option) {
    setSelectedViewOption(option);
  }

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
        <div
          className={
            isFilterOpen
              ? `${classes.entityBrowserAreaWithFilterSection} openFilterSection`
              : `${classes.entityBrowserArea} browserArea`
          }
        >
          <div
            className={`${classes.gridPageIntro} ${cardsNumber > 0 ? `max-card-${cardsNumber}` : ''}`}
            data-testid="page-intro"
          >
            <DataViewControlSection
              hideRefreshControl
              onTabIndexChanged={handleOnTabIndexChanged}
              selectedOption={selectedViewOption}
              setSelectedOption={setSelectedViewOption}
              taskName={taskName}
              title={workflowName}
              viewOptions={viewOptions}
            />
          </div>
          <div
            className={`${classes.gridGridSection} ${
              selectedRows.length > 0 && selectedViewOption.sortOrder === 0 ? classes.snackbar : ''
            }`}
            data-testid="content-section"
          >
            <DataViewDisplaySectionAtomic
              widgets={widgets}
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
