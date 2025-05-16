import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from '@/constants/faq-data';

export const FAQ: React.FC = () => {
  return (
    <Section id='faq' title='QNA' subtitle='Your Questions, Answered'>
      <Accordion type='single' collapsible>
        {FAQData.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};
