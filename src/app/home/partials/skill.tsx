import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';
import SkillCard from '@/components/ui/skillCard';

import { skillsData } from '@/constants/skills-data';
import { chunk } from '@/lib/array';

export const Skill: React.FC = () => {
  const chunkedSkills = chunk(skillsData, 3);
  return (
    <Section title='SKILL' subtitle='Skillset' id='skills'>
      <Carousel>
        <CarouselContent>
          {chunkedSkills.map((group, i) => (
            <CarouselItem key={i} itemsPerSlideClass='basis-full md:basis-1/2'>
              <div className='flex flex-col gap-4'>
                {group.map((skill, j) => (
                  <SkillCard
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                    value={skill.value}
                    description={skill.description}
                    delayMs={j * 200}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};
