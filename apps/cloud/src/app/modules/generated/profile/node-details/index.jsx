import React, { useState } from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useStyles } from './styles/styles';
import {
  EntityDetailsSection,
  DataViewControlSection,
  DataViewDisplaySectionAtomic,
} from '@kleeen/react/atomic-elements';
import { dataViewControlSectionSlots } from './settings/data-view-control-section-slots';
import { entityDetailsSectionEntityDetails } from './settings/entity-details-section-entity-details';
import { useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';
import { actions } from './settings/actions';
import { attributes } from './settings/attributes';
import { dataViewControlSectionViewOptions } from './settings/data-view-control-section-view-options';
import { dataViewDisplaySectionAtomicDashboardWidgets } from './settings/data-view-display-section-atomic-dashboard-widgets';
import { dataViewDisplaySectionAtomicSingleViewWidgets } from './settings/data-view-display-section-atomic-single-view-widgets';
import { dataViewDisplaySectionAtomicCustomViews } from './settings/data-view-display-section-atomic-custom-views';

function EntityBrowserDetailsTask({ translate, ...props }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const taskName = `nodeDetails`;
  const entity = `Node`;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [cardsNumber, setCardsNumber] = useState(0);
  const entityName = `Node`;
  const displayTaskName = `Node Details`;
  const [openDetails, setOpenDetails] = useState(true);
  const nodeActions = useKleeenActions(taskName);
  const title = `Node Details`;
  const objectValue = `node`;
  function handleOnTabIndexChange(newTabIndex) {
    setSelectedTabIndex(newTabIndex);
  }
  const paramsBasedOnRoute = useUrlQueryParams();
  const parent = { id: paramsBasedOnRoute[objectValue], entity };
  const classes = useStyles();

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
        <div className={classes.entityBrowserDetailsSection}>
          <EntityDetailsSection
            displayTaskName={displayTaskName}
            entityDetails={entityDetailsSectionEntityDetails}
            entityName={entityName}
            isEditable={true}
            onChangeFilterVisible={setOpenDetails}
            slots={dataViewControlSectionSlots}
            taskName={taskName}
          />
        </div>
        <div
          className={
            openDetails
              ? `${classes.entityBrowserAreaWithDetailsSection} openDetailsSection`
              : `${classes.entityBrowserArea} browserArea`
          }
        >
          <div className={`${classes.gridPageIntro} ${cardsNumber > 0 ? `max-card-${cardsNumber}` : ''}`}>
            <DataViewControlSection
              slots={dataViewControlSectionSlots}
              parent={parent}
              hideRefreshControl
              actions={actions}
              attributes={attributes}
              entity={entity}
              entityActions={nodeActions}
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
              entityName={entity}
              hasReportView={false}
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

export default KUIConnect(({ translate }) => ({ translate }))(EntityBrowserDetailsTask);
