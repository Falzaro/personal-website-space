'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const navigation = [
  { name: 'About me', section: 'aboutMe' },
  { name: 'Experience', section: 'experience' },
  { name: 'Skills', section: 'skills' },
  { name: 'Projects', section: 'projects' },
];

const social = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kevin-lee-7b1b3b1b3/',
  },
  { name: 'Github', href: 'https://github.com/Falzaro' },
  { name: 'Gmail', href: 'mailto:fitrirozi1@gmail.com' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01 z-11 pointer-events-none" /> */}
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
      >
        <Image
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain -rotate-180 cursor-pointer lg:hidden"
          width={24}
          height={24}
          onClick={() => setMobileMenuOpen(true)}
        />
        <div className="hidden lg:flex text-white space-x-[105px] font-medium text-[24px] [&>*]:cursor-pointer">
          <Link to="aboutMe" className={`${styles.navItem}`}>
            About me
          </Link>
          <Link to="experience" className={`${styles.navItem}`}>
            Experience
          </Link>
          <Link to="skills" className={`${styles.navItem}`}>
            Skills
          </Link>
          <Link to="projects" className={`${styles.navItem}`}>
            Projects
          </Link>
        </div>
        <a href="/Fitri_Rozi_Resume_2023.pdf" download>
          <div
            className={`${styles.flexCenter} ${styles.navItem} gap-2 cursor-pointer `}
          >
            <Image
              src="/download.png"
              alt="search"
              className="object-contain mt-1"
              width={24}
              height={24}
            />
            <p className="text-white text-[24px] font-medium">Resume</p>
          </div>
        </a>
      </div>
      <Transition
        show={mobileMenuOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog as="div" onClose={() => setMobileMenuOpen(false)}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden w-1/2"
          >
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.section}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 no-underline cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </motion.nav>
  );
};

export default Navbar;
