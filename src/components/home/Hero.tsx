import { map } from 'lodash';
import React from 'react';

import Container from '../Container';
import Typed from '../Typed';
import HeroCard from './HeroCard';

export default function Hero() {
  return (
    <Container className='grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2'>
      <div className='space-y-4 text-balance drop-shadow-xl'>
        <Typed text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' wrapper='h1' />
        <Typed
          wrapper='p'
          speed={90}
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.'
        />
      </div>
      <div className='flex w-full flex-col items-center -space-y-16 duration-300 md:pt-20'>
        {map([1, 2, 3, 4], (item, i) => (
          <HeroCard
            key={item}
            valueData={{
              value: 200,
              suffix: '+',
            }}
            label='Lorem Ipsum'
            className={i % 2 === 0 ? 'ml-24' : 'mr-24'}
          />
        ))}
      </div>
    </Container>
  );
}
