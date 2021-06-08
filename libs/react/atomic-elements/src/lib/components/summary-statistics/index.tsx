import { KeyValue } from '../key-value';
import { SummaryLayout } from '../summary-layout';
import { SummaryStatisticsProps } from './summary-statistics.model';
import { TransformationResponse } from '@kleeen/types';
import { getDisplayElement } from '../display-element/display-element-catalog';
import { getFormat } from '../../utils';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './summary-statistics.styles';

const layoutProps = {
  columnGap: 55,
  containerPadding: 0,
  keyValuePadding: 21,
  keyWidth: 144,
  valueWidth: 144,
};

export function SummaryStatistics({ attributes, data }: SummaryStatisticsProps) {
  const classes = useStyles();

  const statistics = isNilOrEmpty(data) ? [] : data;

  return (
    <div className={classes.content}>
      <SummaryLayout layoutProps={layoutProps} totalElements={attributes.length}>
        {statistics.map((statistic: TransformationResponse, index: number) => {
          const attribute = attributes[index];
          const { elements, format: attributeFormat, formatType } = attribute;
          const { format: backendFormat, results, transformation } = statistic;

          const format = getFormat({ attributeFormat, backendFormat });

          const { displayComponent } = elements;
          const DisplayComponent = getDisplayElement(displayComponent);

          return (
            <KeyValue
              layoutProps={layoutProps}
              key={`${attribute.id}-${transformation}`}
              keyComponent={attribute.label}
              valueComponent={
                <DisplayComponent
                  attribute={attribute}
                  element={displayComponent}
                  format={format}
                  formatType={formatType}
                  transformation={transformation}
                  value={{
                    displayValue: results,
                  }}
                />
              }
            />
          );
        })}
      </SummaryLayout>
    </div>
  );
}
