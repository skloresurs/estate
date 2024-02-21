import { map } from 'lodash';
import React from 'react';

import MenuItem from '@/types/MenuItem';

import Container from '../Container';
import NavbarDesktopMenuItem from './NavbarDesktopMenuItem';
import NavbarMobileMenu from './NavbarMobileMenu';

const menu: MenuItem[] = [
  {
    label: 'Головна',
    href: '/',
  },
  {
    label: 'Про нас',
    href: '/about-us',
  },
  {
    label: 'Варіанти',
    href: '/properties',
  },
];

export default function Navbar() {
  return (
    <div className='h-16 w-full border-b-2 border-border'>
      <Container className='flex h-full flex-row items-center justify-between'>
        <div>Logo</div>
        <div className='hidden flex-row items-center gap-2 md:flex'>
          {map(menu, (item) => (
            <NavbarDesktopMenuItem key={item.href} {...item} />
          ))}
        </div>
        <div className='hidden md:block'>{/* <ContactUs /> */}</div>
        <NavbarMobileMenu menu={menu} />
      </Container>
    </div>
  );
}
