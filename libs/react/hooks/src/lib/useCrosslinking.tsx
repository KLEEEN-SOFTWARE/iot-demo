import { Attribute, Cell } from '@kleeen/types';

import camelcase from 'lodash.camelcase';
import { useHistory } from 'react-router-dom';

const defaultResolver = (name: string, slug: string, id: string) => `/profile/${slug}?${name}=${id}`;

export enum AttributeType {
  XOR = 'xor',
}

export function useCrosslinking() {
  const history = useHistory();

  function crosslink(slug: string, entity: Cell, attribute: Attribute, openNewTab?: boolean) {
    const paramName =
      attribute.dataType === AttributeType.XOR ? entity?.$metadata?.entityType : attribute.name;
    const currentCrossLinking = attribute?.crossLinking?.find(({ slug: localSlug }) => localSlug === slug);
    const urlResolver = currentCrossLinking?.customUrlResolver || defaultResolver;
    const urlToNavigate = urlResolver(camelcase(paramName), slug, entity?.id, history.location);
    if (openNewTab) {
      window.open(urlToNavigate);
    } else {
      history.push(urlToNavigate);
    }
  }

  return { crosslink };
}
