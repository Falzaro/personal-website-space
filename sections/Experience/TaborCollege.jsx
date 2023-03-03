'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleText } from '../../components';
import { staggerContainer, fadeIn } from '../../utils/motion';

import styles from '../../styles';

import spaceshipImage from '../../public/spaceship.png';
import taborCollegeImage from '../../public/tabor_college.png';
import mapsImage from '../../public/maps.png';
import taborCollegePlanetImage from '../../public/single-planet-tabor-college.svg';
import athleticsImage from '../../public/athletics_1.png';
import diningHallImage from '../../public/dining_hall.png';
import helpfulHoursImage from '../../public/helpful_hours.png';
import athleticsImageTwo from '../../public/athletics_2.png';
import jayshopImage from '../../public/jayshop.png';
import studentLifeImage from '../../public/student_life.png';

const images = [
  {
    source: taborCollegeImage,
    description: 'Tabor College',
  },
  {
    source: mapsImage,
    description: 'Maps',
  },
  {
    source: athleticsImage,
    description: 'Athletics',
  },
  {
    source: diningHallImage,
    description: 'Dining Hall',
  },
  {
    source: helpfulHoursImage,
    description: 'Helpful Hours',
  },
  {
    source: athleticsImageTwo,
    description: 'Athletics',
  },
  {
    source: jayshopImage,
    description: 'Jayshop',
  },
  {
    source: studentLifeImage,
    description: 'student life',
  },
];

const settings = (currentSlide) => ({
  dots: true,
  infinite: true,
  speed: 400,
  autoplay: true,
  lazyLoad: 'ondemand',
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  appendDots: (dots) => (
    <div>
      <ul className="flex justify-center bg-white">{dots}</ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      className="bg-white rounded-full w-3 h-3 mt-10"
      style={{
        opacity: i === currentSlide ? 1 : 0.25,
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const Dots = (dots) => <ul className="text-white">{dots}</ul>;

const TaborCollege = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1440px] mx-auto flex flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          {/* Company name */}
          <div className="flex items-center mx-auto lg:mb-10">
            <Image
              src={taborCollegePlanetImage}
              alt="Planet"
              className="w-1/4 h-1/4 object-contain -mb-2"
            />
            <div className="flex flex-col w-full">
              <TitleText
                title={<>Tabor College</>}
                textStyles="lg:text-center"
              />
              <p className="text-[#8B949E] lg:text-lg">
                August 2021 - May 2022
              </p>
            </div>
          </div>
          {/* Job Description */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="mt-[31px] w-full flex items-center justify-center gap-8 lg:gap-12 xl:gap-20 mx-auto"
          >
            {/* Card */}
            <div
              className={`${styles.card} max-w-[500px] md:max-w-[600px] lg:max-w-[550px]`}
            >
              {/* Job title */}
              <p className="text-white text-2xl md:text-3xl 2xl:text-4xl font-medium pb-6 px-4">
                Team Lead & Tech Lead
              </p>
              {/* Job summary */}
              <ul className="list-disc text-white px-4 space-y-6 lg:space-y-8 lg:leading-8 2xl:leading-9 md:text-xl 2xl:text-xl">
                <li>
                  Led a team of five to develop a mobile app using React-Native
                  for 500+ students and faculty.
                </li>
                <li>
                  Architected a navigation system that allows users to move
                  between 20+ screens.
                </li>
                <li>
                  Designed a map that displays the locations of classrooms and
                  buildings using the Google Maps API.
                </li>
              </ul>
            </div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className="w-[50%] max-w-[500px] max-h-[500px] hidden lg:block h-screen flex-1"
            >
              <Image
                src={spaceshipImage}
                alt="spaceship"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
          {/* <div className="hidden md:block p-12 mb-15 md:mt-5 lg:mt-10">
            <Slider
              afterChange={(current) => setCurrentSlide(current)}
              className="mx-auto max-w-[1040px] cursor-grab gradient-05 rounded-2xl pt-8"
              {...settings(currentSlide)}
              appendDots={Dots}
            >
              {images.map((item) => (
                <div
                  key={item.description}
                  className="w-full h-[450px] xl:h-[500px]"
                >
                  <Image
                    priority
                    className="w-full h-full object-contain rounded-lg"
                    src={item.source}
                    alt={item.description}
                    width={350}
                    height={500}
                  />
                </div>
              ))}
            </Slider>
          </div> */}
        </motion.div>
        {/* <div className="gradient-03 z-0" /> */}
      </motion.div>
    </section>
  );
};

export default TaborCollege;
