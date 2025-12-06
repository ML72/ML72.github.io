export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa?: string;
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies?: string[];
  year: number;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  location?: string;
  logo?: string;
}

export interface TechStack {
  category: string;
  technologies: string[];
}
