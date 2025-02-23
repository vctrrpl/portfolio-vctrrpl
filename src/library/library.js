import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';

export const technologies = [
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: FaReact, name: 'React.js' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: FaNodeJs, name: 'NodeJS' },
  { icon: SiExpress, name: 'ExpressJS' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: FaGitAlt, name: 'Git' },
];

export const workExperience = [
  {
    title: 'Frontend Web Developer',
    company: 'Mediaplus Digital Sdn. Bhd',
    location: 'Miri, Sarawak',
    duration: 'April 2021 - Present',
    description: `
      <ul>
        <li>Delivered innovative and professional webpage designs using Adobe Illustrator and Figma, and implemented WordPress designs with Flatsome and Elementor on over 90 web projects.</li>
        <li>Participated in more than 160 projects across various industries in Singapore, ensuring outstanding customer experiences through clear communication with project coordinators and managers.</li>
        <li>Played a key role in building a compelling company portfolio, highlighting the diversity and quality of completed projects, which contributed to achieving high client satisfaction rate.</li>
      </ul>
    `,
  },
  {
    title: 'Site Safety Supervisor',
    company: 'Safetyworks Sdn. Bhd',
    location: 'Bandar Seri Begawan, Brunei Darussalam',
    duration: 'April 2017 - 2020',
    description: `
      <ul>
        <li>Enforced safety protocols and conducted site inspections to ensure regulatory compliance.</li>
        <li>Conducted risk assessments and implemented hazard mitigation strategies.</li>
        <li>Delivered safety training and managed incident investigations.</li>
      </ul>
    `,
  },
];

export const education = [
  {
    title: 'Full-Stack Development Course ',
    institution: 'Sigma School',
    duration: 'January 2024 - Present',
    description: `<ul>
      <li>Software Development Course</li>
    </ul>`,
  },
  {
    title:
      "Executive Bachelor's Degree in Occupational Safety Health & Environment",
    institution: 'Asia e-University',
    duration: 'July 2017 - October 2018',
    description: `<ul>
      <li>Gained foundational knowledge in occupational safety laws and standards.</li>
      <li>Conducted accident investigations and recommended preventive measures.</li>
      <li>Assisted in developing emergency response plans and safety reports.</li>
    </ul>`,
  },
];

export const footerMenus = [
  {
    title: 'Navigate',
    items: [
      { id: 'home', label: 'Home', isInternal: true },
      { id: 'about', label: 'About', isInternal: true },
      { id: 'projects', label: 'Projects', isInternal: true },
      { id: 'contact', label: 'Contact', isInternal: true },
    ],
  },
  {
    title: 'Projects',
    items: [
      {
        href: '#',
        label: 'Project 1',
        isInternal: false,
      },
      {
        href: '#',
        label: 'Project 2',
        isInternal: false,
      },
      {
        href: '#',
        label: 'Project 3',
        isInternal: false,
      },
      {
        href: '#',
        label: 'Project 4',
        isInternal: false,
      },
    ],
  },
  {
    title: 'Socials',
    items: [
      {
        href: 'https://www.linkedin.com/in/vctrrpl/',
        label: 'LinkedIn',
        isInternal: false,
      },
      {
        href: 'https://github.com/vctrrpl',
        label: 'GitHub',
        isInternal: false,
      },
    ],
  },
];
