'use client';

import { Glow } from '@codaworks/react-glow';
import { BedDouble, Box, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { env } from '@/env.mjs';
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
    <Animation animateIn='animate__slideInUp' className='h-full' offset={600} animateOnce animatePreScroll>
      <Glow className='h-full'>
        <div className={twMerge('glow overflow-hidden rounded-md border-2 h-full', className)}>
          <Image
            src={`${env.NEXT_PUBLIC_CMS_URL}${item.images[0]?.url}`}
            alt={item.title}
            width={360}
            height={270}
            className='aspect-video w-full'
          />
          <div className='space-y-4 px-6 py-4'>
            <h2>{item.title}</h2>
            <span className='small'>{item.shortDescription}</span>
            <div className='flex flex-wrap gap-6 gap-y-2'>
              <TagWithIcon icon={<BedDouble />} description={`Кімнат: ${item.bedrooms}`} />
              <TagWithIcon icon={<Box />} description={`Площа: ${item.area} m³`} />
            </div>
            <div className='flex min-h-[65px] flex-row items-center justify-between gap-2'>
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
