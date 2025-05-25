'use client';

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';

export const Hero: React.FC = () => {
  // const imageRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (imageRef.current) {
  //       imageRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <section
      className='before-bg-hero after-bg-curve relative overflow-hidden bg-neutral-950'
      id='home'
    >
      <div className='custom-container relative mt-34.25 md:mt-36.5'>
        <div className='flex-between flex-wrap gap-5'>
          <h1 className='text-neutral-25 display-md-extrabold md:display-3xl-extrabold flex-[7.5] basis-80'>
            Hey There, <br />
            I&apos;m Edwin Anderson
          </h1>
          <p className='text-sm-regular md:text-lg-regular flex-[2.5] basis-80 text-neutral-300 md:text-right'>
            Front-End Developer with a passion for clean code and intuitive
            design. Turning ideas into functional beauty
          </p>
        </div>
        <div className='relative'>
          <Image
            // ref={imageRef}
            src='/Images/edwin.png'
            alt='foto'
            width={393}
            height={393}
            style={{
              width: 'clamp(24.56rem, 63.56vw, 47.13rem)',
            }}
            className='animate-breathe-edwin relative z-10 mx-auto mt-13.5 will-change-transform'
          />
          <div className='flex-between absolute top-[76.6%] z-10 w-full md:top-[62.7%]'>
            <div className='flex-start gap-3 md:gap-4'>
              {socialMediaData.map((icon) => (
                <Link
                  key={icon.alt}
                  href={icon.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-center animate-breathe hover:shadow-blue-glow size-12 rounded-full bg-[rgba(10,13,18,0.5)] p-3 transition-transform hover:scale-105 hover:animate-none md:size-15'
                >
                  {icon.socialIcon}
                </Link>
              ))}
            </div>
            <Link
              href='#contact'
              className='flex-center hover:shadow-blue-glow animate-breathe size-12 cursor-pointer gap-2 rounded-full bg-[rgba(10,13,18,0.5)] px-4 py-1 hover:scale-104 hover:animate-none md:h-10 md:w-fit'
            >
              <span className='text-neutral-25 text-lg-regular max-md:hidden'>
                Scroll Down
              </span>
              <ArrowDown className='size-5' color='#FDFDFD' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
