import { Glow } from '@codaworks/react-glow';
import { map } from 'lodash';
import React from 'react';

import ICatalogItem from '@/types/CatalogItem';

import Feature from './Feature';

interface IProps {
  item: ICatalogItem;
}

export default function Features({ item }: IProps) {
  return (
    <Glow>
      <div className='glow space-y-3 rounded-md border-2 border-border p-6'>
        <h3>Ключові особливості</h3>
        {map(item.features, (feature) => (
          <Feature key={feature.id} feature={feature} />
        ))}
      </div>
    </Glow>
  );
}
