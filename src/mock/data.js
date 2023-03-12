import { nanoid } from 'nanoid';
import React from 'react';

// HEAD DATA
export const headData = {
  title: 'Swapnil Patil | Full Stack Developer | Singapore', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Years of Experience in Enterprise Web and Hybrid Mobile Applications. I am a techie and I love making cool products.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Swapnil Patil',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'NijiNote - Private, Encrypted Communication',
    info: <>
      <p>
        I collaborated with my mentor
        <a href="https://www.linkedin.com/in/kpnaidu/" target="_blank"> KP Naidu</a> to create Private Communication app for iOS and Android.
      </p>
      <ul>
        <li>4096 bit end-to-end encryption</li>
        <li>Send text and pictures - Message and image encryption on device</li>
        <li>Nothing stored/saved on our servers - No tracking, no logging - No sharing your information with anyone, ever</li>
        <li>Used React Native for frontend and Node.js, express, AWS, DynamoDB for backend.</li>
      </ul>
      <p className="align-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--hero"
          href='https://apps.apple.com/us/app/nijinote/id1499293764'
          style={{marginRight: 20}}
        >
          App Store
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--hero"
          href='https://play.google.com/store/apps/details?id=com.digital.nijinote'
        >
          Play Store
        </a>
      </p>
    </>,
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Algorithms and Data Structures in Javascript',
    info: 'Implementation of different Algorithms, Data Structures and solve challenging problems involving them.',
    info2: ' ',
    url: '',
    repo: 'https://github.com/swapnil00patil/js-algo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'micro8',
    info: 'Implementing patterns and standard practises for Microservice development in Node Js, Spring Boot, Docker, Postgres and Kubernetes',
    info2: '',
    url: '',
    repo: 'https://github.com/swapnil00patil/micro8', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Say `Hi 👋` to fellow engineer',
  btn: 'What\'s up?',
  email: 'swapnil00patil@gmail.com',
};

// SKILLS DATA
export const skillsData = {
  title: "Things I do",
  current: ["Javascript", "TypeScript", "React.Js", "Redux", "Gatsby", "NodeJS", "Express", "Kubernetes",
    "PostgreSQL", "GraphQL", "Docker", "Spring Boot", "Java", "Hibernate"]
}

// JOURNEY DATA
export const journeyData = {
  title: "Journey so far.."
}

// PROFESSIONAL DATA
export const professionalData = {
  title: "Professional Experience",
  resume: 'https://www.resumemaker.online/es.php'
}

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/swapnil00patil/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/swapnil00patil',
    },
  ],
};
