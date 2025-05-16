'use client';

import { Section } from '@/components/layouts/section';
import CardPortfolio from '@/components/ui/cardPortfolio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  type CarouselApi,
} from '@/components/ui/carousel';
import { portfolioData } from '@/constants/portfolio-data';
import { chunk } from '@/lib/array';

import React from 'react';

export const Project: React.FC = () => {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const chunkedMobile = chunk(portfolioData, 2);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setActiveIndex(selectedIndex);
    };

    emblaApi.on('select', onSelect);
    onSelect(); // inisialisasi awal

    return () => {
      emblaApi?.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <Section title='PORTFOLIO' subtitle='Latest Project' id='projects'>
      <Carousel
        className='overflow-hidden max-sm:hidden lg:w-screen'
        setApi={setEmblaApi}
      >
        <CarouselContent>
          {portfolioData.map((item, index) => (
            <CarouselItem key={index}>
              <CardPortfolio
                imageSrc={item.imageSrc}
                name={item.name}
                stack={item.stack}
                isActive={index === activeIndex}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>

      <Carousel className='sm:hidden'>
        <CarouselContent>
          {chunkedMobile.map((group, index) => (
            <CarouselItem key={index} className='flex flex-col gap-4'>
              {group.map((item, i) => (
                <CardPortfolio
                  key={i}
                  imageSrc={item.imageSrc}
                  name={item.name}
                  stack={item.stack}
                  isActive={true}
                />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};
