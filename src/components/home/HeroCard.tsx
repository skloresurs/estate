'use client';

import { Glow } from '@codaworks/react-glow';
import { Users } from 'lucide-react';
import React from 'react';
import CountUp from 'react-countup';
import { twMerge } from 'tailwind-merge';

interface IProps {
  valueData: {
    prefix?: string;
    value: number;
    suffix?: string;
  };
  label: string;
  className?: string;
}

export default function HeroCard({ valueData, label, className }: IProps) {
  return (
    <Glow>
      <div
        className={twMerge(
          'cursor-default rounded-md border-2 border-border backdrop-blur-2xl size-56 px-12 py-5 aspect-square flex flex-col items-center justify-center relative glow',
          className
        )}
      >
        <Users className='absolute left-1/2 top-1/2 -z-20 block size-28 -translate-x-1/2 -translate-y-1/2 text-primary/20 duration-300 md:size-36' />
        <h2>
          <span>{valueData.prefix}</span>
          <CountUp end={valueData.value} />
          <span>{valueData.suffix}</span>
        </h2>
        <span>{label}</span>
      </div>
    </Glow>
  );
}
