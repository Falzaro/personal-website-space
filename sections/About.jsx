'use client';

import styles from '../styles';

const About = () => (
  <section>
    <h1 className={`${styles.heroSubHeading} text-center mb-[35px]`}>
      About me
    </h1>
    <p className="w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%] text-[#c7c7c7] text-lg md:text-xl lg:text-2xl text-center mx-auto md:leading-[2rem] lg:leading-[2.5rem]">
      I am a Computer Science major with{' '}
      <span className="text-white font-medium">
        three years of professional
      </span>{' '}
      experience in software development. I have contributed to the development
      of several <span className="text-white font-medium">large-scale</span> web
      applications, including a proprietary reservation system for a{' '}
      <span className="text-white font-medium">Fortune 500 company</span> and a
      mobile app for a college with over 700 students and faculty. I am{' '}
      <span className="text-white font-medium">passionate</span> about using
      technology to create meaningful change and love to work with a team of
      like-minded individuals who share similar passion.
    </p>
  </section>
);

export default About;
