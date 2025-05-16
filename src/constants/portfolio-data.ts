import { StaticImageData } from 'next/image';

import project1Src from '../../public/Images/experience1.png';
import project2Src from '../../public/Images/experience2.png';
import project3Src from '../../public/Images/experience3.png';
import project4Src from '../../public/Images/experience4.png';
import project5Src from '../../public/Images/experience5.png';
import project6Src from '../../public/Images/experience6.png';
import project7Src from '../../public/Images/experience7.png';
import project8Src from '../../public/Images/experience8.png';

type Portfolio = {
  id: number;
  imageSrc: StaticImageData;
  name: string;
  stack: string[];
};

export const portfolioData: Portfolio[] = [
  {
    id: 1,
    imageSrc: project1Src,
    // imageSrc: '/Images/experience1.png',
    name: 'Vacation Landing Page',
    stack: ['React', 'Tailwind', 'Responsive'],
  },
  {
    id: 2,
    imageSrc: project2Src,
    // imageSrc: '/Images/experience2.png',
    name: 'Landing Page',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    id: 3,
    imageSrc: project3Src,
    // imageSrc: '/Images/experience3.png',
    name: 'Landing Page',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    id: 4,
    imageSrc: project4Src,
    // imageSrc: '/Images/experience4.png',
    name: 'Landing Page',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    id: 5,
    imageSrc: project5Src,
    // imageSrc: '/Images/experience5.png',
    name: 'Landing Page',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    id: 6,
    imageSrc: project6Src,
    // imageSrc: '/Images/experience6.png',
    name: 'Landing Page',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    id: 7,
    imageSrc: project7Src,
    // imageSrc: '/Images/experience6.png',
    name: 'Landing Page',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    id: 8,
    imageSrc: project8Src,
    // imageSrc: '/Images/experience6.png',
    name: 'Landing Page',
    stack: ['React', 'HTML', 'CSS'],
  },
];
