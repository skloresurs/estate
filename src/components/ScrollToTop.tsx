'use client';

import { ChevronUp } from 'lucide-react';
import React from 'react';
import { useWindowScroll } from 'react-use';
import { twMerge } from 'tailwind-merge';

export default function ScrollToTop() {
  const { y } = useWindowScroll();
  return (
    <button
      type='button'
      className={twMerge(
        'fixed bottom-12 right-6 duration-300 ease-in-out rounded-md p-2 border-2 border-border bg-background z-50',
        y > 250 ? 'translate-x-0' : 'translate-x-20'
      )}
      onClick={() => {
        window?.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <ChevronUp />
    </button>
  );
}
