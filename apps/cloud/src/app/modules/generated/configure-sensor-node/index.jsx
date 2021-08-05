import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useState } from 'react';
import {
  EntireProductDomainLayoutStyle,
  DataViewControlSection,
  DataViewDisplaySectionAtomic,
} from '@kleeen/react/atomic-elements';
import { viewOptions } from './settings/view-options';
import { useKleeenActions } from '@kleeen/react/hooks';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `configureSensorNode`;
  const [selectedViewOption, setSelectedViewOption] = useState(widgets[0]);
  const [cardsNumber, setCardsNumber] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const classes = EntireProductDomainLayoutStyle();
  const workflowName = `Configure Sensor/Node`;
  function handleOnTabIndexChanged(newTabIndex, option) {
    setSelectedViewOption(option);
  }
  const configureSensorNodeActions = useKleeenActions(taskName);

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
        <div className={`${classes.entityBrowserArea} browserArea`}>
          <div className={`${classes.gridPageIntro} ${cardsNumber > 0 ? `max-card-${cardsNumber}` : ''}`}>
            <DataViewControlSection
              entityActions={configureSensorNodeActions}
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
          >
            <DataViewDisplaySectionAtomic
              widgets={widgets}
              selectedOption={selectedViewOption}
              selectedRows={selectedRows}
              setCardsNumber={setCardsNumber}
              setSelectedRows={setSelectedRows}
              taskName={taskName}
              value={selectedViewOption}
              entityActions={configureSensorNodeActions}
            />
          </div>
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
