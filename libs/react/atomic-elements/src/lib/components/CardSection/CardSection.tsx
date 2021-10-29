import './CardSection.scss';

import { CardSectionLayout, Widget } from '@kleeen/types';
import { CardSectionProps, RenderChildrenProps } from './CardWidget.model';
import { ReactElement, ReactNode } from 'react';
import { isNilOrEmpty, roleAccessKeyTag } from '@kleeen/common/utils';

import { AccessControl } from '@kleeen/core-react';
import { KsAnimations } from '../animations/animations';
import { TransformToWidgetComponent } from './components';
import classNames from 'classnames';

const bem = 'ks-card-section';

export function CardSection({
  animation,
  cardSectionLayout = CardSectionLayout.Masonry,
  children,
  hideSaveAndClose,
  justifyContent = 'flex-start',
  onInputChange,
  registerEvents,
  taskName,
  widgets,
  WidgetHeader,
}: CardSectionProps): ReactElement {
  return (
    <div
      className={classNames(bem, 'card-section', cardSectionLayout)}
      key={`card-section-${taskName}`}
      style={{ justifyContent }}
    >
      {renderChildren({
        animation,
        cardSectionLayout,
        children,
        hideSaveAndClose,
        onInputChange,
        registerEvents,
        taskName,
        widgets,
        WidgetHeader,
      })}
    </div>
  );
}

export default CardSection;

//#region Private members
function addCurrentWidgetTypeToViableSolutions(widget: Widget): Widget {
  const resultWidget = JSON.parse(JSON.stringify(widget)); // FIXME: Avoid cloning ab object using this hack.

  // TODO: @jcvalerio this method have to be refactored in a single place duplicated with libs/react/atomic-elements/src/lib/components/CardSection/CardSection.tsx
  if (isNilOrEmpty(resultWidget.viableSolutions)) {
    return resultWidget;
  }

  if (resultWidget.viableSolutions.length && !resultWidget.viableSolutions.includes(resultWidget.chartType)) {
    resultWidget.viableSolutions.unshift(resultWidget.chartType);
  }

  return resultWidget;
}

function renderChildren({
  animation,
  cardSectionLayout,
  children,
  hideSaveAndClose,
  onInputChange,
  registerEvents,
  taskName,
  widgets,
  WidgetHeader,
}: RenderChildrenProps): JSX.Element | ReactNode {
  if (isNilOrEmpty(widgets)) return children;

  const disableHeightCalculation = cardSectionLayout === CardSectionLayout.SingleWideColumn;

  return widgets.map((widget: Widget, index) => {
    const widgetCompleted = addCurrentWidgetTypeToViableSolutions(widget);
    const id = roleAccessKeyTag(`${taskName}.widgets.${widget.id}`);
    // *the key cannot be base on the index because the item is inserted first
    const widgetIndex = widgets.length - index;
    const key = `card-section-widget-${widget.id}-${widgetIndex}`;
    const noAnimationIf = !widget.isNewWidget || index != 0;

    return (
      <AccessControl id={id} key={key}>
        <KsAnimations.AnimationGrow animation={animation} disabled={noAnimationIf}>
          <TransformToWidgetComponent
            disableHeightCalculation={disableHeightCalculation}
            hideSaveAndClose={hideSaveAndClose}
            key={key}
            onInputChange={onInputChange}
            registerEvents={registerEvents}
            taskName={taskName}
            widget={widgetCompleted}
            WidgetHeader={WidgetHeader}
          />
        </KsAnimations.AnimationGrow>
      </AccessControl>
    );
  });
}
