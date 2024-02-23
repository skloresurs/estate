import { map } from 'lodash';
import React from 'react';

import axiosCMS from '@/libs/strapi-axios';
import ICatalogItem from '@/types/CatalogItem';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import HomeCard from '../home-card/HomeCard';

export default async function Features() {
  const data = await axiosCMS
    .get<{ data: ICatalogItem[] }>('/catalog-items', {
      params: {
        'pagination[pageSize]': 4,
        random: true,
      },
    })
    .then((response) => response.data.data);
  return (
    <Container className='space-y-4'>
      <ComponentHeader
        title='Наші пропозиції'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        button={{ label: 'Переглянути всі варіанти', href: '/catalog' }}
      />
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {map(data, (item, i) => (
          <HomeCard key={item.id} item={item} className={i === 3 ? 'hidden sm:block lg:hidden' : ''} />
        ))}
      </div>
    </Container>
  );
}
