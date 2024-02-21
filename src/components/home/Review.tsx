import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CarouselItem } from '../ui/carousel';
import { Separator } from '../ui/separator';

export default function Review() {
  return (
    <CarouselItem className='review flex flex-col items-center gap-2 md:basis-1/3'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <Avatar className='size-8'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className='small'>Lorem Ipsum</span>
      </div>
      <h2>Lorem Ipsum</h2>
      <Separator />
      <p className='muted'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </CarouselItem>
  );
}
