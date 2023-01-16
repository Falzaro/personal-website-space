'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn } from '../utils/motion';

const SkillsCard = ({ source, title, items, delay }) => (
  <motion.div
    variants={fadeIn('up', 'tween', delay, 1)}
    className="flex flex-col h-[690px] lg:h-[650px] max-w-[320px] min-w-[300px] lg:max-w-[260px] rounded-lg bg-[#21262D] shadow-xl z-20"
  >
    <div className="max-h-[262px]">
      <Image
        src={source}
        alt={title}
        className="object-contain"
        width={400}
        height={400}
      />
    </div>
    <div className="flex-1 flex flex-col justify-center items-center p-6">
      <p className="text-white text-[28px] font-bold text-center mb-3">
        {title}
      </p>
      <ul className="w-full flex-1 flex flex-col items-center text-md lg:text-[18px] leading-10 text-white">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default SkillsCard;
