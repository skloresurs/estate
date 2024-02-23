import { Glow } from '@codaworks/react-glow';
import { BedDouble, Box } from 'lucide-react';
import React from 'react';

import ICatalogItem from '@/types/CatalogItem';

import { Separator } from '../../ui/separator';
import DescriptionItem from './DescriptionItem';

interface IDescriptionItem {
  item: ICatalogItem;
}

export default function Descriptions({ item }: IDescriptionItem) {
  return (
    <Glow>
      <div className='glow break-inside-avoid-column rounded-md border-2 border-border p-6'>
        <h3>Опис</h3>
        <p>{item.description}</p>
        <Separator className='mb-4 mt-6 glow:bg-white' />
        <div className='flex flex-wrap items-center justify-between gap-3 text-sm'>
          <DescriptionItem icon={<BedDouble />} title='Bedrooms' value={item.bedrooms.toString()} />
          <DescriptionItem icon={<Box />} title='Area' value={`${item.area} m³`} />
        </div>
      </div>
    </Glow>
  );
}
