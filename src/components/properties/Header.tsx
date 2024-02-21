import React from 'react';

import { h1 } from '@/libs/typography';

import Container from '../Container';

export default function PropertiesHeader() {
  return (
    <div className='bg-gradient-to-r from-muted to-background py-24'>
      <Container className='space-y-4'>
        <h1 className={h1}>Find Your Dream Property</h1>
        <p>
          Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our
          curated selection of properties, each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{' '}
        </p>
      </Container>
    </div>
  );
}
