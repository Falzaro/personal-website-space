'use client';

import Image from 'next/image';

const Footer = () => (
  <footer className="">
    <div className="w-full mx-auto h-full bg-black rounded-2xl lg:py-10 p-6 pt-8 md:p-10 lg:px-16">
      <p className="text-2xl text-white pb-5 text-center font-semibold">
        Let's work together!
      </p>
      <div className="flex justify-center items-center gap-8 py-2">
        <a
          href="mailto:fitrirozi1@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <Image src="/gmail.svg" alt="gmail" width={32} height={32} />
        </a>
        <a
          target="_blank"
          href="https://github.com/Falzaro"
          rel="noreferrer"
          className="mx-2"
        >
          <Image src="/github.svg" alt="github" width={32} height={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/fitri-rozi-7b4180179/"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
