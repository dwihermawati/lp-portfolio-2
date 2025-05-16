import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type PortfolioProps = {
  imageSrc: StaticImageData;
  name: string;
  stack: string[];
  isActive?: boolean;
};

const CardPortfolio: React.FC<PortfolioProps> = ({
  imageSrc,
  name,
  stack,
  isActive,
}) => {
  return (
    <div className='group flex-center relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.01]'>
      <div
        className={cn(
          'pointer-events-none absolute bottom-0 z-10 size-full rounded-xl bg-gradient-to-b from-black/0 via-black/26 to-black/80 opacity-0 transition-opacity duration-300 md:h-60.5 md:rounded-2xl',
          {
            'opacity-100': isActive,
            'group-hover:opacity-100': true,
          }
        )}
      >
        <div className='flex-between absolute inset-x-4 bottom-4 z-15 md:bottom-8 xl:inset-x-8'>
          <div className='flex flex-col gap-3 md:gap-4'>
            <h4 className='text-neutral-25 text-lg-semibold md:text-xl-semibold'>
              {name}
            </h4>
            <div className='flex gap-2'>
              {stack.map((tech, idx) => (
                <div
                  key={idx}
                  className='flex-center bg-neutral-25 md:text-sm-regular text-xs-regular h-6 w-fit rounded-full px-2 text-neutral-950 md:h-9 md:px-3'
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className='max-sm:hidden'>
            <Link
              href='#'
              className='flex-center group-hover:shadow-blue-glow size-16 rounded-full border border-neutral-300 bg-white p-2 hover:scale-103'
            >
              <Icon
                icon='solar:arrow-right-up-linear'
                className='size-6'
                color='#0A0D12'
              />
            </Link>
          </div>
        </div>
      </div>

      <Image
        src={imageSrc}
        alt={name}
        className='z-0 h-full w-full object-cover'
      />
    </div>
  );
};
export default CardPortfolio;
