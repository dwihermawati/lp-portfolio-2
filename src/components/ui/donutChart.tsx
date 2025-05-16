'use client';

import { useEffect, useRef, useState } from 'react';

import { CountUp } from '@/components/ui/countUp';

interface DonutChartProps {
  value: number;
  delayMs?: number;
}

export default function DonutChart({ value, delayMs = 0 }: DonutChartProps) {
  const [size, setSize] = useState(120);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const strokeWidth = 13;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 768 ? 98 : 120);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShouldAnimate(true), delayMs);
        } else {
          setShouldAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [delayMs]);

  const offset = shouldAnimate
    ? circumference * (1 - value / 100)
    : circumference;

  return (
    <div
      ref={ref}
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

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='#D5D7DA'
          strokeWidth={strokeWidth}
          fill='none'
        />
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
          transform={`rotate(0 ${size / 2} ${size / 2})`}
          style={{
            transition: 'stroke-dashoffset 1.2s ease',
          }}
        />
      </svg>

      <div
        className='display-xs-medium flex-center absolute rounded-full bg-white text-black md:text-neutral-950'
        style={{
          width: size * 0.7701,
          height: size * 0.7701,
        }}
      >
        <CountUp to={shouldAnimate ? value : 0} suffix='%' duration={1000} />
      </div>
    </div>
  );
}
