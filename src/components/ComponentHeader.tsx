'use client';

import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Stars from './Stars';
import { Button, buttonVariants } from './ui/button';

interface IProps {
  title: string;
  description: string;
  disableStars?: boolean;
  button?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
}

export default function ComponentHeader({ title, description, disableStars, button }: IProps) {
  return (
    <>
      {!disableStars && <Stars />}
      <div className='flex flex-col items-center justify-between gap-4 text-balance md:flex-row'>
        <div className='max-w-[800px] space-y-2 text-balance'>
          <h2>{title}</h2>
          <p className='text-muted-foreground'>{description}</p>
        </div>
        {button && !button.href && (
          <Button variant='outline' className='w-full md:w-auto'>
            {button.label}
          </Button>
        )}
        {button && button.href && (
          <Link href={button.href} className={twMerge(buttonVariants({ variant: 'gooeyLeft' }), 'w-full md:w-auto')}>
            {button.label}
          </Link>
        )}
      </div>
    </>
  );
}
