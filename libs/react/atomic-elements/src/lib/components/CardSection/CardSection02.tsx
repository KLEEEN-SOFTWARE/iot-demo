import './CardSection02.scss';

import { CardSectionProps, RenderChildrenProps } from './CardWidget.model';
import React, { createRef, ReactElement, ReactNode, useRef } from 'react';
import { TableContent, TransformToWidgetComponent } from './components';
import { isNilOrEmpty, roleAccessKeyTag } from '@kleeen/common/utils';

import { CardWidget02 } from './CardWidget02';
import { AccessControlPermission, Widget } from '@kleeen/types';
import classnames from 'classnames';
import { useAccessControlCheckerByIds } from '@kleeen/core-react';

const bem = 'ks-card-section-02';

/**
 * viableSolutions needs the current chartType included
 * adding this only if there is a existing alternative solution
 * added failsafe to prevent multiple solutions of the same chartType
 */
const addCurrentWidgetTypeToViableSolutions = (widget: Widget): Widget => {
  // FIXME: avoid cloning using this hack.
  const resultWidget = JSON.parse(JSON.stringify(widget));

  // TODO: @jcvalerio this method have to be refactored in a single place duplicated with libs/react/atomic-elements/src/lib/components/CardSection/CardSection02.tsx
  if (isNilOrEmpty(resultWidget.viableSolutions)) {
    return resultWidget;
  }

  if (resultWidget.viableSolutions.length && !resultWidget.viableSolutions.includes(resultWidget.chartType)) {
    resultWidget.viableSolutions.unshift(resultWidget.chartType);
  }

  return resultWidget;
};

function renderChildren({
  children,
  hideSaveAndClose,
  onInputChange,
  registerEvents,
  taskName,
  widgets,
  widgetsRefs,
}: RenderChildrenProps): JSX.Element | ReactNode {
  if (widgets && !children) {
    return widgets.map((widget: Widget, widgetIndex) => {
      const widgetCompleted = addCurrentWidgetTypeToViableSolutions(widget);

      return (
        <div ref={widgetsRefs[widget.id]} id={widget?.id?.toString()}>
          <TransformToWidgetComponent
            CardWidgetElement={CardWidget02}
            hideSaveAndClose={hideSaveAndClose}
            // FIXME: The index should not be used as key.
            key={`card-section-widget-${widget.id}-${widgetIndex}`}
            onInputChange={onInputChange}
            registerEvents={registerEvents}
            taskName={taskName}
            widget={widgetCompleted}
          />
        </div>
      );
    });
  }

  if (typeof children === 'function') {
    return children({ widgetsRefs });
  }

  return children;
}

export const CardSection02 = ({
  children,
  containerId,
  fullWidth,
  hideSaveAndClose,
  hideTOC,
  justifyContent = 'flex-start',
  onInputChange,
  registerEvents,
  skipAccessControlCheck = false,
  taskName,
  widgets = [],
}: CardSectionProps): ReactElement => {
  const widgetsRefs = {};
  let filteredWidgets = [];

  const refsArray = useRef([]);
  refsArray.current = widgets.map((widget) => refsArray.current[widget.id] ?? createRef());

  if (!hideTOC) {
    widgets?.forEach((widget, i) => {
      widgetsRefs[widget.id] = refsArray.current[i];
    });
  }

  if (!skipAccessControlCheck) {
    const widgetIds = widgets.map((widget) => ({
      id: widget.id,
      roleId: roleAccessKeyTag(`${taskName}.WIDGETS.${widget.id}`),
    }));
    const permissions = useAccessControlCheckerByIds(widgetIds);

    filteredWidgets = widgets.filter((widget) => permissions[widget.id] === AccessControlPermission.SHOW);
  }

  return (
    <div
      className={classnames(bem, 'card-section02', { 'hide-toc': hideTOC, 'full-width': fullWidth })}
      key={`card-section-${taskName}`}
      style={{ justifyContent }}
    >
      {!hideTOC && (
        <TableContent widgets={filteredWidgets} widgetsRefs={widgetsRefs} containerId={containerId} />
      )}
      <div
        className={classnames(`${bem}__widgets`, 'card-widgets-section', { 'full-width': fullWidth })}
        data-testid="card-widgets-section"
      >
        {renderChildren({
          children,
          hideSaveAndClose,
          onInputChange,
          registerEvents,
          taskName,
          widgets: filteredWidgets,
          widgetsRefs,
        })}
      </div>
    </div>
  );
};

export default React.memo(CardSection02);
