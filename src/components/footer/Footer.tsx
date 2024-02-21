import Link from 'next/link';
import React from 'react';

import { Facebook, Instagram } from '@/icons';

import Container from '../Container';

const linkProps = {
  className: 'duration-300 hover:text-primary',
};

export default function Footer() {
  return (
    <div className='mt-8 border-t-2 border-border'>
      <div className='bg-muted'>
        <Container className='space-y-4 pb-4 pt-8'>
          <div className='flex flex-col items-end justify-between gap-4 text-sm md:flex-row'>
            <div className='mb-auto'>Logo</div>
            <div className='flex flex-col gap-2'>
              <Link href='/' {...linkProps}>
                Головна
              </Link>
              <Link href='/about-us' {...linkProps}>
                Про нас
              </Link>
              <Link href='/properties' {...linkProps}>
                Варіанти
              </Link>
            </div>
          </div>
          <div className='flex flex-row justify-between gap-4'>
            <p>Copyright</p>
            <div className='flex flex-row gap-2'>
              <div className='cursor-pointer rounded-full border-2 border-border p-2 duration-300 hover:bg-background'>
                <Facebook className='size-6 fill-white' />
              </div>
              <div className='cursor-pointer rounded-full border-2 border-border p-2 duration-300 hover:bg-background'>
                <Instagram className='size-6 fill-white' />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
