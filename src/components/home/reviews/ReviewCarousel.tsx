'use client';

import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { map } from 'lodash';
import React from 'react';

import IReview from '@/types/Review';

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import Review from './Review';

interface IProps {
  reviews: IReview[];
}

export default function ReviewCarousel({ reviews }: IProps) {
  return (
    <Carousel plugins={[Autoplay({ delay: 8000, stopOnFocusIn: true }), ClassNames()]} opts={{ loop: true }}>
      <CarouselContent>
        {map(reviews, (review) => (
          <Review key={review.id} review={review} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
