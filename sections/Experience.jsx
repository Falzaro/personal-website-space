'use client';

import { motion } from 'framer-motion';

import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

import styles from '../styles';

const Experience = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| Experience" textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <div className="flex items-center mx-auto">
          <img
            src="/single planet netapp.svg"
            alt="get-started"
            className="w-1/4 h-1/4 object-contain -mb-2"
          />
          <div className="flex flex-col">
            <TitleText title={<>NetApp</>} />
            <p className="text-[#8B949E]">September 2020 - December 2022</p>
          </div>
        </div>
        <div className="mt-[31px] flex flex-col max-w-[500px] md:max-w-[600px] gap-[24px] mx-auto">
          <div className={`${styles.card}`}>
            <p className="text-white text-2xl md:text-3xl font-medium pb-6 px-4">
              Full Stack Developer
            </p>
            <ul className="list-disc text-white px-4 space-y-6 md:text-xl">
              <li>
                Spearheaded the front-end development of the reservation
                application, taking the project from concept to beta release.
              </li>
              <li>
                Gained mastery in Git, Bitbucket, Atlassian, and other project
                management and collaboration tools.
              </li>
              <li>
                Created user-friendly reservation system and maintained
                PostgreSQL databases and Django Rest Framework APIs.
              </li>
              <li>
                Demonstrated expertise in web security by configuring Apache and
                Axios to handle and maintain access tokens from Azure.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Experience;
