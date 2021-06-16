import { KeyValue } from '../key-value';
import { Loader } from '@kleeen/react/components';
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
  const [mainStatistic, ...statistics] = isNilOrEmpty(data) ? [] : data;
  const [mainAttribute, ...restAttribute] = attributes;

  if (isNilOrEmpty(data)) {
    return <Loader />;
  }

  const { elements: mainElements, format: mainAttributeFormat, formatType: mainFormatType } = mainAttribute;
  const {
    format: mainBackendFormat,
    results: mainResults,
    transformation: mainTransformation,
  } = mainStatistic;
  const mainFormat = getFormat({ attributeFormat: mainAttributeFormat, backendFormat: mainBackendFormat });
  const { displayComponent: mainElement } = mainElements;
  const MainDisplayComponent = getDisplayElement(mainElement);

  return (
    <div className={classes.content}>
      <div className={'primary'}>
        <KeyValue
          layoutProps={layoutProps}
          key={`${mainAttribute.id}-${mainTransformation}`}
          keyComponent={mainAttribute.label}
          highlighted
          valueComponent={
            <MainDisplayComponent
              attribute={mainAttribute}
              element={mainElement}
              format={mainFormat}
              formatType={mainFormatType}
              transformation={mainTransformation}
              highlighted
              value={{
                displayValue: mainResults,
              }}
            />
          }
        />
      </div>

      {!isNilOrEmpty(restAttribute) && (
        <SummaryLayout layoutProps={layoutProps} totalElements={restAttribute.length}>
          {statistics.map((statistic: TransformationResponse, index: number) => {
            const attribute = restAttribute[index];
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
      )}
    </div>
  );
}
