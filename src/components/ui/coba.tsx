import { CountUp } from '@/components/ui/countUp';

interface DonutChartProps {
  value: number; // 0–100
  size: number; // misalnya 98 atau 120
}

export default function DonutChart({ value, size }: DonutChartProps) {
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div
      className='relative flex items-center justify-center'
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        <defs>
          <linearGradient id='donutGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#9747FF' />
            <stop offset='100%' stopColor='#1179FC' />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='#D5D7DA'
          strokeWidth={strokeWidth}
          fill='none'
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='url(#donutGradient)'
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // start from top
        />
      </svg>

      {/* Center text */}
      <div
        className='text-md absolute flex items-center justify-center rounded-full bg-white font-semibold text-black md:text-lg'
        style={{
          width: size * 0.75,
          height: size * 0.75,
        }}
      >
        <CountUp to={value} suffix='%' duration={1000} />
      </div>
    </div>
  );
}

import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { CountUp } from './countUp';
import DonutChart from './donutChart';

export type SkillsProps = {
  icon: StaticImageData;
  label: string;
  value: number;
  description: string;
};

const SkillCard: React.FC<SkillsProps> = ({
  icon,
  label,
  value,
  description,
}) => {
  return (
    <div className='flex-start hover:shadow-blue-glow gap-4 rounded-xl border border-neutral-300 bg-white p-4 md:gap-6 md:p-6'>
      <div className='flex-center size-24.5 rounded-full bg-neutral-300 p-3.5 md:size-30'>
        <div className='flex-center display-xs-medium size-[75.5px] rounded-full bg-white text-black md:size-[92.4px] md:text-neutral-950'>
          <DonutChart value={value} size={120} />
        </div>
      </div>
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
