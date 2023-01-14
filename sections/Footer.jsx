'use client';

const Footer = () => (
  <footer className="">
    <div className="w-full mx-auto h-full bg-black rounded-2xl lg:py-10 p-6 pt-8 md:p-10 lg:px-16">
      <p className="text-2xl text-white pb-5 text-center font-semibold">
        Let's work together!
      </p>
      <div className="flex justify-center items-center gap-5 py-2">
        <a
          href="mailto:fitrirozi1@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <img src="/gmail.svg" alt="gmail" className="w-8 h-8" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Falzaro"
          rel="noreferrer"
          className="mx-2"
        >
          <img src="/github.svg" alt="github" className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-lee-7b1b3b1b3/"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <img src="/linkedin.svg" alt="linkedin" className="w-8 h-8" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
