import React from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
}) => {
  return (
    <div id={id} className={cn(className, 'custom-container py-10 md:py-20')}>
      <div className='flex-center flex-col gap-3 md:gap-4'>
        <div className='text-xs-regular md:text-sm-regular flex-center w-fit rounded-4xl border border-neutral-300 bg-white px-3 py-0.5 text-neutral-700 md:px-4'>
          {title}
        </div>
        <h2 className='display-md-bold md:display-2xl-bold text-center text-neutral-950'>
          {subtitle}
        </h2>
      </div>
      <div className='mt-6 md:mt-12'>{children}</div>
    </div>
  );
};
