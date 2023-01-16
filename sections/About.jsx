'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section id="aboutMe" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-11" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gradient-05 rounded-2xl lg:py-8 p-6 pt-8 md:p-10 lg:px-16`}
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
        web applications, including a proprietary reservation system for a{' '}
        <span className="font-extrabold text-white">Fortune 500 company</span>{' '}
        and a mobile app for a college with{' '}
        <span className="font-extrabold text-white">over 700 students</span> and
        faculty. I am passionate about using technology to create meaningful
        change and love to work with a team of like-minded individuals who share
        similar passion.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
