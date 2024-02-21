import React from 'react';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import HomeCard from '../home-card/HomeCard';

export default function Features() {
  return (
    <Container className='space-y-4'>
      <ComponentHeader
        title='Найкращі пропозиції'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        button={{ label: 'Переглянути всі варіанти' }}
      />
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        <HomeCard delay={0} />
        <HomeCard delay={150} />
        <HomeCard delay={300} />
        <HomeCard delay={450} className='hidden sm:block lg:hidden' />
      </div>
    </Container>
  );
}
