import { Zap } from 'lucide-react';
import React from 'react';

import { IFeature } from '@/types/CatalogItem';

interface IProps {
  feature: IFeature;
}

export default function Feature({ feature }: IProps) {
  return (
    <div className='space-x-3 border-l-2 border-primary bg-muted/75 px-6 py-3'>
      <Zap className='inline-block' />
      <span className='small text-muted-foreground'>{feature.feature}</span>
    </div>
  );
}
