import Image from 'next/image';
import React from 'react';

import { CarouselItem as CarouselItemPrimitive } from '../ui/carousel';

export default function CarouselItem() {
  return (
    <CarouselItemPrimitive className='md:basis-1/2'>
      <Image src='/demo-card.jpg' width={1920} height={1080} className='aspect-video w-full rounded-md' alt='demo' />
    </CarouselItemPrimitive>
  );
}
