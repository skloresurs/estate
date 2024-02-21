import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
  icon: React.ReactNode;
  description: string;
}

export default function TagWithIcon({ className, icon, description }: IProps) {
  return (
    <div className={twMerge('flex flex-row gap-1 items-center', className)}>
      {icon}
      <span className='small'>{description}</span>
    </div>
  );
}
