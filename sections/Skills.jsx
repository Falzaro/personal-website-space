'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import SkillsCard from '../components/SkillsCard';

const Skills = () => (
  <section className={`${styles.paddings} relative z-10 mt-10`}>
    <div className="gradient-04 left-0 top-20" />
    <div className="gradient-04" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Technical skills" textStyles="text-center" />
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
        <TitleText
          title={
            <>
              Dedicated to mastering the latest and most scalable technologies
            </>
          }
          textStyles="text-center md:text-[42px]"
        />
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <div className="absolute flex w-full h-[550px]">
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.innerWidth} h-full mx-auto flex flex-col lg:flex-row items-center lg:justify-center gap-[50px] lg:gap-[100px] my-20`}
        >
          <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
            <SkillsCard
              source="/servers.png"
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
              source="/frontend.png"
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
              source="/design.png"
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
