import { useKleeenActions, useKleeenContext, useUrlQueryParams } from '@kleeen/react/hooks';
import camelcase from 'lodash.camelcase';

import { TextFormatter } from '@kleeen/react/components';
import { pathOr } from 'ramda';
import { useEffect } from 'react';

interface DisplayValueTitleProps {
  objectValue: string;
  taskName: string;
  formatType?: string;
}

export function DisplayValueTitle({
  objectValue,
  taskName,
  formatType,
}: DisplayValueTitleProps): JSX.Element {
  const attributes = [{ name: objectValue, aggregation: 'noAggregation' }];

  const { getRequest } = useKleeenActions(taskName);
  const widgetData = useKleeenContext(taskName);
  const { paramsBasedOnRoute } = useUrlQueryParams();

  const getDisplayValue = pathOr('', ['entity', `${objectValue}`, 'displayValue']);
  const displayValue = getDisplayValue(widgetData);
  const currentEntityValue = paramsBasedOnRoute[camelcase(objectValue)];

  useEffect(() => {
    getRequest({
      entity: objectValue,
      params: {
        taskName,
        formatType,
        baseModel: objectValue,
        attributes,
        value: currentEntityValue,
        id: currentEntityValue,
      },
    });
  }, []);

  const format = pathOr({}, ['data', 'format', objectValue], widgetData);

  if (!widgetData) {
    return <>{'...'}</>;
  }

  return (
    <TextFormatter format={format} formatType={formatType} transformation="selfSingle">
      {displayValue}
    </TextFormatter>
  );
}
