import {
  AreaWidget,
  BubbleChartWidget,
  ColumnBarWidget,
  ConfigInputWidget,
  ConfigTableWidget,
  CustomActionWidget,
  CustomWidgetContainer,
  DonutVariantWidget,
  DonutWidget,
  GaugeWidget,
  LineWidget,
  PieWidget,
  PolarAreaWidget,
  PositiveNegativeAreaWidget,
  RankedListWidget,
  ReadOnlyTextWidget,
  ScatterWidget,
  SingleBarHighlightMaxWidget,
  StepLineWidget,
  SummaryStatisticsWidget,
  TableWidget,
} from '../../Widgets';
import { CardWidgetProps, RenderWidgetProps, WidgetHeaderType } from '../CardWidget.model';
import { OnInputChangeEvent, RegisterEvents, Widget, WidgetProps, WidgetTypes } from '@kleeen/types';
import { ReactElement, useState } from 'react';
import { getWidgetContextName, useKleeenActions } from '@kleeen/react/hooks';

import CardWidget from '../CardWidget';
import { ErrorBoundaryComponent } from '@kleeen/react/components';
import GridAreaSection from '../../GridAreaSection/GridAreaSection';
import { WidgetHeader as StandardWidgetHeader } from './widget-header';
import { VisualizationSelector } from '../../VisualizationSelector/VisualizationSelector';
import WaterfallWidget from '../../Widgets/WaterfallWidget/WaterfallWidget';
import { isNilOrEmpty } from '@kleeen/common/utils';

interface TransformToWidgetComponentProps {
  CardWidgetElement?: (props: CardWidgetProps) => JSX.Element;
  disableHeightCalculation?: boolean;
  hideSaveAndClose?: boolean;
  onInputChange?: OnInputChangeEvent;
  registerEvents?: RegisterEvents;
  taskName: string;
  widget: Widget;
  WidgetHeader?: WidgetHeaderType;
}

export function TransformToWidgetComponent({
  CardWidgetElement = CardWidget,
  disableHeightCalculation = false,
  hideSaveAndClose,
  onInputChange,
  registerEvents,
  taskName,
  widget,
  WidgetHeader = StandardWidgetHeader,
}: TransformToWidgetComponentProps): ReactElement | null {
  const { viableSolutions } = widget;
  const hasViableSolutions = !isNilOrEmpty(viableSolutions);
  const [preferredWidgetIndex, setPreferredWidgetIndex] = useState(0);
  const widgetContext = getWidgetContextName({ taskName, widgetId: widget.id });
  const actions = useKleeenActions(widgetContext);

  function getChartTypeToRender(): WidgetTypes {
    if (
      hasViableSolutions &&
      preferredWidgetIndex < viableSolutions.length &&
      viableSolutions[preferredWidgetIndex]
    ) {
      return viableSolutions[preferredWidgetIndex];
    }
    return widget.chartType;
  }

  if (widget.chartType === WidgetTypes.CUSTOM) {
    return renderWidget({
      disableHeightCalculation,
      onInputChange,
      preferredWidget: getChartTypeToRender(),
      registerEvents,
      taskName,
      widget,
      WidgetHeader,
    });
  }

  return (
    <CardWidgetElement
      disableHeightCalculation={disableHeightCalculation}
      icon={false}
      Header={<WidgetHeader actions={actions} title={widget.title} widget={widget} />}
      selectedViz={preferredWidgetIndex}
      title={widget.title}
      widgetSelector={
        hasViableSolutions ? (
          <VisualizationSelector
            items={viableSolutions}
            onItemPress={setPreferredWidgetIndex}
            preferredWidgetIndex={preferredWidgetIndex}
          />
        ) : null
      }
    >
      <ErrorBoundaryComponent>
        {renderWidget({
          disableHeightCalculation,
          hideSaveAndClose,
          onInputChange,
          preferredWidget: getChartTypeToRender(),
          registerEvents,
          taskName,
          widget,
        })}
      </ErrorBoundaryComponent>
    </CardWidgetElement>
  );
}

//#region Private members
function renderWidget({
  disableHeightCalculation,
  hideSaveAndClose,
  onInputChange,
  preferredWidget,
  registerEvents,
  taskName,
  widget,
  WidgetHeader,
}: RenderWidgetProps): ReactElement | null {
  const { actions, attributes, id: widgetId, params, statisticalType } = widget;
  const widgetProps: WidgetProps = {
    actions,
    attributes,
    chartType: preferredWidget,
    params,
    taskName,
    widgetId,
  };

  switch (preferredWidget) {
    case WidgetTypes.AREA_GRADIENT:
    case WidgetTypes.AREA_MACRO_MICRO:
    case WidgetTypes.AREA_MASTER_DETAIL:
    case WidgetTypes.AREA_TREND:
    case WidgetTypes.AREA:
      return <AreaWidget {...widgetProps} />;

    case WidgetTypes.BUBBLE_CHART:
      return <BubbleChartWidget {...widgetProps} disableHeightCalculation={disableHeightCalculation} />;

    case WidgetTypes.COLUMN_BAR_DOUBLE_BAR:
    case WidgetTypes.COLUMN_BAR_MACRO_MICRO:
    case WidgetTypes.COLUMN_BAR_SEGMENTED:
    case WidgetTypes.COLUMN_BAR:
      return <ColumnBarWidget {...widgetProps} />;

    case WidgetTypes.CONFIG_INPUT_FIELD_USER_DEFINED:
      return (
        <ConfigInputWidget
          {...widgetProps}
          hideSaveAndClose={hideSaveAndClose}
          icon={false}
          onInputChange={onInputChange}
          registerEvents={registerEvents}
          statisticalType={statisticalType}
          title={widget.title}
        />
      );
    case WidgetTypes.CONFIG_TABLE:
      return (
        <ConfigTableWidget {...widgetProps} onInputChange={onInputChange} registerEvents={registerEvents} />
      );

    case WidgetTypes.CUSTOM: {
      return (
        <CustomWidgetContainer
          disableHeightCalculation={disableHeightCalculation}
          Header={<WidgetHeader title={widget.title} widget={widget} />}
          onInputChange={onInputChange}
          registerEvents={registerEvents}
          taskName={taskName}
          widget={widget}
        />
      );
    }

    case WidgetTypes.CUSTOM_ACTION:
      return <CustomActionWidget {...widgetProps} />;

    case WidgetTypes.DONUT:
      return <DonutWidget {...widgetProps} />;

    case WidgetTypes.DONUT_VARIANT:
      return <DonutVariantWidget {...widgetProps} />;

    case WidgetTypes.GAUGE_SEVERITY_LEVEL:
    case WidgetTypes.GAUGE_SEVERITY_SCORE:
    case WidgetTypes.GAUGE:
      return <GaugeWidget {...widgetProps} />;

    case WidgetTypes.LINE:
      return <LineWidget {...widgetProps} />;

    case WidgetTypes.PIE:
      return <PieWidget {...widgetProps} />;

    case WidgetTypes.POLAR_AREA:
      return <PolarAreaWidget {...widgetProps} />;

    case WidgetTypes.POSITIVE_NEGATIVE_AREA:
      return <PositiveNegativeAreaWidget {...widgetProps} />;

    case WidgetTypes.READ_ONLY_TEXT:
      return <ReadOnlyTextWidget {...widgetProps} />;

    case WidgetTypes.SCATTER:
      return <ScatterWidget {...widgetProps} />;

    case WidgetTypes.SIMPLE_LIST_RANKED:
      return <RankedListWidget {...widgetProps} />;

    /** TODO: Add subtype as in COLUMN_BAR */
    case WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX:
      return <SingleBarHighlightMaxWidget {...widgetProps} />;

    case WidgetTypes.STEP_LINE:
      return <StepLineWidget {...widgetProps} />;

    case WidgetTypes.SUMMARY:
    case WidgetTypes.SUMMARY_STATISTICS:
      return <SummaryStatisticsWidget {...widgetProps} />;

    case WidgetTypes.SIMPLE_LIST:
      return <TableWidget {...widgetProps} />;

    case WidgetTypes.TABLE:
      return (
        <div className="report-table-height">
          <GridAreaSection
            className="report-table-height"
            columnWidth={100}
            entityId={widget.attributes[0].id.toString()}
            entityName={widget.params.baseModel}
            key={`data-view-display-section-grid-area-section-${widget.id}`}
            sortableColumns={true}
            taskName={taskName}
            widget={widget}
          />
        </div>
      );

    case WidgetTypes.WATERFALL:
      return <WaterfallWidget {...widgetProps} />;

    default:
      return null;
  }
}
//#endregion
