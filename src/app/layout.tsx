import './globals.css';
import 'animate.css/animate.min.css';

import { GlowCapture } from '@codaworks/react-glow';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Raleway } from 'next/font/google';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import ContactUs from '@/components/contact-us/ContactUs';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Toaster } from '@/components/ui/sonner';

const raleway = Raleway({ subsets: ['cyrillic-ext'] });
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), { ssr: false });

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk' className='dark'>
      <body
        className={twMerge(
          raleway.className,
          'max-w-full overflow-x-hidden scrollbar-thin scrollbar-thumb-primary/50 min-h-[100dvh]'
        )}
      >
        <Toaster position='top-right' expand richColors closeButton />
        <GlowCapture className='flex min-h-[100dvh] max-w-full flex-col overflow-x-hidden scrollbar-thin scrollbar-thumb-primary/50'>
          <ScrollToTop />
          <Navbar />
          <div className='flex-1'>{children}</div>
          <ContactUs />
          <Footer />
        </GlowCapture>
      </body>
    </html>
  );
}
