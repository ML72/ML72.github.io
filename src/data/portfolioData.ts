import type { Education, Project, WorkExperience, TechStack } from '../types';

export const personalInfo = {
  name: 'Michael Li',
  description: 'Curious, quick-learning, and passionate applied researcher who enjoys crafting creative solutions to complex real-world problems using cutting-edge technologies.',
  email: 'ml7@andrew.cmu.edu',
  github: 'https://github.com/ML72',
  linkedin: 'https://linkedin.com/in/michaelli11233',
};

export const education: Education[] = [
  {
    degree: 'Master of Science in Intelligent Information Systems',
    institution: 'Carnegie Mellon University',
    period: 'Aug 2025 - Dec 2026',
    gpa: '4.0/4.0',
    description: 'Relevant Coursework: Advanced Natural Language Processing (11-711), Search Engines (11-642)',
    logo: '/icons/school_cmu.png',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Washington',
    period: 'Sep 2022 - Jun 2025',
    gpa: '3.96/4.0',
    description: 'Relevant Coursework: Reinforcement Learning (579), Social Reinforcement Learning (599J), Interactive Learning (541), Deep Learning (493G), Machine Learning (446), Distributed Systems (452), Modern Algorithms (422), Computer Vision (455)',
    logo: '/icons/school_uw.png',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Image Classification Playground',
    description: 'Configure your own prompt to classify AI-generated vs. real photographs with GPT-4o. Sandbox for conducting mini research experiments with different prompting strategies. Iterate quickly with real-time results and visualizations.',
    image: '/img/project_aiclassifier.png',
    link: 'https://ml72.github.io/AI-Image-Classifier-Playground/',
    github: 'https://github.com/ML72/AI-Image-Classifier-Playground',
    technologies: ['TypeScript', 'OpenAI API', 'Experiment Design'],
    year: 2025,
  },
  {
    id: '2',
    title: 'Pose AI',
    description: 'On-device pose analysis with AI-powered suggestions. Upload a photo, detect body landmarks locally with MediaPipe BlazePose, compare against a reference dataset using weighted similarity, and get improvement tips from OpenAI. Built with Ionic + Capacitor for web, iOS, and Android.',
    image: '/img/project_poseai.png',
    link: 'https://ml72.github.io/Pose-AI/',
    github: 'https://github.com/ML72/Pose-AI',
    technologies: ['TypeScript', 'BlazePose', 'OpenAI API', 'Computer Vision', 'Vector Similarity', 'Pose Estimation'],
    year: 2025,
  },
  {
    id: '3',
    title: 'TSP Curriculum',
    description: 'Designed a genetic curriculum for improving TSP model robustness on distributions of practical interest. Proposed TSPLib50 dataset for measuring performance on "realistic" distributions. Presented at NeurIPS MATH-AI 2024.',
    image: '/img/project_tspcurriculum.png',
    link: 'https://neurips.cc/virtual/2024/98518',
    github: 'https://github.com/ML72/Genetic-Curriculum-TSP',
    technologies: ['Python', 'PyTorch', 'Machine Learning', 'Reinforcement Learning', 'Combinatorial Optimization'],
    year: 2024,
  },
  {
    id: '4',
    title: 'Mutorials',
    description: 'A free, adaptive, open-source natural science (physics / bio / chem) trainer for motivated secondary school students. Adaptively recommends questions appropriate for each student\'s level. Database of 4000+ questions, differentiated by 400+ unique tags.',
    image: '/img/project_mutorials.png',
    link: 'https://mutorials.org/',
    github: 'https://github.com/The-Mu-Foundation/Mutorials',
    technologies: ['JavaScript', 'React', 'Adaptive Learning', 'Education Technology'],
    year: 2021,
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    title: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'Jun 2025 - Aug 2025',
    location: 'Seattle, USA',
    logo: '/icons/work_amazon.png',
    description: [
      'Worked with Fulfillment by Amazon (FBA) Reimbursement team',
      'Designed, implemented, and deployed a full-stack internal chatbot to answer reimbursement related questions using retrieval-augmented generation (RAG), servicing FBA organization of 3500+ members',
      'Engineered prompts to optimize retrieval and generation, aligning with Helpful Honest Harmless (HHH) principle',
    ],
  },
  {
    id: '2',
    title: 'Research Assistant',
    company: 'University of Washington - Social Reinforcement Learning Lab',
    period: 'Sep 2024 - Jun 2025',
    location: 'Seattle, USA',
    logo: '/icons/work_uw.png',
    description: [
      'Conducted research in the Social Reinforcement Learning lab, advised by Prof. Natasha Jaques',
      'Led project on improving robustness on the traveling salesman problem, published at NeurIPS MATH-AI',
      'Worked on project seeking to improve robustness of cluttered robotic manipulation via use of an adversarial curriculum, funded by Amazon Science grant',
    ],
  },
  {
    id: '3',
    title: 'Machine Learning Engineer Intern',
    company: 'SReading LLC',
    period: 'Jun 2024 - Sep 2024',
    location: 'Seattle, USA',
    logo: '/icons/work_sreading.png',
    description: [
      'Developed an innovative study plan system, using bandits-based algorithms to optimize educational outcomes',
      'Engineered an adaptive reading recommendation system which personalizes readings based on difficulty, using aggregate user data tracked in up to 8 different ways',
      'Exposed 3 groups of Flask RESTful APIs for seamless communication between services',
    ],
  },
  {
    id: '4',
    title: 'CSE 416 Teaching Assistant',
    company: 'University of Washington',
    period: 'Mar 2024 - Jun 2024',
    location: 'Seattle, USA',
    logo: '/icons/work_uw.png',
    description: [
      'Worked with almost 150 students in the course, teaching core machine learning concepts such as regression, classification, and clustering',
      'Taught weekly quiz section for assigned group of 15-20 students to review and practice concepts',
      'Held weekly office hours to clarify concepts and answer questions',
    ],
  },
];

export const techStack: TechStack[] = [
  {
    category: 'Programming Languages',
    technologies: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'HTML/CSS'],
  },
  {
    category: 'Machine Learning & Data Science',
    technologies: ['PyTorch', 'NumPy', 'Scikit-Learn', 'SciPy', 'Matplotlib', 'Pandas'],
  },
  {
    category: 'Web Development',
    technologies: ['Spring Boot', 'Express.js', 'Flask', 'Next.js', 'React.js', 'Vue.js', 'jQuery', 'Bootstrap', 'Material UI'],
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure Kubernetes Service', 'HashiCorp Consul', 'Redis', 'NGINX', 'Apache Kafka', 'Terraform', 'Helm', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    technologies: ['MongoDB', 'PostgreSQL', 'H2'],
  },
  {
    category: 'Testing & Tools',
    technologies: ['JUnit', 'Jest', 'Gatling', 'Cypress', 'Git'],
  },
];
