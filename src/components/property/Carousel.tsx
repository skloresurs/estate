'use client';

import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

import { Carousel as CarouselPrimitive, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';
import CarouselItem from './CarouselItem';

export default function Carousel() {
  return (
    <div className='rounded-md border-2 border-border bg-muted p-2'>
      <CarouselPrimitive plugins={[Autoplay({ delay: 8000, stopOnFocusIn: true })]} opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </CarouselContent>
        <CarouselPrevious className='left-4' />
        <CarouselNext className='right-4' />
      </CarouselPrimitive>
    </div>
  );
}
