'use client';

import { motion } from 'framer-motion';
import TypeWriter from 'typewriter-effect';

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 mb-10">
        <motion.h1 variants={textVariant(0.3)} className={styles.heroHeading}>
          Hi, I'm Fitri!
        </motion.h1>
        <motion.h1
          variants={textVariant(0.3)}
          className={`${styles.heroSubHeading} text-center w-2/3 mb-4`}
        >
          <TypeWriter
            options={{
              delay: 40,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Software Developer and Tech Enthusiast')
                .start();
            }}
          />
        </motion.h1>
      </div>

      <motion.div
        variants={fadeIn('up', 'tween', 1.6, 1)}
        className="relative w-[80%] mx-auto"
      >
        <img
          src="/hero.png"
          alt="hero_cover"
          className="w-full h-full object-cover z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
