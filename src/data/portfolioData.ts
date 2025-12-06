import type { Education, Project, WorkExperience, TechStack } from '../types';

export const personalInfo = {
  name: 'Your Name',
  title: 'Computer Science Student & AI Researcher',
  description: 'Passionate about leveraging artificial intelligence to solve real-world problems and advancing the frontiers of machine learning research.',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
};

export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Your University',
    period: '2023 - 2025',
    gpa: '4.0',
    description: 'Focus on Artificial Intelligence and Machine Learning',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Your University',
    period: '2019 - 2023',
    gpa: '3.9',
    description: 'Graduated with Honors',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Research Project',
    description: 'Developed a novel deep learning architecture for natural language processing tasks, achieving state-of-the-art results on benchmark datasets.',
    image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=AI+Project',
    link: 'https://github.com/yourusername/project1',
    technologies: ['Python', 'PyTorch', 'Transformers', 'BERT'],
  },
  {
    id: '2',
    title: 'Machine Learning Platform',
    description: 'Built a scalable ML platform for training and deploying models, featuring automated hyperparameter tuning and model versioning.',
    image: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=ML+Platform',
    link: 'https://github.com/yourusername/project2',
    technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes'],
  },
  {
    id: '3',
    title: 'Computer Vision Application',
    description: 'Created a real-time object detection system using convolutional neural networks for autonomous vehicle applications.',
    image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=CV+App',
    link: 'https://github.com/yourusername/project3',
    technologies: ['Python', 'OpenCV', 'YOLO', 'TensorFlow'],
  },
  {
    id: '4',
    title: 'Data Analysis Tool',
    description: 'Designed an interactive data visualization and analysis tool for exploring large-scale datasets with advanced statistical methods.',
    image: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Data+Tool',
    link: 'https://github.com/yourusername/project4',
    technologies: ['React', 'D3.js', 'Python', 'Pandas'],
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    title: 'AI Research Intern',
    company: 'Tech Company / Research Lab',
    period: 'Summer 2024',
    location: 'City, State',
    description: [
      'Conducted research on large language models and their applications in code generation',
      'Published findings in a peer-reviewed conference paper',
      'Collaborated with a team of 5 researchers on cutting-edge AI projects',
    ],
  },
  {
    id: '2',
    title: 'Software Engineering Intern',
    company: 'Software Company',
    period: 'Summer 2023',
    location: 'City, State',
    description: [
      'Developed and deployed machine learning models for production systems',
      'Improved model inference speed by 40% through optimization techniques',
      'Worked with cross-functional teams to integrate AI solutions into existing products',
    ],
  },
  {
    id: '3',
    title: 'Research Assistant',
    company: 'University AI Lab',
    period: '2022 - Present',
    location: 'City, State',
    description: [
      'Assist professor with research on reinforcement learning and neural architecture search',
      'Mentor undergraduate students on research projects',
      'Present findings at weekly lab meetings and contribute to grant proposals',
    ],
  },
];

export const techStack: TechStack[] = [
  {
    category: 'Programming Languages',
    technologies: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'AI/ML Frameworks',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'Hugging Face'],
  },
  {
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'Express', 'Next.js', 'Material-UI'],
  },
  {
    category: 'Data & Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Pandas', 'NumPy'],
  },
  {
    category: 'DevOps & Tools',
    technologies: ['Docker', 'Kubernetes', 'Git', 'AWS', 'Azure', 'CI/CD'],
  },
  {
    category: 'Research Areas',
    technologies: ['Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning'],
  },
];
