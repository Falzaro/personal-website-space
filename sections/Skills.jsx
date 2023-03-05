'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import SkillsCard from '../components/SkillsCard';

import mapImage from '../public/map.png';
import serversImage from '../public/servers.png';
import frontendImage from '../public/frontend.png';
import designImage from '../public/design.png';

const Skills = () => (
  <section id="skills" className={`${styles.paddings} relative z-10 mt-20`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          MASTERING lATEST tECHNOLOGIES
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <div className="absolute hidden md:flex w-full h-[550px]">
          <Image
            priority
            src={mapImage}
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.innerWidth} h-full mx-auto flex flex-col lg:flex-row items-center lg:justify-center gap-[50px] lg:gap-[100px] my-20`}
        >
          <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
            <SkillsCard
              source={serversImage}
              title="Backend"
              items={[
                'NodeJS',
                'Express',
                'Python',
                'MongoDB',
                'PostgreSQL',
                'Django',
                'GraphQL',
                'MySQL',
              ]}
            />
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.6, 1)}>
            <SkillsCard
              source={frontendImage}
              title="Frontend"
              items={[
                'React',
                'JavaScript',
                'TypeScript',
                'Redux',
                'React Native',
                'Material-UI',
                'HTML',
                'CSS',
              ]}
            />
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.9, 1)}>
            <SkillsCard
              source={designImage}
              title="UI/UX"
              items={['Figma', 'Adobe XD', 'Photoshop']}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
