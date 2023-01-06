'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    // Make navbar position fixed to the top of the viewport
    // classNamae={`${styles.xPaddings} py-8 fixed`}
    // className={`fixed top-0 left-0 w-full z-50 ${styles.yPaddings} sm:pl-16 pl-6`}
    // className={`${styles.xPaddings} py-8 fixed relative top-0 w-full`}
    className={`${styles.xPaddings} py-8 relative top-0 z-10`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
