'use client';

import { Search as SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Search() {
  const query = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [value, setValue] = React.useState(query.get('search') ?? '');

  const redirectWithQuery = () => {
    const current = new URLSearchParams(query);

    current.delete('page');

    if (value) {
      current.set('search', value);
    } else {
      current.delete('search');
    }

    const newQuery = current.toString();
    const url = `${pathname}?${newQuery}`;
    router.push(url);
  };

  return (
    <div className='mx-auto flex w-full max-w-[550px] flex-row items-center justify-center gap-4 rounded-t-md bg-[#110F1A] p-3'>
      <Input
        placeholder='Пошук...'
        className='h-14'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            redirectWithQuery();
          }
        }}
      />
      <Button size='icon' variant='default' onClick={redirectWithQuery}>
        <SearchIcon />
      </Button>
    </div>
  );
}
