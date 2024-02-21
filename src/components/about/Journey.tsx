import { Glow } from '@codaworks/react-glow';
import Image from 'next/image';
import React from 'react';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';

export default function Journey() {
  return (
    <Container className='flex flex-col items-center gap-4 md:flex-row'>
      <div>
        <ComponentHeader
          title='Наш шлях'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        />
      </div>
      <Glow>
        <div className='glow rounded-md border-4 border-border bg-[radial-gradient(circle_at_center_center,_rgba(110,_70,_242,_0.05),_rgba(71,_212,_255,_0)),_repeating-radial-gradient(circle_at_center_center,_rgba(110,_70,_242,_0.05),_rgba(110,_70,_242,_0.05),_23px,_transparent_46px,_transparent_23px)] p-8 bg-blend-multiply'>
          <Image src='/hand-home.png' alt='hand-home' width={400} height={288} />
        </div>
      </Glow>
    </Container>
  );
}
