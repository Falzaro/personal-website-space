'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import VanillaTilt from 'vanilla-tilt';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      scale: 1.1,
    });
  }, []);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      ref={tiltRef}
      className="w-[250px] rounded-[20px]"
    >
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-primary-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
