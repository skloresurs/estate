import React from 'react';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import HomeCard from '../home-card/HomeCard';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

export default function Gallery() {
  return (
    <Container className='space-y-4'>
      <ComponentHeader
        title='Відкрийте для себе світ можливостей'
        description='Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'
      />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
      <Pagination>
        <PaginationContent className='list-none'>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Container>
  );
}
