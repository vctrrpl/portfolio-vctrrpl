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
            <li>Developed 30+ responsive websites using Elementor, achieving 42% higher conversion rates.</li>
            <li>Optimized Flatsome theme for 10+ e-commerce sites, reducing load times by 35%.</li>
            <li>Created custom WordPress solutions that cut development time by 25%.</li>
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
