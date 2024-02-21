'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import Speed from '@/types/Speed';

interface IProps {
  className?: string;
  text: string;
  wrapper?: 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';
  speed?: Speed;
  cursor?: boolean;
}

export default function Typed({ className, text, wrapper, speed, cursor }: IProps) {
  return (
    <TypeAnimation
      sequence={[text]}
      wrapper={wrapper ?? 'span'}
      speed={speed ?? 75}
      cursor={cursor ?? false}
      className={className}
    />
  );
}
