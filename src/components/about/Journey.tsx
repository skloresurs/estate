import React from 'react';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import JourneyParalax from './JourneyParalax';

export default function Journey() {
  return (
    <Container className='flex flex-col items-center gap-4 md:flex-row'>
      <div>
        <ComponentHeader
          title='Наш шлях'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        />
      </div>
      <JourneyParalax />
    </Container>
  );
}
