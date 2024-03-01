import { constant } from 'lodash';
import React from 'react';

import axiosCMS from '@/libs/strapi-axios';
import IReview from '@/types/Review';

import Animation from '../../Animation';
import ComponentHeader from '../../ComponentHeader';
import Container from '../../Container';
import ReviewCarousel from './ReviewCarousel';

export default async function Reviews() {
  const response = await axiosCMS
    .get<{ data: IReview[] }>('/reviews', {
      params: {
        populate: '*',
      },
    })
    .catch(constant(null));
  if (!response) return null;

  return (
    <Animation animateIn='animate__backInRight' animateOnce>
      <Container className='space-y-4'>
        <ComponentHeader
          title='Відгуки'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <ReviewCarousel reviews={response.data.data} />
      </Container>
    </Animation>
  );
}
