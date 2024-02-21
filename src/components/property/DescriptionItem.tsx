import React from 'react';

interface IProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function DescriptionItem({ icon, title, value }: IProps) {
  return (
    <div className='flex-1 space-y-2'>
      <div className='muted flex flex-row gap-2'>
        {icon}
        <span>{title}</span>
      </div>
      <span className='whitespace-nowrap text-2xl font-semibold md:text-3xl'>{value}</span>
    </div>
  );
}
