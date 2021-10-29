import { ActionType, ThingAction, WidgetScope } from '@kleeen/types';

import { LibraryWidget } from '@kleeen/widgets';
import { State } from '@kleeen/react/state-management';
import { getThingById } from '@kleeen/things';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useKleeenContext } from './useKleeenContext';

const INVESTIGATE_SUFFIX = '-investigation-';

export type AddInvestigationWidgetProperties = (widget: LibraryWidget) => LibraryWidget;

export function addInvestigationWidgetProperties({
  index,
  widget,
}: {
  index: number;
  widget: LibraryWidget;
}): LibraryWidget {
  return {
    ...widget,
    actions: getInvestigationSimpleActions(widget.entityId, widget.scope),
    id: `${widget.id}${INVESTIGATE_SUFFIX}${index}`,
  };
}

// This function is to remove the suffix from widgets that need the original id
// TODO: @marimba we should use another key for those cases
export function removeInvestigateSuffix(widgetId: string) {
  return widgetId.substring(0, widgetId.indexOf(INVESTIGATE_SUFFIX));
}

export function useAddInvestigateWidgetProperties(): AddInvestigationWidgetProperties {
  const { investigationWidgets } = useKleeenContext<State.InvestigationState>('ksInvestigation');

  return (widget: LibraryWidget) =>
    isNilOrEmpty(investigationWidgets)
      ? widget
      : addInvestigationWidgetProperties({ widget, index: investigationWidgets?.length });
}

function getInvestigationSimpleActions(entityId: number, scope: WidgetScope): ThingAction[] {
  if (scope !== WidgetScope.Single) return [];

  const isNotDeleteAdd = (e: ThingAction) => ![ActionType.Add, ActionType.Delete].includes(e.type);
  const isCustomModal = (e: ThingAction) => !e.isCustomModal;

  const thing = getThingById(entityId);
  const actions = thing.actions.filter(isNotDeleteAdd).filter(isCustomModal);

  return actions;
}
