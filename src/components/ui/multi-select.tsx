import { filter, includes, map, sortBy } from 'lodash';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/libs/shadcn';

export type OptionType = {
  label: string;
  value: string;
};

interface MultiSelectProps {
  options: OptionType[];
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder: string;
  className?: string;
}

export default function MultiSelect({
  options,
  selected,
  onChange,
  placeholder,
  className,
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={twMerge(`w-full justify-between ${selected.length > 1 ? 'h-full' : 'h-10'}`, className)}
          onClick={() => setOpen(!open)}
        >
          <div className='flex flex-wrap items-center gap-1'>
            <span className='mr-3'>{placeholder}</span>
            {selected.length === 0 && <span>Не вибрано</span>}
            {map(
              sortBy(selected, (item) => item),
              (item) => (
                <Badge key={item} variant='outline'>
                  {item}
                </Badge>
              )
            )}
          </div>
          <ChevronsUpDown className='size-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command className={className}>
          <CommandInput placeholder='Пошук ...' />
          <CommandEmpty>Нічого не знайдено.</CommandEmpty>
          <CommandGroup className='max-h-64 overflow-auto scrollbar-thin scrollbar-thumb-primary'>
            {map(options, (option) => (
              <CommandItem
                key={option.value}
                onSelect={() => {
                  onChange(
                    includes(selected, option.value)
                      ? filter(selected, (item) => item !== option.value)
                      : [...selected, option.value]
                  );
                  setOpen(true);
                }}
              >
                <Check className={cn('mr-2 h-4 w-4', includes(selected, option.value) ? 'opacity-100' : 'opacity-0')} />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
