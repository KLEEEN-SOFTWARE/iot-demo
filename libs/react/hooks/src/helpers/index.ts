import { Link } from '@kleeen/types';

export function getWidgetContextName({ taskName, widgetId }: { taskName: string; widgetId: string }): string {
  return `${taskName}_${widgetId}`;
}

export const isLinkFilterableByEntityType = (entityType: string, link: Link): boolean =>
  !link.entityType || link.entityType === entityType;
