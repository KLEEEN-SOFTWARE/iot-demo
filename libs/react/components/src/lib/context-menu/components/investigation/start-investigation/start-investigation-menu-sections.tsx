import {
  ContextMenuClickHandler,
  ContextMenuSectionItem,
  ContextMenuSectionProps,
} from '../../../context-menu.model';
import {
  INVESTIGATION_URL_PARAM,
  getEncodedInvestigationCard,
  getInitialInvestigationCards,
} from '@kleeen/investigations';
import { useEffect, useState } from 'react';
import { useIsInvestigation, useUrlQueryParams } from '@kleeen/react/hooks';

import { ContextMenuItemView } from '../../context-menu-item';
import { ContextMenuSection } from './../../context-menu-section';
import { InvestigationItem } from '../investigation-item.model';
import { KsManagedModulePaths } from '@kleeen/types';
import { Translate } from '@kleeen/core-react';
import { getInvestigationSectionLabel } from '../utils';
import { getStartInvestigationItems } from './start-investigation-items';
import { isNilOrEmpty } from '@kleeen/common/utils';

const DISABLE_INVESTIGATION = true;

export function KsContextMenuStartInvestigationSection({
  dataPoints,
  dataPointsToShow,
  handleClose,
  widgetContextParams,
  widgetId,
}: ContextMenuSectionProps) {
  const isInvestigationPage = useIsInvestigation();
  const [investigationSections, setInvestigationSections] = useState<ContextMenuSectionItem[]>([]);
  const { paramsBasedOnRoute } = useUrlQueryParams({
    useNestedObjects: true,
  });

  useEffect(() => {
    if (isNilOrEmpty(dataPointsToShow) || DISABLE_INVESTIGATION) {
      return;
    }

    const tempInvestigationSections = dataPointsToShow.reduce(
      (acc: ContextMenuSectionItem[], dataPoint, dataPointIndex) => {
        const investigationItems = getStartInvestigationItems({
          dataPoint,
          dataPoints,
          paramsBasedOnRoute,
          widgetContextParams,
        });

        if (isNilOrEmpty(investigationItems)) {
          return acc;
        }

        const { stringTranslationKey, values } = getInvestigationSectionLabel(dataPoint);

        const investigationSection: ContextMenuSectionItem = {
          key: `start-investigation-label-${dataPointIndex}`,
          label: <Translate id={stringTranslationKey} type="html" values={values} />,
          menuItems: investigationItems.map((item, itemIndex) => {
            return {
              handleClick: getStartInvestigationClickHandler({
                handleClose,
                item,
                widgetId,
              }),
              key: `start-investigation-${itemIndex}`,
              label: item.label,
              roleAccessKey: `start-investigation`,
            };
          }),
        };

        acc.push(investigationSection);

        return acc;
      },
      [],
    );

    setInvestigationSections(tempInvestigationSections);
  }, [dataPointsToShow?.length, isInvestigationPage]);

  return (
    <>
      {investigationSections.map((section) => {
        const { key, menuItems } = section;

        return (
          <ContextMenuSection key={key} section={section}>
            {menuItems.map((item, index) => (
              <ContextMenuItemView key={item.key} index={index} item={item} />
            ))}
          </ContextMenuSection>
        );
      })}
    </>
  );
}

//#region Private Members
interface StartInvestigationItemClickHandler extends ContextMenuClickHandler<InvestigationItem> {
  widgetId?: string;
}

function getStartInvestigationClickHandler({
  handleClose,
  item,
  widgetId,
}: StartInvestigationItemClickHandler) {
  return () => () => {
    const { investigationDataPoint, investigationFilters, pageFilters } = item;
    const initialInvestigationCard = getInitialInvestigationCards({
      investigationDataPoint,
      investigationFilters,
      originWidgetId: widgetId,
      pageFilters,
    });
    const encodedInvestigationCard = getEncodedInvestigationCard(initialInvestigationCard);
    const investigateURL = `${KsManagedModulePaths.Investigate}?${INVESTIGATION_URL_PARAM}=${encodedInvestigationCard}`;

    window.open(investigateURL);
    handleClose();
  };
}
//#endregion
