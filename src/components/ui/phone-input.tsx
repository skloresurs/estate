/* eslint-disable react/jsx-pascal-case */
/* eslint-disable lodash/prefer-lodash-method */
/* eslint-disable react/display-name */
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Input, InputProps } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/libs/shadcn';

export type PhoneInputValue = RPNInput.Value;

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <Input className={cn('rounded-s-none rounded-e-lg', className)} {...props} ref={ref} />
));

function FlagComponent({ country, countryName }: RPNInput.FlagProps) {
  // eslint-disable-next-line security/detect-object-injection
  const Flag = flags[country];

  return (
    <span className='inline h-4 w-6 overflow-hidden rounded-sm object-contain'>
      {Flag && <Flag title={countryName} />}
    </span>
  );
}

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
};

function CountrySelect({ disabled, value, onChange, options }: CountrySelectProps) {
  const handleSelect = React.useCallback(
    (country: RPNInput.Country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type='button'
          variant='outline'
          className={cn('rounded-e-none rounded-s-lg pl-3 pr-1 flex gap-1')}
          disabled={disabled}
        >
          <span className='flex items-center truncate'>
            <div className='flex h-4 w-6 rounded-sm bg-foreground/20'>
              {value && <FlagComponent country={value} countryName={value} />}
            </div>
          </span>
          <ChevronsUpDown className={`size-4 ${disabled ? 'hidden' : ''}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[300px] p-0'>
        <Command>
          <CommandList>
            <CommandInput placeholder='Search country...' />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem className='gap-2 text-sm' key={option.value} onSelect={() => handleSelect(option.value)}>
                    <FlagComponent country={option.value} countryName={option.label} />
                    <span>{option.label}</span>
                    <span className='text-foreground/50'>{`+${RPNInput.getCountryCallingCode(option.value)}`}</span>
                    <CheckIcon className={`ml-auto size-4 ${option.value === value ? 'opacity-100' : 'opacity-0'}`} />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> &
  RPNInput.Props<typeof RPNInput.default>;

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
  React.ElementRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, ...props }, ref) => (
  <RPNInput.default
    ref={ref}
    placeholder=''
    className={cn('flex', className)}
    flagComponent={FlagComponent}
    countrySelectComponent={CountrySelect}
    inputComponent={InputComponent}
    {...props}
  />
));

PhoneInput.displayName = 'PhoneInput';

export { PhoneInput };
