'use client';

import { join, map, split } from 'lodash';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import MultiSelect from '../ui/multi-select';

const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function TagsSelect() {
  const query = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const tags = query.get('tags');
  const [selected, setSelected] = useState<string[]>(tags ? split(tags, ',') : []);

  const redirectWithQuery = useCallback(
    (value: string[]) => {
      const current = new URLSearchParams(query);

      current.delete('page');

      if (value.length > 0) {
        current.set('tags', join(value, ','));
      } else {
        current.delete('tags');
      }

      const newQuery = current.toString();
      const url = `${pathname}?${newQuery}`;
      router.push(url);
    },
    [query, pathname, router]
  );

  useEffect(() => {
    redirectWithQuery(selected);
  }, [selected, redirectWithQuery]);
  return (
    <MultiSelect
      options={map(floors, (floor) => ({
        value: floor.toString(),
        label: `${floor}`,
      }))}
      placeholder='Теги:'
      selected={selected}
      onChange={setSelected}
      className='max-w-[320px]'
    />
  );
}
