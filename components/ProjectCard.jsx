'use client';

import { EyeIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const ProjectCard = ({ source, name }) => (
  <div className="relative w-[400px] max-h-[324px] shadow-xl rounded-xl cursor-pointer transform-origin-center transition-transform duration-200">
    <img className="w-full h-full object-contain" src={source} alt={name} />
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
        },
      }}
      initial="hidden"
      whileHover="show"
      className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-xl"
    >
      <div className="flex justify-between items-center gap-x-10">
        <div className="p-4 bg-black rounded-full">
          <EyeIcon className="w-6 h-6 text-white" />
        </div>
        <div className="p-4 bg-black rounded-full">
          <ViewfinderCircleIcon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  </div>
);

export default ProjectCard;
