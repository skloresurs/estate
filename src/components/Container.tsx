import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IProps) {
  return <div className={twMerge('container px-4', className)}>{children}</div>;
}
