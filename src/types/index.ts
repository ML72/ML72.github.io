export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  location?: string;
}

export interface TechStack {
  category: string;
  technologies: string[];
}
