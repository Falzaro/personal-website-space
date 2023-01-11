'use client';

import { motion } from 'framer-motion';

import { TitleText } from '../../components';
import { staggerContainer, fadeIn } from '../../utils/motion';

import styles from '../../styles';

const TaborCollege = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* Company name */}
        <div className="flex items-center mx-auto lg:mb-10">
          <img
            src="/single planet Tabor College.svg"
            alt="get-started"
            className="w-1/4 h-1/4 object-contain -mb-2"
          />
          <div className="flex flex-col">
            <TitleText title={<>Tabor College</>} textStyles="lg:text-center" />
            <p className="text-[#8B949E] lg:text-lg">August 2021 - May 2022</p>
          </div>
        </div>
        {/* Job Description */}
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
              Team Lead & Tech Lead
            </p>
            {/* Job summary */}
            <ul className="list-disc text-white px-4 space-y-6 lg:space-y-8 lg:leading-8 2xl:leading-9 md:text-xl 2xl:text-xl">
              <li>
                Led a team of five to develop a mobile app using React-Native
                for 500+ students and faculty.
              </li>
              <li>
                Architected a navigation system that allows users to move
                between 20+ screens.
              </li>
              <li>
                Designed a map that displays the locations of classrooms and
                buildings using the Google Maps API.
              </li>
              <li>
                Successfully drove the entire team to follow scrum and software
                practices with Github to meet project deliverables.
              </li>
            </ul>
          </div>
          <motion.div
            variants={fadeIn('left', 'tween', 1, 1)}
            className="w-[50%] max-w-[600px] max-h-[650px] 2xl:max-h-[700px] hidden lg:block h-screen flex-1"
          >
            <img
              src="/netapp.png"
              alt="netapp"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default TaborCollege;
