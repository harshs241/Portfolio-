import { SkillCategory, Project, Experience, Education, SocialLink } from '../types';

export const personalInfo = {
  name: 'Harsh Singh',
  titles: [
    'Full Stack Developer',
    'Software Engineer',
    'Frontend Specialist',
    'Cloud & DevOps Enthusiast',
  ],
  status: 'Available for full-time opportunities & high-impact projects',
  tagline: 'I build fast, scalable, and user-friendly web applications',
  bio: [
    "I am a passionate Full Stack Software Developer with a strong foundation in computer science and a relentless drive to build elegant, high-impact digital experiences. My journey began with an insatiable curiosity about how software systems operate at scale, which evolved into architecting production-ready web platforms used by thousands of users.",
    "My core engineering philosophy centers around performance, accessibility, and clean maintainable code. Whether designing micro-interactions on the frontend with React and TypeScript or engineering fault-tolerant microservices and database schemas with Node.js and Python, I enjoy solving complex distributed challenges.",
    "Currently, I am focused on modern cloud-native architectures, performance optimization (Core Web Vitals), and integrating intelligent AI workflows into user-first web apps. When I'm not in my code editor, you'll find me hiking scenic trails, studying system design post-mortems, playing rapid chess, or experimenting with new open-source libraries."
  ],
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Shipped', value: '25+' },
    { label: 'Uptime Reliability', value: '99.9%' },
    { label: 'Code Commits', value: '1.4k+' },
  ],
  email: 'harsh.singh.engineer@gmail.com',
  location: 'San Francisco, CA / Open to Remote',
  resumeUrl: '#resume',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'Github',
    label: 'Explore GitHub Profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:harsh.singh.engineer@gmail.com',
    icon: 'Mail',
    label: 'Send an Email',
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com',
    icon: 'Twitter',
    label: 'Follow on Twitter',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming languages I write and architect with daily.',
    icon: 'Code2',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Expert', featured: true },
      { name: 'TypeScript', level: 'Expert', featured: true },
      { name: 'Python', level: 'Advanced', featured: true },
      { name: 'Java', level: 'Proficient' },
      { name: 'C++', level: 'Proficient' },
      { name: 'SQL', level: 'Advanced', featured: true },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and high-performance user interfaces.',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 'Expert', featured: true },
      { name: 'Next.js', level: 'Expert', featured: true },
      { name: 'Tailwind CSS', level: 'Expert', featured: true },
      { name: 'HTML5 & Semantic CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced', featured: true },
      { name: 'Redux Toolkit / Zustand', level: 'Advanced' },
      { name: 'Responsive Web Design', level: 'Expert' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Engineering scalable services, robust microservices, and secure APIs.',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'Expert', featured: true },
      { name: 'Express.js', level: 'Expert', featured: true },
      { name: 'Django', level: 'Advanced', featured: true },
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Expert', featured: true },
      { name: 'GraphQL', level: 'Advanced', featured: true },
      { name: 'WebSockets / Socket.io', level: 'Advanced' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational, NoSQL, and memory store modeling and query optimization.',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Expert', featured: true },
      { name: 'MongoDB', level: 'Expert', featured: true },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Firebase / Firestore', level: 'Advanced', featured: true },
      { name: 'Redis', level: 'Advanced' },
    ],
  },
  {
    id: 'tools-devops',
    title: 'DevOps & Tools',
    description: 'Continuous delivery, infrastructure, virtualization, and developer tooling.',
    icon: 'Cpu',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', featured: true },
      { name: 'Docker', level: 'Advanced', featured: true },
      { name: 'AWS (S3, EC2, Lambda)', level: 'Advanced', featured: true },
      { name: 'CI/CD (GitHub Actions)', level: 'Advanced', featured: true },
      { name: 'Linux / Bash Scripting', level: 'Advanced' },
      { name: 'Vite & Webpack', level: 'Expert' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'cloudscale-ai',
    title: 'CloudScale AI — Enterprise Document Intelligence',
    description:
      'AI-powered document processing and semantic search pipeline featuring automated vector embedding, multi-tenant RAG, and sub-second querying across thousands of PDF and markdown documents.',
    category: 'Full Stack',
    tags: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    liveUrl: 'https://example.com/demo/cloudscale-ai',
    githubUrl: 'https://github.com/example/cloudscale-ai',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    metrics: '⚡ 10k+ pages/hr ingestion • <300ms vector latency',
  },
  {
    id: 'devpulse-metrics',
    title: 'DevPulse — Real-Time APM & Distributed Telemetry',
    description:
      'High-throughput system monitoring dashboard providing live trace tracking, cluster health telemetry, automated incident alerts, and customizable WebSocket streaming graph widgets.',
    category: 'Backend / Cloud',
    tags: ['React', 'Node.js', 'Express', 'TimescaleDB', 'Redis', 'Docker', 'Tailwind CSS'],
    liveUrl: 'https://example.com/demo/devpulse',
    githubUrl: 'https://github.com/example/devpulse-telemetry',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    metrics: '📈 65% faster mean time to detect incidents',
  },
  {
    id: 'nexus-commerce',
    title: 'Nexus Commerce — Headless Storefront Suite',
    description:
      'Ultra-fast, conversion-optimized headless e-commerce store with Stripe payment integration, real-time stock inventory, dynamic filtering, and 100/100 Core Web Vitals score.',
    category: 'Full Stack',
    tags: ['Next.js 14', 'React', 'GraphQL', 'Tailwind CSS', 'MongoDB', 'Stripe API'],
    liveUrl: 'https://example.com/demo/nexus-commerce',
    githubUrl: 'https://github.com/example/nexus-commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    metrics: '🚀 99 Performance Lighthouse score • 1.1s TTI',
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro — Collaborative Agile Workspace',
    description:
      'Modern Kanban project management app with bi-directional drag-and-drop boards, live multi-cursor room presence, markdown notes, and automated sprint metrics.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Socket.io'],
    liveUrl: 'https://example.com/demo/taskflow-pro',
    githubUrl: 'https://github.com/example/taskflow-pro',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    metrics: '👥 50+ concurrent users per room with 0 sync conflicts',
  },
  {
    id: 'securevault',
    title: 'SecureVault — Zero-Knowledge Cloud Storage',
    description:
      'End-to-end encrypted file sharing and digital asset vault featuring client-side AES-256-GCM chunked encryption, pre-signed S3 streaming, and granular access policy tokens.',
    category: 'Backend / Cloud',
    tags: ['Python', 'Django', 'AWS S3', 'Cryptography', 'React', 'Tailwind CSS'],
    liveUrl: 'https://example.com/demo/securevault',
    githubUrl: 'https://github.com/example/securevault',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    metrics: '🔒 Zero-knowledge guarantee with audited cryptographic suite',
  },
  {
    id: 'algovisualizer-3d',
    title: 'AlgoVisualizer — Interactive Algorithm Playground',
    description:
      'Educational visualization tool demonstrating graph traversal (Dijkstra, A*), sorting heuristics, and tree re-balancing with step-by-step playback and speed controls.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Canvas API', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com/demo/algovisualizer',
    githubUrl: 'https://github.com/example/algovisualizer',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    metrics: '🎓 15k+ monthly active learners worldwide',
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Software Engineer',
    company: 'Apex Cloud Technologies',
    companyUrl: 'https://example.com',
    location: 'San Francisco, CA',
    period: '2023 — Present',
    isCurrent: true,
    achievements: [
      'Architected and scaled core microservices handling 500k+ daily API transactions with 99.99% service availability.',
      'Spearheaded frontend migration to Next.js 14 server components, boosting Largest Contentful Paint (LCP) by 42% and organic search impressions by 35%.',
      'Engineered an automated CI/CD pipeline using GitHub Actions and Docker, cutting deployment cycle times from 4 hours down to under 12 minutes.',
      'Mentored 4 junior engineers on React state management patterns, unit test automation, and code review standards.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Software Developer',
    company: 'InnoLab Solutions',
    companyUrl: 'https://example.com',
    location: 'Austin, TX (Remote)',
    period: '2021 — 2023',
    achievements: [
      'Designed and deployed 15+ RESTful and GraphQL endpoints consumed by web and mobile client applications.',
      'Implemented distributed Redis caching, eliminating redundant database calls and decreasing average endpoint response time from 380ms to 95ms.',
      'Built a real-time analytics dashboard with WebSockets and Tailwind CSS, providing stakeholders instant visual insights on system KPIs.',
      'Increased automated test coverage from 52% to 88% using Jest, React Testing Library, and Playwright.',
    ],
    techStack: ['React', 'Node.js', 'Express', 'GraphQL', 'MongoDB', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    role: 'Software Engineering Intern',
    company: 'TechVentures Studio',
    companyUrl: 'https://example.com',
    location: 'San Jose, CA',
    period: '2020 — 2021',
    achievements: [
      'Built and documented 20+ responsive and accessible UI components for the enterprise design system.',
      'Optimized SQL queries and configured database indexes for MySQL tables, speeding up analytical report queries by 28%.',
      'Collaborated in an Agile Scrum environment with bi-weekly sprints, pull request reviews, and continuous team retrospectives.',
    ],
    techStack: ['JavaScript (ES6+)', 'React', 'HTML5/CSS3', 'MySQL', 'Git'],
  },
];

export const educations: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State University of Technology',
    location: 'California, USA',
    period: '2017 — 2021',
    gpa: '3.85 / 4.0 (Magna Cum Laude)',
    coursework: [
      'Data Structures & Algorithms',
      'Distributed Systems Architecture',
      'Database Management Systems',
      'Operating Systems & Systems Programming',
      'Web Technologies & Cloud Computing',
      'Object-Oriented Software Design',
      'Computer Networks & Security',
    ],
    honors: [
      "Dean's Honor List (All Semesters)",
      '1st Place — Annual University Hackathon (2020)',
      'ACM Student Chapter Tech Lead',
    ],
  },
];

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    year: '2022',
  },
  {
    title: 'Docker Certified Associate (DCA)',
    issuer: 'Docker Inc.',
    year: '2022',
  },
];
