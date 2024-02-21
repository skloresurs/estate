'use client';

import { Glow } from '@codaworks/react-glow';
import React from 'react';

export default function AchievementCard() {
  return (
    <Glow>
      <div className='glow space-y-4 rounded-md border-2 border-border bg-background p-8'>
        <h3 className='text-xl font-semibold'>Lorem Ipsum</h3>
        <p className='text-sm text-muted-foreground'>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
      </div>
    </Glow>
  );
}
