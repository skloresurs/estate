'use client';

import { map } from 'lodash';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import useSWR from 'swr';

import { env } from '@/env.mjs';
import CMSFetcher from '@/libs/fetcher';
import ICatalogItem from '@/types/CatalogItem';
import IStrapiMeta from '@/types/StrapiMeta';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import HomeCard from '../home-card/HomeCard';
import { Button } from '../ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '../ui/pagination';

export default function Gallery() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = Number(searchParams.get('page')) || 1;

  const query = useMemo(() => {
    const q = new URLSearchParams();
    q.set('populate', '*');
    q.set('pagination[pageSize]', '12');

    if (searchParams.get('search')) {
      q.set('filters[$or][0][title][$containsi]', searchParams.get('search') ?? '');
      q.set('filters[$or][1][description][$containsi]', searchParams.get('search') ?? '');
    }

    if (searchParams.get('floor-from')) {
      q.set('filters[floor][$gte]', searchParams.get('floor-from') ?? '');
    }
    if (searchParams.get('floor-to')) {
      q.set('filters[floor][$lte]', searchParams.get('floor-to') ?? '');
    }

    if (page > 1) {
      q.set('pagination[page]', page.toString());
    }
    return q.toString();
  }, [searchParams, page]);

  const changePage = (newPage: number) => {
    const current = new URLSearchParams(query);

    if (newPage > 1) {
      current.set('page', newPage.toString());
    } else {
      current.delete('page');
    }

    const newQuery = current.toString();
    const url = `${pathname}?${newQuery}`;
    router.push(url);
  };

  const { data, error, isValidating } = useSWR<{ data: ICatalogItem[]; meta: IStrapiMeta }>(
    `${env.NEXT_PUBLIC_CMS_URL}/api/catalog-items?${query}`,
    CMSFetcher
  );
  if (isValidating && !data) {
    return <h2 className='text-center'>Завантаження...</h2>;
  }

  if (error || !data) {
    return <h2 className='text-center'>Помилка завантаження</h2>;
  }

  if (data.data.length === 0) {
    return <h2 className='text-center'>Нічого не знайдено</h2>;
  }
  return (
    <Container className='space-y-4'>
      <ComponentHeader
        title='Відкрийте для себе світ можливостей'
        description='Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'
      />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {map(data.data, (item) => (
          <HomeCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination>
        <PaginationContent className='flex list-none flex-row items-center'>
          <PaginationItem>
            <Button
              variant='expandIconGhost'
              Icon={ArrowLeftIcon}
              iconPlacement='left'
              onClick={() => changePage(page - 1)}
              disabled={page <= 1}
            >
              Назад
            </Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size='default'>
              Сторінка: {page}/{data.meta.pagination.pageCount}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <Button
              variant='expandIconGhost'
              Icon={ArrowRightIcon}
              iconPlacement='right'
              onClick={() => changePage(page + 1)}
              disabled={page >= data.meta.pagination.pageCount}
            >
              Вперед
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Container>
  );
}
