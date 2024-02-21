import React from 'react';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import AchievementCard from './AchievementCard';

export default function Achievements() {
  return (
    <Container className='space-y-4'>
      <ComponentHeader
        title='Наші досягнення'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
      <div className='flex flex-col gap-4 md:flex-row'>
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
      </div>
    </Container>
  );
}
