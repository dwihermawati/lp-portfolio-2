import Image, { StaticImageData } from 'next/image';
import React from 'react';

import DonutChart from './donutChart';

export type SkillsProps = {
  icon: StaticImageData;
  label: string;
  value: number;
  description: string;
  delayMs?: number;
};

const SkillCard: React.FC<SkillsProps> = ({
  icon,
  label,
  value,
  description,
  delayMs = 0,
}) => {
  return (
    <div className='flex-start hover:shadow-blue-glow gap-4 rounded-xl border border-neutral-300 bg-white p-4 md:gap-6 md:p-6'>
      <DonutChart value={value} delayMs={delayMs} />
      <div className='flex flex-col gap-2 md:gap-1'>
        <div className='flex-start gap-2'>
          <Image src={icon} alt={label} className='size-8' />
          <span className='text-md-semibold md:text-lg-semibold text-neutral-950'>
            {label}
          </span>
        </div>
        <p className='text-sm-regular md:text-md-regular text-neutral-800'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
