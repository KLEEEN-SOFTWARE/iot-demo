import React, { ReactElement } from 'react';
import { useAutoRefresh } from '@kleeen/react/hooks';
import { Subscription } from 'rxjs';

interface KsAutoRefreshControlProps {
  taskName: string;
  onRefresh: Function;
}

export function KsAutoRefreshControl(props: KsAutoRefreshControlProps): ReactElement {
  const { autoRefresh$ } = useAutoRefresh();

  let autoRefreshSubscription: Subscription;

  React.useEffect(() => {
    autoRefreshSubscription = autoRefresh$.subscribe((workflows: string | string[]) => {
      if (workflows.includes(props.taskName)) props.onRefresh();
    });

    return () => autoRefreshSubscription.unsubscribe();
  }, []);

  return <></>;
}

export default KsAutoRefreshControl;
