import Image from 'next/image';
import React from 'react';

import { env } from '@/env.mjs';
import IStrapiImage from '@/types/StrapiImage';

import { CarouselItem as CarouselItemPrimitive } from '../../ui/carousel';

interface IProps {
  item: IStrapiImage;
}

export default function CarouselItem({ item }: IProps) {
  return (
    <CarouselItemPrimitive className='md:basis-1/2'>
      <Image
        src={`${env.NEXT_PUBLIC_CMS_URL}${item.url}`}
        width={1920}
        height={1080}
        className='aspect-video w-full rounded-md'
        alt='demo'
      />
    </CarouselItemPrimitive>
  );
}
