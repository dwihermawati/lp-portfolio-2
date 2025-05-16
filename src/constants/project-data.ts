import { StaticImageData } from 'next/image';

import project3Icon from '../../public/Icons/company-profile-icon.svg';
import project2Icon from '../../public/Icons/dashboard-icon.svg';
import project1Icon from '../../public/Icons/landing-page-icon.svg';

type Project = {
  icon: StaticImageData;
  // icon: string;
  name: string;
  description: string;
  // href: string;
};

export const projectsData: Project[] = [
  {
    icon: project1Icon,
    // icon: '/Icons/landing-page-icon.svg',
    name: 'Landing Page',
    description: '5 Project',
    // href: '#projects',
  },
  {
    icon: project2Icon,
    // icon: '/Icons/dashboard-icon.svg',
    name: 'Dashboard Saas',
    description: '7 Project',
  },
  {
    icon: project3Icon,
    // icon: '/Icons/company-profile-icon.svg',
    name: 'Company Profile',
    description: '12 Project',
  },
];
