'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-use';
import { twMerge } from 'tailwind-merge';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export default function HorizontalScrollPanel({ children, className }: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { x: xScroll } = useScroll(ref);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      setWidth(el.scrollWidth - el.offsetWidth);
    }
  }, []);
  return (
    <div className='relative'>
      <div
        className={twMerge(
          'absolute inset-y-0 -left-1 w-12 bg-gradient-to-r from-black to-black/0 shadow-xl duration-300 transition-all pointer-events-none',
          xScroll > 10 ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        className={twMerge(
          'absolute inset-y-0 -right-1 w-12 bg-gradient-to-r to-black from-black/0 shadow-xl duration-300 transition-all pointer-events-none',
          xScroll + 10 < width ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div ref={ref} className={twMerge('overflow-x-auto overflow-y-hidden scrollbar-none', className)}>
        {children}
      </div>
    </div>
  );
}
