'use client';

import React from 'react';

import FloorSelect from './FloorSelect';
import TagsSelect from './TagsSelect';

export default function Fitlers() {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-6 rounded-md bg-[#110F1A] p-2'>
      <FloorSelect />
      <TagsSelect />
    </div>
  );
}
