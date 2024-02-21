import React from 'react';

import Container from '@/components/Container';
import PageTransition from '@/components/PageTransition';
import Carousel from '@/components/property/Carousel';
import Descriptions from '@/components/property/Descriptions';
import Features from '@/components/property/Features';
import Title from '@/components/property/Title';

export default function Property() {
  return (
    <PageTransition>
      <Container className='mt-12 space-y-12'>
        <Title />
        <Carousel />
        <div className='gap-4 md:columns-2'>
          <Descriptions />
          <Features />
        </div>
      </Container>
    </PageTransition>
  );
}
