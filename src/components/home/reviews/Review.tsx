import React from 'react';

import { env } from '@/env.mjs';
import IReview from '@/types/Review';

import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { CarouselItem } from '../../ui/carousel';
import { Separator } from '../../ui/separator';

interface IProps {
  review: IReview;
}

export default function Review({ review }: IProps) {
  return (
    <CarouselItem className='review flex flex-col items-center gap-2 md:basis-1/3'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <Avatar className='size-8'>
          <AvatarImage src={`${env.NEXT_PUBLIC_CMS_URL}${review.avatar?.url}`} alt='@shadcn' />
          <AvatarFallback>QQ</AvatarFallback>
        </Avatar>
        <span className='small'>{review.name}</span>
      </div>
      <h2>{review.title}</h2>
      <Separator />
      <p className='muted text-center'>{review.review}</p>
    </CarouselItem>
  );
}
