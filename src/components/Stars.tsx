import { Sparkle } from 'lucide-react';
import React from 'react';

export default function Stars() {
  return (
    <div className='flex flex-row items-center gap-2 text-muted-foreground'>
      <Sparkle size={24} />
      <Sparkle size={22} className='opacity-70' />
      <Sparkle size={20} className='opacity-40' />
    </div>
  );
}
