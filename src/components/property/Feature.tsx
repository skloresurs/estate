import { Zap } from 'lucide-react';
import React from 'react';

export default function Feature() {
  return (
    <div className='space-x-3 border-l-2 border-primary bg-muted/75 px-6 py-3'>
      <Zap className='inline-block' />
      <span className='small text-muted-foreground'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
    </div>
  );
}
