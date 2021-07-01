import React, { useState } from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useStyles } from './styles/styles';
import { actions } from './settings/actions';
import { attributes } from './settings/attributes';
import { dataViewControlSectionViewOptions } from './settings/data-view-control-section-view-options';
import { DataViewControlSection, DataViewDisplaySectionAtomic } from '@kleeen/react/atomic-elements';
import { dataViewDisplaySectionAtomicDashboardWidgets } from './settings/data-view-display-section-atomic-dashboard-widgets';
import { dataViewDisplaySectionAtomicSingleViewWidgets } from './settings/data-view-display-section-atomic-single-view-widgets';
import { dataViewDisplaySectionAtomicCustomViews } from './settings/data-view-display-section-atomic-custom-views';

function DashboardTask({ translate, ...props }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const taskName = `siteMapReport`;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [cardsNumber, setCardsNumber] = useState(0);
  const title = `Site Map Report`;
  const objectValue = undefined;
  function handleOnTabIndexChange(newTabIndex) {
    setSelectedTabIndex(newTabIndex);
  }
  const classes = useStyles();
  const classSubHeaderDynamics =
    dataViewControlSectionViewOptions &&
    dataViewControlSectionViewOptions[selectedTabIndex] &&
    dataViewControlSectionViewOptions[selectedTabIndex].type === 'grid'
      ? 'subhead-dynamic'
      : '';

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.dashboardTask} ${classSubHeaderDynamics}`}>
        <div className={classes.dashboardFilterSection}></div>
        <div className={`${classes.dashboardArea} browserArea`}>
          <div className={`${classes.gridPageIntro} max-card-${cardsNumber}`}>
            <DataViewControlSection
              hideRefreshControl
              actions={actions}
              attributes={attributes}
              entity={''}
              entityActions={{}}
              handleChangeTab={handleOnTabIndexChange}
              objectValue={objectValue}
              showDropDown={false}
              taskName={taskName}
              title={title}
              value={selectedTabIndex}
              viewOptions={dataViewControlSectionViewOptions}
            />
          </div>
          <div className={classes.dataViewDisplaySection}>
            <DataViewDisplaySectionAtomic
              atomicCustomViews={dataViewDisplaySectionAtomicCustomViews}
              dashboardWidgets={dataViewDisplaySectionAtomicDashboardWidgets}
              entityName={''}
              hasReportView={true}
              selectedRows={selectedRows}
              setCardsNumber={setCardsNumber}
              setSelectedRows={setSelectedRows}
              singleViewWidgets={dataViewDisplaySectionAtomicSingleViewWidgets}
              tableWidgets={[]}
              taskName={taskName}
              value={selectedTabIndex}
            />
          </div>
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(DashboardTask);
