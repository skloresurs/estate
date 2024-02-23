'use client';

import Autoplay from 'embla-carousel-autoplay';
import { map } from 'lodash';
import React from 'react';

import ICatalogItem from '@/types/CatalogItem';

import { Carousel as CarouselPrimitive, CarouselContent, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import CarouselItem from './CarouselItem';

interface IProps {
  item: ICatalogItem;
}

export default function Carousel({ item }: IProps) {
  return (
    <div className='rounded-md border-2 border-border bg-muted p-2'>
      <CarouselPrimitive plugins={[Autoplay({ delay: 8000, stopOnFocusIn: true })]} opts={{ loop: true }}>
        <CarouselContent>
          {map(item.images, (image) => (
            <CarouselItem key={image.id} item={image} />
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-4' />
        <CarouselNext className='right-4' />
      </CarouselPrimitive>
    </div>
  );
}
