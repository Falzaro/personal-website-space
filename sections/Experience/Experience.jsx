'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { experiences } from '../../constants';

import 'react-vertical-timeline-component/style.min.css';
import styles from '../../styles';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#282634', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    dateClassName="text-white-100 text-[18px] pl-1 tracking-wider"
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className={`${experience.size} object-contain`}
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[32px] font-bold">{experience.title}</h3>
      <p
        style={{
          color: '#9d9aae',
          margin: 0,
          fontSize: '20px',
          fontWeight: '600',
        }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[18px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <div className="mt-48">
      <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
    </div>
    <div className="mt-24 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default Experience;
