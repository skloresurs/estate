'use client';

import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Review from './Review';

export default function Reviews() {
  return (
    <AnimationOnScroll animateIn='animate__backInRight' animateOnce>
      <Container className='space-y-4'>
        <ComponentHeader
          title='Відгуки'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <Carousel plugins={[Autoplay({ delay: 8000, stopOnFocusIn: true }), ClassNames()]} opts={{ loop: true }}>
          <CarouselContent>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </AnimationOnScroll>
  );
}
