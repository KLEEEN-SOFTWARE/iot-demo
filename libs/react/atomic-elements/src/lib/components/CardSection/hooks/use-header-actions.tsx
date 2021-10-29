import { useEffect, useState } from 'react';

import { ActionsDropdown } from '../components/actions-dropdown/actions-dropdown';
import { Widget } from '@kleeen/types';
import { isNotNilOrEmpty } from '@kleeen/common/utils';

interface UseHeaderActionsProps {
  widget: Widget;
}

const nameUseKleeenActions = 'ksInvestigation';
const taskName = 'investigation';

export function useHeaderActions({ widget }: UseHeaderActionsProps): JSX.Element | null {
  const [headerActionsComponent, setGranularityDropdown] = useState<JSX.Element>(null);

  useEffect(() => {
    if (isNotNilOrEmpty(widget?.actions)) {
      setGranularityDropdown(
        <ActionsDropdown nameUseKleeenActions={nameUseKleeenActions} taskName={taskName} widget={widget} />,
      );
    }
  }, [widget.actions?.length]);

  return headerActionsComponent;
}
