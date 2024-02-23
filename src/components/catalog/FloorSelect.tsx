'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { Slider } from '../ui/range-slider';

const MIN = 1;
const MAX = 10;

export default function FloorSelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState<number[]>([1, 10]);

  useEffect(() => {
    const current = new URLSearchParams(searchParams);
    current.delete('page');

    if (value[0] && value[0] > MIN) {
      current.set('floor-from', value[0].toString());
    } else {
      current.delete('floor-from');
    }

    if (value[1] && value[1] < MAX) {
      current.set('floor-to', value[1].toString());
    } else {
      current.delete('floor-to');
    }

    const newQuery = current.toString();
    const url = `${pathname}?${newQuery}`;
    router.push(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className='flex flex-row items-center gap-2'>
      <p>Поверх:</p>
      <Slider
        className='w-[250px]'
        min={MIN}
        max={MAX}
        minStepsBetweenThumbs={0}
        step={1}
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
}
