import React from 'react';

import Achievements from '@/components/about/Achievements';
import Command from '@/components/about/Command';
import Journey from '@/components/about/Journey';
import PageTransition from '@/components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition className='space-y-16 py-8'>
      <Journey />
      <Achievements />
      <Command />
    </PageTransition>
  );
}
