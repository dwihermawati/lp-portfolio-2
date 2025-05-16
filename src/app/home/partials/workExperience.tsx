'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

import { Section } from '@/components/layouts/section';

import { workExperienceData } from '@/constants/work-experience-data';

export const WorkExperience: React.FC = () => {
  return (
    <Section title='WORK EXPERIENCE' subtitle='Profesional Career'>
      <div className='space-y-4'>
        {workExperienceData.map((work, i) => (
          <WorkExperienceCard
            key={i}
            index={i}
            company={work.company}
            year={work.year}
            position={work.position}
            description={work.description}
            icon={work.icon}
          />
        ))}
      </div>
    </Section>
  );
};

type ExperienceProps = {
  company: string;
  year: string;
  position: string;
  description: string;
  icon: StaticImageData;
  index: number;
};

const WorkExperienceCard: React.FC<ExperienceProps> = ({
  company,
  description,
  icon,
  position,
  year,
  index,
}) => {
  // const refCard = useRef(null);
  // const isCardInView = useInView(refCard, { once: true, amount: 0.5 });
  // const [hasEntered, setHasEntered] = useState(false);

  // useEffect(() => {
  //   if (isCardInView) {
  //     setHasEntered(true);
  //   }
  // }, [isCardInView]);

  // const refDecor = useRef(null);
  // const isDecorInView = useInView(refDecor, { once: false });
  return (
    <motion.div
      className='bg-neutral-25 relative w-full overflow-hidden rounded-xl border border-neutral-300 p-4 md:rounded-2xl md:p-6'
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      // animate={hasEntered ? { opacity: 1, y: 0 } : {}}
      // ref={refCard}
    >
      <div className='flex-start flex-wrap gap-4 md:gap-12'>
        <div className='relative grid flex-[0.7] shrink-0 basis-70 items-center gap-4 md:grid-cols-[5.7rem_auto] md:gap-12'>
          <motion.div
            className='from-gradient-purple to-gradient-blue absolute top-1/2 -left-[28%] z-0 size-53.75 -translate-y-1/2 bg-linear-to-br from-32% to-100% max-lg:-left-[35%] max-md:hidden md:rounded-full lg:-left-[30%]'
            initial={{ scaleX: 0 }}
            // animate={isDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: false }}
            // style={{ originX: 0 }}
          ></motion.div>
          <motion.div
            className='from-gradient-purple to-gradient-blue absolute top-[7.3%] left-0 z-0 h-13.75 w-27.25 -translate-x-[15%] -translate-y-1/2 rounded-r-full bg-linear-to-br from-32% to-100% md:hidden'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            // animate={isDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: false }}
          ></motion.div>
          <span className='text-neutral-25 text-sm-semibold md:text-md-semibold z-10'>
            {year}
          </span>
          <div>
            <p className='text-lg-semibold md:text-xl-semibold mb-3 text-neutral-950 md:mb-2'>
              {position}
            </p>
            <div className='flex gap-2'>
              <Image src={icon} alt={company} className='size-8' />
              <span className='md:text-lg-medium text-md-medium text-neutral-950'>
                {company}
              </span>
            </div>
          </div>
        </div>
        <p className='text-sm-regular md:text-md-regular flex-[9.3] basis-80 text-neutral-800 md:max-w-184.5'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};
