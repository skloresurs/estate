'use client';

import { Glow } from '@codaworks/react-glow';
import { BedDouble, Box, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import moneyFormat from '@/libs/text-formats';
import ICatalogItem from '@/types/CatalogItem';

import Animation from '../Animation';
import { buttonVariants } from '../ui/button';
import TagWithIcon from './TagWithIcon';

interface IProps {
  className?: string;
  item: ICatalogItem;
}

export default function HomeCard({ className, item }: IProps) {
  return (
    <Animation animateIn='animate__slideInUp' offset={600} animateOnce animatePreScroll>
      <Glow>
        <div className={twMerge('glow overflow-hidden rounded-md border-2', className)}>
          <Image src='/demo-card.jpg' alt='demo-card' width={360} height={270} className='aspect-video w-full' />
          <div className='space-y-4 px-6 py-4'>
            <h2>{item.title}</h2>
            <span className='small'>{item.shortDescription}</span>
            <div className='flex flex-wrap gap-6 gap-y-2'>
              <TagWithIcon icon={<BedDouble />} description={`Bedrooms: ${item.bedrooms}`} />
              <TagWithIcon icon={<Box />} description={`Area: ${item.area} m³`} />
            </div>
            <div className='flex flex-row items-center justify-between gap-2'>
              <div className='flex flex-col gap-0'>
                {item.salePrice && <span className='small font-bold line-through'>{moneyFormat(item.price)}</span>}
                <span
                  className={twMerge('text-xl font-bold md:text-2xl lg:text-3xl', item.salePrice ? 'text-red-500' : '')}
                >
                  {moneyFormat(item.salePrice ?? item.price)}
                </span>
              </div>
              <Link className={buttonVariants({ variant: 'shine', size: 'icon' })} href={`/catalog/${item.id}`}>
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </Glow>
    </Animation>
  );
}
