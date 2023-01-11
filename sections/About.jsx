'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal md:text-[28px] text-[20px] text-center text-secondary-white"
      >
        I am a Computer Science major with{' '}
        <span className="font-extrabold text-white">
          three years of professional experience
        </span>{' '}
        in software development. I have contributed to the development of
        several <span className="font-extrabold text-white">large-scale</span>{' '}
        web applications, including a a proprietary reservation system for a{' '}
        <span className="font-extrabold text-white">Fortune 500 company</span>{' '}
        and a mobile app for a college with over 700 students and faculty. I am
        passionate about using technology to create meaningful change and love
        to work with a team of like-minded individuals who share similar
        passion.
      </motion.p>

      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default About;
