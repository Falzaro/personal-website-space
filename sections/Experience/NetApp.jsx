'use client';

import { motion } from 'framer-motion';

import { TitleText, TypingText } from '../../components';
import { staggerContainer, fadeIn } from '../../utils/motion';

import styles from '../../styles';

const NetApp = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-03 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| Experience" textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* Company name */}
        <div className="flex items-center mx-auto lg:mb-10">
          <img
            src="/single planet netapp.svg"
            alt="get-started"
            className="w-1/4 h-1/4 object-contain -mb-2"
          />
          <div className="flex flex-col">
            <TitleText title={<>NetApp</>} textStyles="lg:text-center" />
            <p className="text-[#8B949E] lg:text-lg">
              September 2020 - December 2022
            </p>
          </div>
        </div>
        {/* section */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.5, 1)}
          className="mt-[31px] w-full flex items-center justify-center gap-8 lg:gap-12 xl:gap-18 2xl:gap-24 mx-auto"
        >
          {/* Card */}
          <div
            className={`${styles.card} max-w-[500px] md:max-w-[600px] lg:max-w-[550px]`}
          >
            {/* Job title */}
            <p className="text-white text-2xl md:text-3xl 2xl:text-4xl font-medium pb-6 px-4">
              Full Stack Developer
            </p>
            {/* Job summary */}
            <ul className="list-disc text-white px-4 space-y-6 lg:space-y-8 lg:leading-8 2xl:leading-9 md:text-xl 2xl:text-xl">
              <li>
                Spearheaded the front-end development of the reservation
                application, taking the project from concept to beta release.
              </li>
              <li>
                Created user-friendly reservation system and maintained
                PostgreSQL databases and Django Rest Framework APIs.
              </li>
              <li>
                Demonstrated expertise in web security by configuring Apache and
                Axios to handle and maintain access tokens from Azure.
              </li>
              <li>
                Gained mastery in Git, Bitbucket, Atlassian, and other project
                management and collaboration tools.
              </li>
            </ul>
          </div>
          <motion.div
            variants={fadeIn('left', 'tween', 1, 1)}
            className="w-[50%] max-w-[600px] max-h-[650px] 2xl:max-h-[680px] hidden lg:block h-screen flex-1"
          >
            <img
              src="/netapp.png"
              alt="netapp"
              className="w-full h-full object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default NetApp;
