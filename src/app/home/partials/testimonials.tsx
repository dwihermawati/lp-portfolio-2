import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';
import { clientsTestimonial } from '@/constants/client-data';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <Section title='TESTIMONIALS' subtitle='What Our Clients Say'>
      <Carousel className='overflow-hidden lg:w-screen'>
        <CarouselContent>
          {clientsTestimonial.map((item, index) => (
            <CarouselItem key={index}>
              <TestimonialCard
                companyIcon={item.companyIcon}
                description={item.description}
                profileName={item.profileName}
                profileOccupation={item.profileOccupation}
                profileSrc={item.profileSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};

type ClientProps = {
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
  description: string;
  companyIcon: StaticImageData;
};

const TestimonialCard: React.FC<ClientProps> = ({
  profileSrc,
  companyIcon,
  description,
  profileName,
  profileOccupation,
}) => {
  return (
    <div className='bg-neutral-25 hover:bg-purple-gradient group space-y-8 rounded-2xl border border-neutral-300 p-4 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.01] md:space-y-12 md:p-6'>
      <Image
        src={companyIcon}
        alt={profileName}
        style={{ width: 'clamp(4.13rem, 11.23vw, 8.31rem)', height: 'auto' }}
        className='group-hover:brightness-0 group-hover:invert group-hover:filter'
      />
      <Icon
        icon='bxs:quote-right'
        className='group-hover:fill-neutral-25 group-hover:text-neutral-25 size-8 text-neutral-300 md:size-12'
        style={{ fill: 'currentColor' }}
      />
      <p className='text-xl-medium md:display-sm-medium group-hover:text-neutral-25 text-neutral-950 md:min-h-38'>
        {description}
      </p>
      <div className='flex-start gap-3'>
        <Image src={profileSrc} alt={profileName} className='size-15' />
        <div>
          <p className='text-sm-semibold md:text-md-semibold group-hover:text-neutral-25 text-neutral-950 md:mb-0.5'>
            {profileName}
          </p>
          <p className='text-sm-regular md:text-md-regular group-hover:text-neutral-25 text-neutral-500'>
            {profileOccupation}
          </p>
        </div>
      </div>
    </div>
  );
};
