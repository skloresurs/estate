import { Bath, BedDouble, Box } from 'lucide-react';
import React from 'react';

import { Separator } from '../ui/separator';
import DescriptionItem from './DescriptionItem';

export default function Descriptions() {
  return (
    <div className='break-inside-avoid-column rounded-md border-2 border-border p-6'>
      <h3>Опис</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Separator className='mb-4 mt-6' />
      <div className='flex flex-wrap items-center justify-between gap-3 text-sm'>
        <DescriptionItem icon={<BedDouble />} title='Bedrooms' value='02' />
        <DescriptionItem icon={<Bath />} title='Bathrooms' value='02' />
        <DescriptionItem icon={<Box />} title='Area' value='200 m³' />
      </div>
    </div>
  );
}
