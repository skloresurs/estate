import React, { Suspense } from 'react';

import Fitlers from '@/components/catalog/Fitlers';
import Gallery from '@/components/catalog/Gallery';
import PropertiesHeader from '@/components/catalog/Header';
import Search from '@/components/catalog/Search';
import Container from '@/components/Container';
import PageTransition from '@/components/PageTransition';

export default function Catalog() {
  return (
    <PageTransition className='space-y-12'>
      <div>
        <PropertiesHeader />
        <Container className='-mt-10 space-y-8'>
          <Suspense>
            <div>
              <Search />
              <Fitlers />
            </div>
          </Suspense>
        </Container>
      </div>
      <Suspense>
        <Gallery />
      </Suspense>
    </PageTransition>
  );
}
