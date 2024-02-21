import React from 'react';

import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Reviews from '@/components/home/Reviews';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition className='space-y-12'>
      <Hero />
      <Features />
      <Reviews />
    </PageTransition>
  );
}
