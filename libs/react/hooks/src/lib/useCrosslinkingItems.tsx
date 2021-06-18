import { Attribute, Cell } from '@kleeen/types';
import { useEffect, useState } from 'react';

import { flatten } from 'ramda';
import { isLinkFilterableByEntityType } from '../helpers';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useCrosslinking } from './useCrosslinking';
import { Translate } from '@kleeen/core-react';

type CrossLinkItem = {
  handleClick: (item: CrossLinkItem) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  label: string;
  key: string;
  roleAccessKey: string;
  slug: string;
};

export function useCrossLinkingItems({
  handleClose,
  attr,
  cell,
}: {
  handleClose: () => void;
  attr: Attribute;
  cell: Cell;
}): CrossLinkItem[] {
  const { crosslink } = useCrosslinking();
  const cellEntityType = cell?.$metadata && cell.$metadata.entityType;

  const [crossLinkItems, setCrossLinkItems] = useState([]);

  useEffect(generateCrossLinks, [cell?.id, attr?.name]);

  const handleClick = ({ openNewTab }: { openNewTab: boolean }) => ({ slug }) => (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    e.preventDefault();
    handleClose();
    crosslink(slug, cell, attr, openNewTab);
  };

  function generateCrossLinks() {
    if (isNilOrEmpty(attr?.crossLinking)) {
      setCrossLinkItems([]);
    } else {
      const tempCrossLinkItems = attr?.crossLinking
        .filter((link) => isLinkFilterableByEntityType(cellEntityType, link))
        .map((link) => [
          {
            handleClick: handleClick({ openNewTab: true }),
            label: <Translate id="app.contextMenu.goToNewTab" type="html" values={{ link: link.title }} />,
            key: `${link?.slug}${link?.title}`,
            roleAccessKey: `navigation.${link?.title}`,
            slug: link.slug,
          },
          {
            handleClick: handleClick({ openNewTab: false }),
            label: <Translate id="app.contextMenu.goTo" type="html" values={{ link: link.title }} />,
            key: `new.tab.${link?.slug}${link?.title}`,
            roleAccessKey: `navigation.${link?.title}`,
            slug: link.slug,
          },
        ]);
      setCrossLinkItems(flatten(tempCrossLinkItems));
    }
  }

  return crossLinkItems;
}
