'use client';

import { map } from 'lodash';
import React from 'react';

import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';

export default function Floors() {
  return (
    <div className='flex flex-row items-center justify-center gap-4'>
      <p>Поверх:</p>
      <ToggleGroup type='multiple'>
        {map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (e) => (
          <ToggleGroupItem className='aspect-square' key={e} value={e.toString()}>
            {e}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
