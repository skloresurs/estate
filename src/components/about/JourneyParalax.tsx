'use client';

import Image from 'next/image';
import React from 'react';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';

export default function JourneyParalax() {
  return (
    <MouseParallaxContainer globalFactorX={0.3} globalFactorY={0.3}>
      <div className='glow rounded-md border-4 border-border bg-[radial-gradient(circle_at_center_center,_rgba(110,_70,_242,_0.1),_rgba(71,_212,_255,_0)),_repeating-radial-gradient(circle_at_center_center,_rgba(110,_70,_242,_0.05),_rgba(110,_70,_242,_0.05),_23px,_transparent_46px,_transparent_23px)] p-8 bg-blend-multiply'>
        <MouseParallaxChild factorX={1} factorY={1}>
          <Image src='/hand-home.png' alt='hand-home' width={400} height={288} />
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
}
