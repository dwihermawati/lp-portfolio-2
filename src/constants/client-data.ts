import { StaticImageData } from 'next/image';

import profileSrc1 from '../../public/Images/client-1.png';
import profileSrc2 from '../../public/Images/client-2.png';
import profileSrc3 from '../../public/Images/client-3.png';
import profileSrc4 from '../../public/Images/client-4.png';
import profileSrc5 from '../../public/Images/client-5.png';
import profileSrc6 from '../../public/Images/client-6.png';
import profileSrc7 from '../../public/Images/client-7.png';
import profileSrc8 from '../../public/Images/client-8.png';
import iconCompany1 from '../../public/Icons/companyIcon5.png';
import iconCompany2 from '../../public/Icons/companyIcon6.png';
import iconCompany3 from '../../public/Icons/companyIcon7.png';
import iconCompany4 from '../../public/Icons/companyIcon8.png';

type Client = {
  profileSrc: StaticImageData;
};

export const clientsData: Client[] = [
  {
    profileSrc: profileSrc1,
  },
  {
    profileSrc: profileSrc3,
  },
  {
    profileSrc: profileSrc2,
  },
  {
    profileSrc: profileSrc4,
  },
];

type ClientTestimonial = {
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
  description: string;
  companyIcon: StaticImageData;
};

export const clientsTestimonial: ClientTestimonial[] = [
  {
    profileSrc: profileSrc5,
    profileName: 'Jack Grealish',
    profileOccupation: 'CEO Adobe',
    companyIcon: iconCompany1,
    description: 'They tailor their solutions to our specific needs and goals.',
  },
  {
    profileSrc: profileSrc6,
    profileName: 'Kevin De Bruyne',
    profileOccupation: 'Project Manager Air BNB',
    companyIcon: iconCompany2,
    description:
      'They organized their work and internal management was outstanding.',
  },
  {
    profileSrc: profileSrc7,
    profileName: 'Jeremy Doku',
    profileOccupation: 'Senior Developers Loom',
    companyIcon: iconCompany3,
    description: 'Working with them was a great experience.',
  },
  {
    profileSrc: profileSrc8,
    profileName: 'Maemunah',
    profileOccupation: 'CEO Spotify',
    companyIcon: iconCompany4,
    description: 'They tailor their solutions to our specific needs and goals.',
  },
];
