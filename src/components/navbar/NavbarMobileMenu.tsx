'use client';

import { map } from 'lodash';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import MenuItem from '@/types/MenuItem';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '../ui/sheet';

export default function NavbarMobileMenu({ menu }: { menu: MenuItem[] }) {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden'>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className='mt-8 flex flex-col gap-6 text-2xl font-semibold'>
            {map(menu, (item) => (
              <Link
                href={item.href}
                key={item.href}
                className='inline-block text-[#fff] no-underline after:block after:h-[2px] after:w-[0] after:bg-[#fff] after:content-[""] after:[transition:width_.3s] after:hover:w-full'
              >
                {item.label}
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
