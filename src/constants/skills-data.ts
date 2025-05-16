import { StaticImageData } from 'next/image';

import iconTech5 from '../../public/Icons/docker-icon.png';
import iconTech8 from '../../public/Icons/docker-icon.png';
import iconTech1 from '../../public/Icons/html-icon.png';
import iconTech12 from '../../public/Icons/html-icon.png';
import iconTech2 from '../../public/Icons/js-icon.png';
import iconTech11 from '../../public/Icons/js-icon.png';
import iconTech4 from '../../public/Icons/mongo-icon.png';
import iconTech9 from '../../public/Icons/mongo-icon.png';
import iconTech10 from '../../public/Icons/react-icon.png';
import iconTech3 from '../../public/Icons/react-icon.png';
import iconTech6 from '../../public/Icons/ts-icon.png';
import iconTech7 from '../../public/Icons/ts-icon.png';

export type SkillData = {
  icon: StaticImageData;
  label: string;
  value: number;
  description: string;
};

export const skillsData: SkillData[] = [
  {
    // icon: '/Images/html.png',
    icon: iconTech1,
    label: 'HTML',
    value: 90,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech2,
    label: 'Javascript',
    value: 90,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech3,
    label: 'React JS',
    value: 90,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech4,
    label: 'Mongo DB',
    value: 90,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech5,
    label: 'Docker',
    value: 90,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech6,
    label: 'Typescript',
    value: 90,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech7,
    label: 'Framer Motion',
    value: 80,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech8,
    label: 'Radix UI',
    value: 80,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech9,
    label: 'Redux',
    value: 85,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech10,
    label: 'CSS',
    value: 95,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech11,
    label: 'Tailwind CSS',
    value: 95,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
  {
    // icon: '/Images/html.png',
    icon: iconTech12,
    label: 'Figma',
    value: 80,
    description:
      'Building the structure of web pages with semantic markup for accessibility .',
  },
];
