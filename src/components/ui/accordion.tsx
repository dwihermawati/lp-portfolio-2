'use client';

import { Icon } from '@iconify/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        '!border-l-primary-300 group mb-4 rounded-xl border border-l-[10px] border-neutral-300 bg-neutral-50 px-4 py-5 md:mb-6 md:px-8',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          '!text-md-semibold md:text-xl-semibold group-hover:text-primary-300 data-[state=open]:text-primary-300 group/trigger flex-between flex-1 cursor-pointer gap-4 text-left transition-all',
          className
        )}
        {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='flex-center group-hover:border-primary-300 group-data-[state=open]:border-primary-300 size-7 shrink-0 rounded-full border border-neutral-300 bg-white md:size-8'>
          <Icon
            icon='ic:round-plus'
            className='group-data-[state=open]/trigger:hidden'
            color='#0A0D12'
          />
          <Icon
            icon='ic:round-minus'
            className='group-data-[state=closed]/trigger:hidden'
            color='#0A0D12'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular md:text-md-regular overflow-hidden'
      {...props}
    >
      <div
        className={cn(
          'text-sm-regular md:text-md-regular mt-4 text-neutral-950 md:mt-6',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
