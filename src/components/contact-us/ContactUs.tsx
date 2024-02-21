import React from 'react';

import ComponentHeader from '../ComponentHeader';
import Container from '../Container';
import ContactUsForm from './ContactUsForm';

export default function ContactUs() {
  return (
    <Container className='mt-8 grid grid-cols-1 gap-4 gap-y-2 md:grid-cols-2'>
      <div className='pt-8'>
        <ComponentHeader
          title="Зв'яжіться з нами"
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <ContactUsForm />
    </Container>
  );
}
