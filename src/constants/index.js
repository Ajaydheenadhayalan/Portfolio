
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import salesqueen from "../assets/company/salesqueen.png";
import cognifyz from "../assets/company/cognifyz.png";
import paavai from "../assets/company/paavai.png";

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "java",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Bootstrap",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "SalesQueen Solutions",
    icon: salesqueen,
    iconBg: "#ffffff",
    date: "May 2024 - Aug 2024",
    points: [
      "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Enhanced cross-device compatibility and layout consistency using Bootstrap.",
      "Worked on multiple website UIs, ensuring organized folder structures and clean front-end code management.",
    ],
  },
  {
    title: "Web developer Intern",
    company_name: "Cognifyz Technolgies",
    icon: cognifyz,
    iconBg: "#ffffff",
    date: "Dec 2023 - Jan 2024",  
    points: [
      "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Enhanced cross-device compatibility and layout consistency using Bootstrap.",
      "Worked on multiple website UIs, ensuring organized folder structures and clean front-end code management.",
    ],
  },
  {
    title: "Resource Person (Trainer)",
    company_name: "Paavai Institution",
    icon: paavai,
    iconBg: "#ffffff",
    date: "Dec 2023 - Jan 2024",  
    points: [
      "I had the incredible opportunity to train over 500 first-year students in Arduino basics, introducing them to hands-on electronics and embedded systems in an engaging, beginner-friendly way.",
      "Encouraged students to build mini-projects like automatic lights and motion detectors, boosting their interest in innovation and practical learning.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Smart Assistant",
    description:
      "An AI-powered tool designed to summarize lengthy research papers and articles in real time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "white-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "pipeline",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/Ajaydheenadhayalan/smart-assistant",
  },
  {
    name: "Christmas Gift Website",
    description:
      "A visually engaging landing page that highlights Christmas deals, festive gifts, and promotions with smooth user interaction.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Ajaydheenadhayalan/Christmas-Gift-Website",
  },
  {
    name: "Sticker App",
    description:
      "A creative sticker editor where users can drag, customize, and export sticker layouts on a canvas interface for personal or social use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-konva",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Ajaydheenadhayalan/myera-sticker-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
