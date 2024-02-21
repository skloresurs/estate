'use client';

import { Glow } from '@codaworks/react-glow';
import { Bath, BedDouble, Box, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { twMerge } from 'tailwind-merge';

import { buttonVariants } from '../ui/button';
import Tag from './Tag';
import TagWithIcon from './TagWithIcon';

interface IProps {
  className?: string;
  delay?: number;
}

export default function HomeCard({ className, delay }: IProps) {
  return (
    <AnimationOnScroll animateIn='animate__slideInUp' animateOnce delay={delay ?? 0}>
      <Glow>
        <div className={twMerge('glow overflow-hidden rounded-md border-2', className)}>
          <Image src='/demo-card.jpg' alt='demo-card' width={360} height={270} className='aspect-video w-full' />
          <div className='space-y-4 px-6 py-4'>
            <h2>Lorem Ipsum</h2>
            <span className='small'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <div className='flex flex-wrap gap-1'>
              <Tag />
              <Tag />
              <Tag />
            </div>
            <div className='flex flex-wrap gap-6 gap-y-2'>
              <TagWithIcon icon={<BedDouble />} description='Beds: 2' />
              <TagWithIcon icon={<Bath />} description='Bathrooms: 2' />
              <TagWithIcon icon={<Box />} description='Area: 200 m³' />
            </div>
            <div className='flex flex-row items-center justify-between gap-2'>
              <p className='text-xl font-bold md:text-2xl lg:text-3xl'>2 000 000 ₴</p>
              <Link className={buttonVariants({ variant: 'ghost', size: 'icon' })} href='/'>
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </Glow>
    </AnimationOnScroll>
  );
}
