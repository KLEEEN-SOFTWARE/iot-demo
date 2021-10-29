import {
  AggregationType,
  ContextMenuDefaultSectionOrder,
  ContextMenuInvestigationSectionOrder,
} from '@kleeen/types';
import { ContextMenuProps, FormattedContextDataPoint } from './context-menu.model';
import { Menu, MenuTitle } from './contextual-menu.style';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { isSingleCardinalityDataPoint, isSingleCardinalityTransformation } from '@kleeen/frontend/utils';
import { useHoverIntent, useIsInvestigation, useTheme } from '@kleeen/react/hooks';

import { contextMenuComponentBySection } from './components';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useDataPointsWithFormattedValue } from './hooks';

export function KsContextMenu({
  anchorEl,
  autoClose,
  dataPoints,
  onClose,
  widgetContextParams,
  widgetId,
}: ContextMenuProps) {
  const formattedDataPoints = useDataPointsWithFormattedValue({ dataPoints });
  const { ref } = useHoverIntent<HTMLUListElement>({
    delayOnEnter: 0,
    onMouseEnterFn: clearTimeOut,
    onMouseLeaveFn: onClose,
  });
  const timerRef = useRef(null);
  const [dataPointsToShow, setDataPointsToShow] = useState<FormattedContextDataPoint[]>([]);
  const [menuTitle, setMenuTitle] = useState<ReactNode>();
  const { themeClass } = useTheme();
  const isInvestigationPage = useIsInvestigation();

  // TODO: @cafe Include the preview option here as well
  const sectionsToShow = isInvestigationPage
    ? ContextMenuInvestigationSectionOrder
    : ContextMenuDefaultSectionOrder;

  useEffect(() => {
    if (autoClose) {
      timerRef.current = setTimeout(() => {
        onClose();
      }, 2000);

      return () => {
        clearTimeout(timerRef.current);
      };
    }
  }, []);

  useEffect(() => {
    if (isNilOrEmpty(dataPoints)) {
      return;
    }

    const tempFilteredDataPoints = formattedDataPoints
      .filter(({ ignoreInContextMenu = false }) => !ignoreInContextMenu)
      .sort((a, b) => {
        const aCardinalityWeight = Number(
          isSingleCardinalityTransformation(a.attribute.aggregation as AggregationType),
        );
        const bCardinalityWeight = Number(
          isSingleCardinalityTransformation(b.attribute.aggregation as AggregationType),
        );
        return bCardinalityWeight - aCardinalityWeight;
      });

    setDataPointsToShow(tempFilteredDataPoints);
  }, [formattedDataPoints?.length]);

  useEffect(() => {
    if (isNilOrEmpty(dataPointsToShow)) {
      return;
    }

    const [firstDataPoint] = dataPointsToShow;
    const isSingleCardinality = isSingleCardinalityDataPoint(firstDataPoint);

    const newMenuTitle = `${firstDataPoint.formattedValue} ${
      !isSingleCardinality ? firstDataPoint.attribute.name : ''
    }`;
    setMenuTitle(newMenuTitle);
  }, [dataPointsToShow?.length]);

  function clearTimeOut() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  return (
    <Menu
      MenuListProps={{ ref }}
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'center',
      }}
      className={themeClass}
      data-testid="context-menu"
      getContentAnchorEl={null}
      id="context-menu"
      onClose={onClose}
      open={Boolean(anchorEl)}
    >
      <MenuTitle>{menuTitle}</MenuTitle>
      {sectionsToShow.map((sectionToShow) => {
        const SectionComponent = contextMenuComponentBySection[sectionToShow];

        if (isNilOrEmpty(SectionComponent)) {
          return;
        }

        return (
          <SectionComponent
            dataPoints={formattedDataPoints}
            dataPointsToShow={dataPointsToShow}
            handleClose={onClose}
            key={sectionToShow}
            widgetContextParams={widgetContextParams}
            widgetId={widgetId}
          />
        );
      })}
    </Menu>
  );
}
