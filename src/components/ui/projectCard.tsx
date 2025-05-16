import Image, { StaticImageData } from 'next/image';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectProps = {
  icon: StaticImageData;
  // icon: string;
  name: string;
  description: string;
  href?: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  icon,
  name,
  description,
  href = '#projects',
}) => {
  return (
    <Link href={href}>
      <div className='flex-start hover:shadow-blue-glow cursor-pointer gap-4 rounded-xl bg-white p-4 hover:scale-101 md:rounded-2xl md:p-6'>
        <Image
          src={icon}
          alt={name}
          width={48}
          height={48}
          className='md:size-16'
        />
        <div>
          <p className='text-md-semibold md:text-lg-semibold mb-0.5 text-neutral-950 md:mb-1'>
            {name}
          </p>
          <p className='text-sm-regular md:text-md-regular text-neutral-500'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
