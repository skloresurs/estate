'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';

import MenuItem from '@/types/MenuItem';

import { Button } from '../ui/button';

export default function NavbarDesktopMenuItem({ label, href }: MenuItem) {
  const pathname = usePathname();
  const active = useMemo(() => pathname === href, [pathname, href]);
  return (
    <Button asChild variant={active ? 'outline' : 'ghost'} className={active ? 'bg-muted' : ''}>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
