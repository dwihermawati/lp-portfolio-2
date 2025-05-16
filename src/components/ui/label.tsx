'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(
        'text-sm-semibold md:text-md-semibold flex items-center gap-1.5 text-neutral-950 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 md:gap-2',
        className
      )}
      {...props}
    />
  );
}

export { Label };
