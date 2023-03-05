'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section id="aboutMe" className={`${styles.paddings} relative z-10`}>
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
        As a software developer with{' '}
        <span className="font-extrabold text-white">
          five years of experience
        </span>
        , I have built several large-scale web applications for diverse clients
        and users. Some of my notable projects include a proprietary reservation
        system for a{' '}
        <span className="font-extrabold text-white">Fortune 500 company</span>{' '}
        and a mobile app for{' '}
        <span className="font-extrabold text-white">700+ college students</span>
        . I also have startup experience where I learned to thrive in a
        fast-paced environment and deliver projects under tight deadlines. I am
        passionate about using technology to create meaningful change and love
        to collaborate with a team of like-minded innovators. Let’s work
        together and be at the frontier of innovations!
      </motion.p>
      {/* <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div> */}
    </motion.div>
  </section>
);

export default About;
