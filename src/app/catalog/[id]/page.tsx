import { constant } from 'lodash';
import { notFound } from 'next/navigation';
import React from 'react';

import Carousel from '@/components/catalog/catalog-item/Carousel';
import Descriptions from '@/components/catalog/catalog-item/Descriptions';
import Features from '@/components/catalog/catalog-item/Features';
import Title from '@/components/catalog/catalog-item/Title';
import Container from '@/components/Container';
import PageTransition from '@/components/PageTransition';
import axiosCMS from '@/libs/strapi-axios';

export default async function CatalogItem({ params }: { params: { id: string } }) {
  const response = await axiosCMS
    .get(`/catalog-items/${params.id}`, {
      params: {
        populate: '*',
      },
    })
    .catch(constant(null));

  if (!response?.data?.data) return notFound();

  const item = response.data.data;

  return (
    <PageTransition>
      <Container className='mt-12 space-y-12'>
        <Title item={item} />
        <Carousel item={item} />
        <div className='gap-4 md:columns-2'>
          <Descriptions item={item} />
          <Features item={item} />
        </div>
      </Container>
    </PageTransition>
  );
}
