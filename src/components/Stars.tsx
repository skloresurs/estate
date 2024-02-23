import { Glow } from '@codaworks/react-glow';
import { Sparkle } from 'lucide-react';
import React from 'react';

export default function Stars() {
  return (
    <Glow>
      <div className='flex flex-row items-center gap-2 text-muted-foreground'>
        <Sparkle size={24} className='glow:text-primary' />
        <Sparkle size={22} className='opacity-70 glow:text-primary' />
        <Sparkle size={20} className='opacity-40 glow:text-primary' />
      </div>
    </Glow>
  );
}
