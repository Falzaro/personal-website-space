'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import ProjectCard from '../components/ProjectCard';

import musicAppImage from '../public/music-app.png';
import moviesAppImage from '../public/movies-app.png';
import foodAppImage from '../public/food-app.png';
import socialMediaAppImage from '../public/social-media-app.png';

const Projects = () => (
  <section id="projects" className={`${styles.paddings} mb-24 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Projects" textStyles="text-center" />
      <TitleText
        title={<>Explore spectacular projects I've put together!</>}
        textStyles="text-center md:text-[42px]"
      />
      <div className="flex flex-wrap justify-center items-center mt-20 gap-16 lg:gap-x-24 lg:gap-y-18 mx-auto">
        <ProjectCard name="music app" source={musicAppImage} />
        <ProjectCard name="movies app" source={moviesAppImage} />
        <ProjectCard name="social media app" source={socialMediaAppImage} />
        <ProjectCard name="food app" source={foodAppImage} />
      </div>
    </motion.div>
  </section>
);

export default Projects;
