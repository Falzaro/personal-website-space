'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
// import { TitleText, TypingText } from '../components';
// import ProjectCard from '../components/ProjectCard';

// import musicAppImage from '../public/music-app.png';
// import moviesAppImage from '../public/movies-app.png';
// import foodAppImage from '../public/food-app.png';
// import socialMediaAppImage from '../public/social-media-app.png';
import { projects } from '../constants';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 20,
      speed: 400,
      glare: false,
      'max-glare': 0.2,
      scale: 1.1,
    });
  }, []);

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div
        ref={tiltRef}
        className="bg-[#1a1d23] p-5 rounded-2xl sm:w-[360px] w-full shadow-xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-3">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/web.svg"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/github.svg"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[#aaa6c3] text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className={`${styles.paddings} mb-24 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      <div className="mt-20 flex flex-wrap gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
