import React, { useState } from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useStyles } from './styles/styles';
import { useKleeenActions, useWidgetContext } from '@kleeen/react/hooks';
import { actions } from './settings/actions';
import { attributes } from './settings/attributes';
import { dataViewControlSectionViewOptions } from './settings/data-view-control-section-view-options';
import {
  DataViewControlSection,
  DataViewDisplaySectionAtomic,
  SnackBarSection,
} from '@kleeen/react/atomic-elements';
import { dataViewDisplaySectionAtomicSingleTableWidgets } from './settings/data-view-display-section-atomic-single-table-widgets';
import { dataViewDisplaySectionAtomicDashboardWidgets } from './settings/data-view-display-section-atomic-dashboard-widgets';
import { dataViewDisplaySectionAtomicSingleViewWidgets } from './settings/data-view-display-section-atomic-single-view-widgets';
import { dataViewDisplaySectionAtomicCustomViews } from './settings/data-view-display-section-atomic-custom-views';
import { snackBarSectionActions } from './settings/snack-bar-section-actions';

function EntityBrowserTask({ translate, ...props }) {
  const taskName = `sites`;
  const entity = `SiteMap`;
  const siteMapActions = useKleeenActions(taskName);
  const title = `Sites`;
  const objectValue = `siteMap`;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  function handleOnTabIndexChange(newTabIndex) {
    setSelectedTabIndex(newTabIndex);
  }
  const [mainWidget] = dataViewDisplaySectionAtomicSingleTableWidgets;
  const sitesMainWidgetData = useWidgetContext({
    taskName,
    widgetId: mainWidget?.id,
    params: { ...mainWidget?.params, attributes: mainWidget?.attributes },
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [cardsNumber, setCardsNumber] = useState(0);
  const undefinedActions = useKleeenActions(taskName);
  const classes = useStyles();

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
        <div className={`${classes.entityBrowserArea} browserArea`}>
          <div className={`${classes.gridPageIntro} ${cardsNumber > 0 ? `max-card-${cardsNumber}` : ''}`}>
            <DataViewControlSection
              results={
                sitesMainWidgetData.data?.pagination?.totalCount ?? sitesMainWidgetData.data?.data?.length
              }
              hideRefreshControl
              actions={actions}
              attributes={attributes}
              entity={entity}
              entityActions={siteMapActions}
              handleChangeTab={handleOnTabIndexChange}
              objectValue={objectValue}
              showDropDown={false}
              taskName={taskName}
              title={title}
              value={selectedTabIndex}
              viewOptions={dataViewControlSectionViewOptions}
            />
          </div>
          <div
            className={`${classes.gridGridSection} ${
              selectedRows.length > 0 && selectedTabIndex === 0 ? classes.snackbar : ''
            }`}
          >
            <DataViewDisplaySectionAtomic
              atomicCustomViews={dataViewDisplaySectionAtomicCustomViews}
              dashboardWidgets={dataViewDisplaySectionAtomicDashboardWidgets}
              entityName={entity}
              hasReportView={false}
              selectedRows={selectedRows}
              setCardsNumber={setCardsNumber}
              setSelectedRows={setSelectedRows}
              singleViewWidgets={dataViewDisplaySectionAtomicSingleViewWidgets}
              tableWidgets={dataViewDisplaySectionAtomicSingleTableWidgets}
              taskName={taskName}
              value={selectedTabIndex}
            />
          </div>
          <div>
            <SnackBarSection
              actions={snackBarSectionActions}
              entity={''}
              entityActions={undefinedActions}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
              showSelectAndExecute={false}
              showSnackBar={selectedRows && selectedRows.length > 0}
            />
          </div>
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(EntityBrowserTask);
