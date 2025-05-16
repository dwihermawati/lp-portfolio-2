import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-md-regular h-12 w-full rounded-xl px-4 py-2 ring ring-neutral-300 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:h-14',
        'focus:border-primary-300 focus:border-[1px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
