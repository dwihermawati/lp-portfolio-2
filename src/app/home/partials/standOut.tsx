import { Check, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { comparisonData } from '@/constants/comparasion-data';

export const StandOut: React.FC = () => {
  return (
    <div className='from-primary-100/0 to-primary-100/100 bg-linear-to-b'>
      <Section title='COMPARASION' subtitle='Why I Stand Out'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6'>
          <div className='flex-center bg-purple-gradient hover:shadow-blue-glow flex-col gap-6 rounded-xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.01] md:gap-10 md:rounded-2xl md:p-8'>
            <div>
              <p className='text-neutral-25 text-lg-semibold mb-6'>With Me</p>
              <div className='bg-neutral-25 flex-center size-20 overflow-hidden rounded-full md:size-25'>
                <Image
                  src='/Images/edwin.png'
                  alt='edwin'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='size-full'
                />
              </div>
            </div>
            <ul className='flex-center flex-col gap-5 md:gap-6'>
              {comparisonData.map((item, i) => (
                <li key={i} className='flex items-center gap-3'>
                  <Check className='size-6 text-white max-sm:size-5' />
                  <span className='text-neutral-25 md:text-lg-medium text-md-medium max-sm:text-sm-medium'>
                    {item.me}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-center flex-col gap-6 rounded-xl border border-neutral-300 bg-white p-6 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.01] md:gap-10 md:rounded-2xl md:p-8'>
            <div className='flex-center flex-col'>
              <p className='text-lg-semibold mb-6 text-neutral-950'>
                Another Talent
              </p>
              <div className='flex-center size-20 overflow-hidden rounded-full bg-neutral-300 md:size-25'>
                <Image
                  src='/Icons/profile.png'
                  alt='edwin'
                  width={48}
                  height={48}
                  className='size-15'
                />
              </div>
            </div>
            <ul className='flex-center flex-col gap-5 md:gap-6'>
              {comparisonData.map((item, i) => (
                <li key={i} className='flex items-center gap-3'>
                  <X
                    className='size-6 max-sm:size-5'
                    style={{ color: '#E5352D' }}
                  />
                  <span className='md:text-lg-regular text-md-regular max-sm:text-sm-regular text-neutral-950'>
                    {item.other}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};
