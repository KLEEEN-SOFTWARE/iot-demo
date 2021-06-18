import './CardSection.scss';

import { CardSectionLayout, CardSectionProps, RenderChildrenProps, Widget } from './CardWidget.model';
import { ReactElement, ReactNode } from 'react';

import { AccessControl } from '@kleeen/core-react';
import { TransformToWidgetComponent } from './components';
import classNames from 'classnames';
import { roleAccessKeyTag } from '@kleeen/common/utils';

export function CardSection({
  cardSectionLayout = CardSectionLayout.Masonry,
  children,
  hideSaveAndClose,
  justifyContent = 'flex-start',
  onInputChange,
  registerEvents,
  taskName,
  widgets,
}: CardSectionProps): ReactElement {
  return (
    <div
      className={classNames('card-section', cardSectionLayout)}
      style={{ justifyContent }}
      key={`card-section-${taskName}`}
    >
      {renderChildren({ taskName, widgets, children, registerEvents, hideSaveAndClose, onInputChange })}
    </div>
  );
}

export default CardSection;

//#region Private members
function addCurrentWidgetTypeToViableSolutions(widget: Widget): Widget {
  const resultWidget = { ...widget };

  if (resultWidget.viableSolutions.length && !resultWidget.viableSolutions.includes(resultWidget.chartType)) {
    resultWidget.viableSolutions.unshift(resultWidget.chartType);
  }

  return resultWidget;
}

function renderChildren({
  children,
  hideSaveAndClose,
  onInputChange,
  registerEvents,
  taskName,
  widgets,
}: RenderChildrenProps): JSX.Element | ReactNode {
  if (widgets) {
    return widgets.map((widget: Widget) => {
      const widgetCompleted = addCurrentWidgetTypeToViableSolutions(widget);

      return (
        <AccessControl
          id={roleAccessKeyTag(`${taskName}.widgets.${widget.id}`)}
          key={`card-section-widget-${widget.id}`}
        >
          <TransformToWidgetComponent
            hideSaveAndClose={hideSaveAndClose}
            key={`card-section-widget-${widget.id}`}
            onInputChange={onInputChange}
            registerEvents={registerEvents}
            taskName={taskName}
            widget={widgetCompleted}
          />
        </AccessControl>
      );
    });
  } else {
    return children;
  }
}
//#endregion
