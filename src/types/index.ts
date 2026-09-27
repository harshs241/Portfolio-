export type Theme = 'dark' | 'light';

export interface Skill {
  name: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Backend / Cloud';
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework: string[];
  honors?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
