import { constant, map } from 'lodash';
import React from 'react';

import axiosCMS from '@/libs/strapi-axios';
import ICommand from '@/types/Command';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';
import CommandCard from './CommandCard';

export default async function Command() {
  const response = await axiosCMS
    .get<{ data: ICommand }>('/command', {
      params: {
        'populate[users][populate]': '*',
      },
    })
    .catch(constant(null));
  if (!response) return null;

  return (
    <Container className='space-y-4'>
      <ComponentHeader
        title='Meet the Team'
        description='At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.'
      />
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {map(response.data.data.users, (user) => (
            <CommandCard key={user.id} user={user} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
