import Image from 'next/image';
import React from 'react';

import { CarouselItem } from '../ui/carousel';

export default function CommandCard() {
  return (
    <CarouselItem className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
      <div className='space-y-12 rounded-md border-2 border-border p-8'>
        <Image
          src='/command-demo.jpg'
          alt='demo'
          width={360}
          height={270}
          className='w-full rounded-sm object-contain'
        />
        <div className='text-center'>
          <h3 className='text-xl font-semibold'>Max Mitchell</h3>
          <p className='text-sm text-muted-foreground'>Founder</p>
        </div>
      </div>
    </CarouselItem>
  );
}
