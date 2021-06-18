import {
  DashboardView,
  DataViewDisplaySectionAtomicProps,
  DisplaySectionViews,
  ViewType,
} from './DataViewDisplaySection.model';
import { isNilOrEmpty, roleAccessKeyTag, sortByKeys } from '@kleeen/common/utils';

import CardSection from '../CardSection/CardSection';
import { CardSectionLayout } from '../CardSection/CardWidget.model';
import CustomView from '../CustomView/CustomView';
import DataViewDisplaySection from './DataViewDisplaySection';
import FullViewViz from '../FullViewViz/FullViewViz';
import GridAreaSection from '../GridAreaSection/GridAreaSection';
import React from 'react';
import { Widget } from '@kleeen/react/atomic-elements';
import { useAccessControlChecker } from '@kleeen/core-react';
import { useGetWidgetsAmount } from '@kleeen/react/hooks';

const permissionOk = 'SHOW';

export const DataViewDisplaySectionAtomic = React.memo((props: DataViewDisplaySectionAtomicProps) => {
  const {
    atomicCustomViews = [],
    dashboardWidgets = [],
    hasReportView = false,
    selectedRows,
    setSelectedRows,
    singleViewWidgets = [],
    tableWidgets = [],
    taskName,
    value: indexToRender,
  } = props;

  const accessControlFilterViews = (view: Widget & { type: ViewType }): boolean => {
    if (view.type === ViewType.dashboard || view.type === ViewType.report) {
      return (
        useAccessControlChecker(roleAccessKeyTag(`${props.taskName}.views.dashboard`)).permission ===
        permissionOk
      );
    }
    return (
      useAccessControlChecker(
        roleAccessKeyTag(`${props.taskName}.views.${view.title || view.params.baseModel}`),
      ).permission === permissionOk
    );
  };

  const taskViews = [
    ...singleViewWidgets.map((widget) => ({ ...widget, type: ViewType.single })),
    ...atomicCustomViews.map((widget) => ({ ...widget, type: ViewType.custom })),
    ...tableWidgets.map((widget) => ({ ...widget, type: ViewType.table })),
    ...generateCardSectionViews(dashboardWidgets, hasReportView),
  ];

  const orderedTaskViews = sortByKeys<Widget & { type: ViewType }>(taskViews, ['viewOrder', 'viewId']);

  useGetWidgetsAmount(props.setCardsNumber);

  // TODO: @Guaria this is just a workaround, the solution should be assign an ID to each entry on the DataViewControlSection
  // then use that selected ID to identify which section should be render.
  let currentIndex = -1;
  const isTheIndexToRender = (): boolean => {
    currentIndex += 1;
    return currentIndex === indexToRender;
  };

  const children = orderedTaskViews.reduce((views, view) => {
    if (!isNilOrEmpty(view) && isTheIndexToRender() && accessControlFilterViews(view)) {
      return resolveViews({
        dashboardWidgets,
        indexToRender,
        selectedRows,
        setSelectedRows,
        taskName,
        widget: view,
      });
    }
    return views;
  }, []);
  return <DataViewDisplaySection value={0}>{children}</DataViewDisplaySection>;
});

// This will work just for the current implementation of one dashboard per task
function generateCardSectionViews(dashboardWidgets: Widget[], hasReportView: boolean): DashboardView[] {
  if (isNilOrEmpty(dashboardWidgets)) return [];
  const viewType = hasReportView ? ViewType.report : ViewType.dashboard;
  const [firstWidget] = dashboardWidgets;
  return [
    {
      dashboardWidgets,
      type: viewType,
      viewOrder: firstWidget?.viewOrder,
      viewId: firstWidget?.viewId,
    },
  ];
}

function resolveViews({
  widget,
  taskName,
  setSelectedRows,
  selectedRows,
  dashboardWidgets,
  indexToRender,
}: DisplaySectionViews) {
  const viewResolvers = {
    [ViewType.custom]: () => (
      <CustomView key={`data-view-display-section-full-view-viz-${widget.id}`} widget={widget} />
    ),
    [ViewType.single]: () => (
      <FullViewViz
        key={`data-view-display-section-full-view-viz-${widget.id}`}
        taskName={taskName}
        widget={widget}
      />
    ),
    [ViewType.dashboard]: () => (
      <CardSection
        justifyContent="center"
        key={`data-view-display-section-card-section-${indexToRender}`}
        taskName={taskName}
        widgets={dashboardWidgets}
      />
    ),
    [ViewType.report]: () => (
      <CardSection
        cardSectionLayout={CardSectionLayout.SingleWideColumn}
        justifyContent="center"
        key={`data-view-display-section-card-section-${indexToRender}`}
        taskName={taskName}
        widgets={dashboardWidgets}
      />
    ),
    [ViewType.table]: () => (
      <GridAreaSection
        entityId={widget.attributes[0].id}
        entityName={widget.params.baseModel}
        key={`data-view-display-section-grid-area-section-${widget.id}`}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        sortableColumns={true}
        taskName={taskName}
        widget={widget}
      />
    ),
  };

  return viewResolvers[widget.type]();
}

export default DataViewDisplaySectionAtomic;
