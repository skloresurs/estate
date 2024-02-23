import Image from 'next/image';
import React from 'react';

import { env } from '@/env.mjs';
import { IUser } from '@/types/Command';

import { CarouselItem } from '../ui/carousel';

interface IProps {
  user: IUser;
}

export default function CommandCard({ user }: IProps) {
  return (
    <CarouselItem className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
      <div className='space-y-12 rounded-md border-2 border-border p-8'>
        <Image
          src={`${env.NEXT_PUBLIC_CMS_URL}${user.avatar.url}`}
          alt={user.name}
          width={360}
          height={270}
          className='w-full rounded-sm object-contain'
        />
        <div className='text-center'>
          <h3 className='text-xl font-semibold'>{user.name}</h3>
          <p className='text-sm text-muted-foreground'>{user.title}</p>
        </div>
      </div>
    </CarouselItem>
  );
}
