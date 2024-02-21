import React from 'react';

export default function Title() {
  return (
    <div className='flex flex-row items-center justify-between gap-2'>
      <h1>Lorem Ipsum</h1>
      <div className='flex flex-col text-right'>
        <span className='muted'>Ціна</span>
        <span className='large whitespace-nowrap font-semibold'>1 000 000₴</span>
      </div>
    </div>
  );
}
