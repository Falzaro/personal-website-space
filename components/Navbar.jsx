'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative top-0 z-10`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01 z-0 pointer-events-none" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain -rotate-180 cursor-pointer lg:hidden"
      />
      <div className="hidden lg:flex text-white space-x-[105px] font-medium text-[24px] [&>*]:cursor-pointer">
        <p>About me</p>
        <p>Experience</p>
        <p>Skills</p>
        <p>Projects</p>
      </div>
      <a href="/Fitri_Rozi_Resume_2023.pdf" download>
        <div className={`${styles.flexCenter} gap-2 cursor-pointer`}>
          <img
            src="/download.png"
            alt="search"
            className="w-[24px] h-[24px] object-contain mt-1"
          />
          <p className="text-white text-[24px] font-medium">Resume</p>
        </div>
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
