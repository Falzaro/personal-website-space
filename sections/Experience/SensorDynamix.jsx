'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { TitleText } from '../../components';
import { staggerContainer, fadeIn } from '../../utils/motion';

import styles from '../../styles';

const SensorDynamix = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-04 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-[1440px] mx-auto flex flex-col gap-8"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* Company name */}
        <div className="flex items-center mx-auto lg:mb-10">
          <Image
            src="/single planet sensor dynamix.svg"
            alt="Planet"
            className="object-contain -mb-2"
            width={200}
            height={200}
          />
          <div className="flex flex-col">
            <TitleText
              title={<>Sensor Dynamix</>}
              textStyles="lg:text-center"
            />
            <p className="text-[#8B949E] lg:text-lg">
              September 2020 - December 2022
            </p>
          </div>
        </div>
      </motion.div>
      {/* Job Description */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="mt-[31px] w-full flex items-center justify-center gap-8 lg:gap-24 xl:gap-24 2xl:gap-40 mx-auto flex-col lg:flex-row"
      >
        {/* Card */}
        <div className={`${styles.card} max-w-[500px] lg:max-w-[550px]`}>
          {/* Job title */}
          <p className="text-white text-2xl md:text-3xl 2xl:text-4xl font-medium pb-6 px-4">
            Software Engineer & UI/UX Designer
          </p>
          {/* Job summary */}
          <ul className="list-disc text-white px-4 space-y-6 lg:space-y-8 lg:leading-8 2xl:leading-9 md:text-xl 2xl:text-xl">
            <li>
              Developed a cross-platform mobile app and website using React
              Native and ReactJS frameworks.
            </li>
            <li>
              Integrated OAuth and Firebase Authentication to allow users to
              sign in with their Google accounts.
            </li>
            <li>
              Designed a website and mobile app using Adobe XD, with over 200
              artboards.
            </li>
          </ul>
        </div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.8, 1)}
          className="flex flex-col gap-8 lg:gap-10"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://xd.adobe.com/view/4061448c-8e8b-4352-8657-0d6573552a15-1532/"
          >
            <div className={`${styles.mockupCard}`}>
              <Image
                className="w-full object-contain"
                src="/website mockup.png"
                alt="website mockup"
                width={500}
                height={500}
              />
              <p className="pt-4 px-4 text-white text-2xl font-medium text-center rounded-b-xl">
                Website Mockup
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://xd.adobe.com/view/6c6b2732-ee16-4dfb-aff8-026d25231d2f-3938/"
          >
            <div className={`${styles.mockupCard}`}>
              <Image
                className="w-full object-contain"
                src="/mobile mockup.png"
                alt="mobile mockup"
                width={500}
                height={500}
              />
              <p className="pt-4 px-4 text-white text-2xl font-medium text-center rounded-b-xl">
                Mobile Mockup
              </p>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default SensorDynamix;
