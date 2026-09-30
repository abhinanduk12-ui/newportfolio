export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  features: string[];
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  resume?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  focus: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
