import React from 'react';

import Feature from './Feature';

export default function Features() {
  return (
    <div className='space-y-3 rounded-md border-2 border-border p-6'>
      <h3>Ключові особливості</h3>
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
}
