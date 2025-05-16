import { StaticImageData } from 'next/image';

import iconCompany1 from '../../public/Icons/companyIcon1.png';
import iconCompany2 from '../../public/Icons/companyIcon2.png';
import iconCompany3 from '../../public/Icons/companyIcon3.png';
import iconCompany4 from '../../public/Icons/companyIcon4.png';

type Experience = {
  company: string;
  year: string;
  position: string;
  description: string;
  icon: StaticImageData;
};

export const workExperienceData: Experience[] = [
  {
    company: 'Slack',
    year: '2021 - 2024',
    position: 'Frontend Developer',
    description:
      'Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.',
    icon: iconCompany1,
  },
  {
    company: 'Telegram',
    year: '2021 - 2024',
    position: 'Frontend Developer',
    description:
      'Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.',
    icon: iconCompany2,
  },
  {
    company: 'Line',
    year: '2021 - 2024',
    position: 'Frontend Developer',
    description:
      'Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.',
    icon: iconCompany3,
  },
  {
    company: 'Skype',
    year: '2021 - 2024',
    position: 'Frontend Developer',
    description:
      'Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.',
    icon: iconCompany4,
  },
];
