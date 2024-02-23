'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { filter, includes, map, reject } from 'lodash';
import { X } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';

type Option = Record<'value' | 'label', string>;

interface IProps {
  options: Option[];
}

export function FancyMultiSelect({ options }: IProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Option[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((framework: Option) => {
    setSelected((prev) => reject(prev, ['value', framework.value]));
  }, []);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if ((e.key === 'Delete' || e.key === 'Backspace') && input.value === '') {
        setSelected((prev) => {
          const newSelected = [...prev];
          newSelected.pop();
          return newSelected;
        });
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === 'Escape') {
        input.blur();
      }
    }
  }, []);

  const selectables = filter(options, (framework) => !includes(selected, framework));

  return (
    <Command onKeyDown={handleKeyDown} className='overflow-visible bg-transparent'>
      <div className='group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'>
        <div className='flex flex-wrap gap-1'>
          {map(selected, (framework) => (
            <Badge key={framework.value} variant='secondary'>
              {framework.label}
              <button
                type='button'
                className='ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleUnselect(framework);
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={() => handleUnselect(framework)}
              >
                <X className='size-3 text-muted-foreground hover:text-foreground' />
              </button>
            </Badge>
          ))}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder='Select frameworks...'
            className='ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground'
          />
        </div>
      </div>
      <div className='relative mt-2'>
        {open && selectables.length > 0 ? (
          <div className='absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in'>
            <CommandGroup className='h-full overflow-auto'>
              {map(selectables, (framework) => (
                <CommandItem
                  key={framework.value}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onSelect={() => {
                    setInputValue('');
                    setSelected((prev) => [...prev, framework]);
                  }}
                  className='cursor-pointer'
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
