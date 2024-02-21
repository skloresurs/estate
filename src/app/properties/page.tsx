import React from 'react';

import Container from '@/components/Container';
import PageTransition from '@/components/PageTransition';
import Fitlers from '@/components/properties/Fitlers';
import Gallery from '@/components/properties/Gallery';
import PropertiesHeader from '@/components/properties/Header';
import Search from '@/components/properties/Search';

export default function Properties() {
  return (
    <PageTransition className='space-y-12'>
      <div>
        <PropertiesHeader />
        <Container className='-mt-10 space-y-8'>
          <div>
            <Search />
            <Fitlers />
          </div>
        </Container>
      </div>
      <Gallery />
    </PageTransition>
  );
}
