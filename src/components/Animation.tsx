'use client';

import React, { ReactNode } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface IProps {
  offset?: number;
  duration?: number;
  className?: string;
  initiallyVisible?: boolean;
  animateIn?: string;
  animateOut?: string;
  delay?: number;
  animatePreScroll?: boolean;
  scrollableParentSelector?: string;
  animateOnce?: boolean;
  children: ReactNode;
}

export default function Animation({
  offset,
  duration,
  className,
  initiallyVisible,
  animateIn,
  animateOut,
  delay,
  animatePreScroll,
  scrollableParentSelector,
  animateOnce,
  children,
}: IProps) {
  return (
    <AnimationOnScroll
      offset={offset}
      duration={duration}
      className={className}
      initiallyVisible={initiallyVisible}
      animateIn={animateIn}
      animateOut={animateOut}
      delay={delay}
      animatePreScroll={animatePreScroll}
      scrollableParentSelector={scrollableParentSelector}
      animateOnce={animateOnce}
    >
      {children}
    </AnimationOnScroll>
  );
}
