'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';

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
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      viewport={{ once: true }}
    >
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
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer tooltip"
              data-tip="Live Preview"
            >
              <img
                src="/web.svg"
                alt="Live preview"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer tooltip"
              data-tip="Source Code"
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
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 1)}
        className="mt-3 text-secondary text-[18px] lg:text-[22px] max-w-3xl leading-[30px]"
      >
        The following projects showcase my skills and experience through
        real-world examples of my work. Each project is accompanied by a brief
        description, as well as links to the corresponding live demo and code
        repositories. Together, these projects demonstrate my ability to
        effectively solve complex problems and work with a diverse range of
        technologies.
      </motion.p>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default SectionWrapper(Projects, 'projects');
