'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import {
  staggerContainer,
  fadeIn,
  planetVariants,
  textVariant,
} from '../utils/motion';
import TechCard from '../components/TechCard';

const GetStarted = () => (
  <section id="skills" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.90] flex justify-center flex-col"
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>TECHNOLOGIES LEARNED</p>
          <h2 className={`${styles.sectionHeadText}`}>Technical Skills.</h2>
        </motion.div>
        {/* <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]"> */}
        <div className="mt-[31px] max-w-[600px] grid grid-cols-1 lg:grid-cols-2 gap-7">
          {startingFeatures.map((feature, index) => (
            <TechCard key={feature} feature={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
