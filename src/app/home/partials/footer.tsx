import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';

export const Footer: React.FC = () => {
  return (
    <footer className='relative bg-neutral-950'>
      <div className='absolute -top-[43%] z-[-1] h-55 w-full bg-neutral-950'></div>
      <div className='before-bg-footer relative overflow-hidden'>
        <div className='custom-container flex-center flex-col gap-8 bg-neutral-950 pt-13 pb-26.25 md:pt-26.25 md:pb-36.25'>
          <Link
            href='#home'
            className='z-10 cursor-pointer transition-transform hover:scale-110'
          >
            <Image
              src='/Icons/Logo.png'
              alt='logo'
              width={138}
              height={32}
              style={{ width: 'clamp(8.63rem, 17.4vw, 12.88rem)' }}
            />
          </Link>
          <p className='text-neutral-25 text-sm-regular md:text-md-regular z-10 text-center'>
            Front-End Developer with a passion for clean code and intuitive
            design. Turning ideas into functional beauty
          </p>
          <div className='flex-start z-10 gap-3 md:gap-4'>
            {socialMediaData.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-center size-12 rounded-full bg-[rgba(10,13,18,0.5)] p-3 transition-transform hover:scale-110 md:size-15'
              >
                {icon.socialIcon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
