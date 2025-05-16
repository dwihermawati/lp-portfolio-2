import Image from 'next/image';
import React from 'react';

import { CountUp } from '@/components/ui/countUp';
import ProjectCard from '@/components/ui/projectCard';

import { clientsData } from '@/constants/client-data';
import { projectsData } from '@/constants/project-data';

export const About: React.FC = () => {
  const happyClients = clientsData.slice(0, 4);

  return (
    <section
      id='about'
      className='custom-container flex-between flex-wrap gap-10 py-10 md:gap-16 md:py-20'
    >
      <div className='bg-primary-100 flex flex-[1.8] basis-80 flex-col gap-3 rounded-2xl p-4 hover:scale-101 md:gap-4 md:rounded-3xl md:p-6'>
        {projectsData.map((project) => (
          <ProjectCard
            icon={project.icon}
            name={project.name}
            description={project.description}
            key={project.name}
          />
        ))}
      </div>
      <div className='flex flex-[8.2] basis-80 flex-col gap-10'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3 md:gap-2'>
            <div className='text-xs-regular md:text-sm-regular flex-center w-fit rounded-4xl border border-neutral-300 bg-white px-3 py-0.5 text-neutral-700 md:px-4'>
              ABOUT ME
            </div>
            <h2 className='display-md-bold md:display-2xl-bold text-neutral-950'>
              What Do I Help?
            </h2>
          </div>
          <p className='text-md-regular text-neutral-800'>
            I am a Frontend Developer dedicated to solving problems and creating
            impactful digital experiences. By combining process-driven design
            and modern development practices, I build intuitive and responsive
            digital products that not only enhance user satisfaction but also
            drive business success. Let’s collaborate to bring your vision to
            life and elevate your digital presence
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-6 sm:justify-between md:justify-center lg:items-center lg:justify-between'>
          <div className='flex-center gap-6'>
            <Image
              src='/Icons/project-complete-icon.svg'
              alt='project complete'
              width={92}
              height={104}
            />
            <div>
              <h2 className='display-md-bold md:display-2xl-bold text-neutral-950'>
                <CountUp to={200} suffix='+' />
              </h2>
              <p className='text-md-regular text-neutral-800'>
                Project Completed
              </p>
            </div>
          </div>
          <div className='flex-center gap-6'>
            <div className='flex items-center'>
              {happyClients.map((client, index) => (
                <div
                  key={index}
                  className={`size-12 overflow-hidden rounded-full md:size-13 ${
                    index !== 0 ? '-ml-3' : ''
                  }`}
                >
                  <Image
                    src={client.profileSrc}
                    alt='client'
                    width={48}
                    height={48}
                    className='size-full object-cover'
                  />
                </div>
              ))}
            </div>
            <div>
              <h2 className='display-md-bold md:display-2xl-bold text-neutral-950'>
                <CountUp to={50} suffix='+' duration={1000} />
              </h2>
              <p className='text-md-regular text-neutral-800'>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
