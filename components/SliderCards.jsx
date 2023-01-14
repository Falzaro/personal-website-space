'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swipeable } from 'react-swipeable';
import Image from 'next/image';

const slides = [
  '/athletics_1.png',
  '/dining_hall.png',
  '/maps.png',
  '/helpful_hours.png',
];

function SliderCards() {
  const [position, positionSet] = useState(0);
  const handleSwipe = ({ dir }) => {
    if (dir === 'Right') {
      if (position < slides.length - 1) {
        positionSet(position + 1);
      }
    }
    if (dir === 'Left') {
      if (position > 0) {
        positionSet(position - 1);
      }
    }
  };

  return (
    <div className="relative">
      {slides.map((url, index) => (
        <motion.div
          // className="absolute w-[60vw] h-[60vw] bg-white rounded-3xl shadow-xl"
          key={index}
          initial={{ scale: 0, rotation: -180 }}
          animate={{
            rotate: 0,
            left: `${(index - position) * 60 - 30}vw`,
            scale: index === position ? 1 : 0.8,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <img
            src="/single planet Tabor College.svg"
            alt="get-started"
            className="w-full h-full object-contain -mb-2"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default SliderCards;
