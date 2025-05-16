import React from 'react';

import { Section } from '@/components/layouts/section';
import ContactForm from '@/components/ui/contactForm';

export const Contact: React.FC = () => {
  return (
    <div className='after-bg-curve-footer relative overflow-hidden'>
      <Section
        title='CONTACT'
        subtitle='Get in Touch'
        id='contact'
        className='before-bg-contact relative'
      >
        <div
          className='mx-auto max-w-150 rounded-xl bg-white p-4 md:rounded-2xl md:p-8'
          style={{ boxShadow: '0px 4px 32px rgba(207, 207, 207, 0.25)' }}
        >
          <ContactForm />
        </div>
        {/* <div className='absolute -top-[30%] z-[-1] h-40 w-full bg-neutral-950'></div> */}
      </Section>
    </div>
  );
};
