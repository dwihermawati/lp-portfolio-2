import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-md-regular h-30 w-full resize-none rounded-xl px-4 py-2 ring ring-neutral-300 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:h-45',
        'focus:border-primary-300 focus:border-[1px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
