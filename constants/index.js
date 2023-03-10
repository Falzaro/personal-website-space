export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];

// export const startingFeatures = [
//   'Find a world that suits you and you want to enter',
//   'Enter the world by reading basmalah to be safe',
//   'No need to beat around the bush, just stay on the gas and have fun',
// ];

// Git, GitHub, Bitbucket, Jira, NPM, Webpack, Jenkins, Jest, TDD, CI/CD, Linux

export const startingFeatures = [
  {
    title: 'Frontend',
    image: '/single-planet-netapp.svg',
    techs: [
      'React',
      'HTML',
      'CSS',
      'TypeScript',
      'Redux',
      'Tailwind',
      'Material-UI',
      'Three.js',
      'React Native',
    ],
  },
  {
    title: 'Backend',
    image: '/single-planet-sensor-dynamix.svg',
    techs: [
      'Node.js',
      'Express',
      'MongoDB',
      'GraphQL',
      'PostgreSQL',
      'Python',
      'Django',
      'Docker',
    ],
  },
  {
    title: 'Tools/Testing',
    image: '/single-planet-tabor-college.svg',
    techs: [
      'Git',
      'GitHub',
      'Bitbucket',
      'Jira',
      'NPM',
      'Webpack',
      'Jenkins',
      'Jest',
      'Linux',
    ],
  },
  {
    title: 'Cloud',
    image: '/single-planet-cloud.svg',
    techs: ['Google Cloud Platform', 'Azure', 'AWS', 'Stripe'],
  },
  {
    title: 'Design',
    image: '/single-planet-design.svg',
    techs: ['Figma, Adobe XD'],
  },
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

export const services = [
  {
    title: 'Fullstack Developer',
    icon: '/web.png',
  },
  {
    title: 'Mobile Developer',
    icon: '/mobile.png',
  },
  {
    title: 'UI/UX Designer',
    icon: '/backend.png',
  },
  // {
  //   title: 'Content Creator',
  //   icon: '/creator.png',
  // },
];

export const experiences = [
  {
    title: 'Fullstack Developer',
    company_name: 'NetApp',
    icon: '/netapp_logo.svg',
    iconBg: '#383E56',
    size: 'h-1/2',
    date: 'September 2020 - December 2022',
    points: [
      'Mentored 12+ junior developers and spearheaded the front-end development of an enterprise reservation app from concept to beta release using React, Redux, Material-UI, Azure, OAuth, and Docker.',
      'Implemented a reservation dashboard and tool management page with advanced filters & dynamic forms to manage 15k+ rows of reservations and 40+ tools, increasing efficiency by 20% and reducing errors by 15%.',
      'Managed PostgreSQL databases and Python Django Restful APIs, handling 10K+ daily requests & 100GB+ data.',
      'Refactored APIs into smaller, targeted requests to reduce data bloat, resulting in 50% faster load time and 75% fewer database queries.',
    ],
  },
  {
    title: 'Tech Lead',
    company_name: 'Tabor college',
    icon: '/tabor_college_logo.svg',
    iconBg: '#E6DEDD',
    size: 'h-1/2',
    date: 'August 2021 - May 2022',
    points: [
      'Led a team to develop a mobile app using React Native, NodeJS, and Google Cloud Platform, delivering real-time updates on campus activities for 700+ students.',
      'Developed a cloud scheduler for parallel processing to reduce data loading time from 4000 ms to 20 ms.',
      'Designed an interactive map that displays 44+ locations of classrooms & buildings using the Google Maps API.',
      'Successfully drove the entire team to ship the app to the App Store and Google Play',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Sensor Dynamix',
    icon: '/sensor_dynamix_logo.svg',
    iconBg: '#E6DEDD',
    size: 'h-3/4',
    date: 'May 2020 - August 2020',
    points: [
      'Developed a cross-platform app using React Native, React, and NodeJS for clients to interact with IoT sensors.',
      'Built an admin page and dashboard to efficiently manage 50,000+ customers and 100,000+ devices with integrated SSO login.',
      'Established robust email brokerage using Google Cloud Platform for high volume of up to 100,000 emails/day.',
      'Designed mobile and website mockups with over 200 artboards using Adobe XD.',
    ],
  },
];

export const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: './carrent.png',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: './jobit.png',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: './tripguide.png',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: './tripguide.png',
    source_code_link: 'https://github.com/',
  },
];
