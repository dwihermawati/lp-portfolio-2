'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
};

export const CountUp: React.FC<Props> = ({
  to,
  duration = 3000,
  className = '',
  suffix = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  const animateCount = useCallback(() => {
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easedProgress * to);
      setCount(current);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    cancelAnimationFrame(animationRef.current || 0);
    requestAnimationFrame(step);
  }, [to, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
        }
      },
      { threshold: 0.4 }
    );

    const node = ref.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
      cancelAnimationFrame(animationRef.current || 0);
    };
  }, [animateCount]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};
