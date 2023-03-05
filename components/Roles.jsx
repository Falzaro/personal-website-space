'use client';

import React from 'react';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { services } from '../constants';
import ServiceCard from './ServiceCard';

const Roles = () => (
  <motion.div
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
  </motion.div>
);

export default Roles;
