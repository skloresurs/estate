import React from 'react';
import { twMerge } from 'tailwind-merge';

import moneyFormat from '@/libs/text-formats';
import ICatalogItem from '@/types/CatalogItem';

interface IProps {
  item: ICatalogItem;
}

export default function Title({ item }: IProps) {
  return (
    <div className='flex flex-row items-center justify-between gap-2'>
      <h1>{item.title}</h1>
      <div className='flex flex-col gap-0 text-right'>
        <span className='muted'>Ціна</span>
        {item.salePrice && (
          <span className='small whitespace-nowrap font-semibold line-through'>{moneyFormat(item.price)}</span>
        )}
        <span className={twMerge('large whitespace-nowrap font-semibold', item.salePrice ? 'text-red-500' : '')}>
          {moneyFormat(item.salePrice ?? item.price)}
        </span>
      </div>
    </div>
  );
}
