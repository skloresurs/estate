import React from 'react';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';
import CommandCard from './CommandCard';

export default function Command() {
  return (
    <Container className='space-y-4'>
      <ComponentHeader
        title='Meet the Team'
        description='At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.'
      />
      <Carousel>
        <CarouselContent>
          <CommandCard />
          <CommandCard />
          <CommandCard />
          <CommandCard />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
