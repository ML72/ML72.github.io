import type { Education, Project, WorkExperience, TechStack } from '../types';

export const personalInfo = {
  name: 'Michael Li',
  title: 'AI Researcher & Software Developer',
  description: 'Curious, quick-learning, and passionate researcher who enjoys crafting creative solutions to complex real-world problems using cutting-edge technologies.',
  email: 'ml7@andrew.cmu.edu',
  github: 'https://github.com/ML72',
  linkedin: 'https://linkedin.com/in/michaelli11233',
};

export const education: Education[] = [
  {
    degree: 'Master of Science in Intelligent Information Systems',
    institution: 'Carnegie Mellon University',
    period: 'Aug 2025 - Present',
    description: 'Graduate studies in AI and intelligent systems',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Washington',
    period: 'Sep 2022 - Jun 2025',
    gpa: '3.96/4.0',
    description: 'Relevant Coursework: Reinforcement Learning (579), Social Reinforcement Learning (599J), Interactive Learning (541), Deep Learning (493G), Machine Learning (446), Distributed Systems (452), Modern Algorithms (422), Computer Vision (455)',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'TSP Curriculum',
    description: 'Designed a genetic curriculum for improving TSP model robustness on distributions of practical interest. Proposed TSPLib50 dataset for measuring performance on "realistic" distributions. Presented at NeurIPS MATH-AI 2024.',
    image: 'https://raw.githubusercontent.com/ML72/ML72.github.io/main/assets/img/project-tsp-curriculum.png',
    link: 'https://github.com/ML72/Genetic-Curriculum-TSP',
    technologies: ['Python', 'PyTorch', 'Machine Learning', 'Reinforcement Learning'],
  },
  {
    id: '2',
    title: 'ImPose',
    description: 'Get feedback on your routines, from basketball combos to dance moves, by comparing to an expert demo. Compare pose frames using body segmentation model and weighted cosine similarity. Time-invariant video sequence mapping via dynamic time warping.',
    image: 'https://raw.githubusercontent.com/ML72/ML72.github.io/main/assets/img/project-impose.png',
    link: 'https://github.com/ML72/Im-Pose',
    technologies: ['Python', 'Computer Vision', 'Dynamic Time Warping', 'Pose Estimation'],
  },
  {
    id: '3',
    title: 'Mutorials',
    description: 'A free, adaptive, open-source natural science (physics / bio / chem) trainer for motivated secondary school students. Adaptively recommends questions appropriate for each student\'s level. Database of 4000+ questions, differentiated by 400+ unique tags.',
    image: 'https://raw.githubusercontent.com/ML72/ML72.github.io/main/assets/img/project-mutorials.png',
    link: 'https://github.com/The-Mu-Foundation/Mutorials',
    technologies: ['JavaScript', 'React', 'Adaptive Learning', 'Education Technology'],
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    title: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'Jun 2025 - Aug 2025',
    location: 'Seattle, USA',
    description: [
      'Worked with Fulfillment by Amazon (FBA) Reimbursement team',
      'Designed, implemented, and deployed a full-stack internal chatbot to answer reimbursement related questions with an internal knowledge base, using retrieval-augmented generation (RAG)',
      'Engineered prompts to optimize retrieval and generation, aligning with Helpful Honest Harmless (HHH) principle',
    ],
  },
  {
    id: '2',
    title: 'Undergraduate Research Assistant',
    company: 'University of Washington - Social Reinforcement Learning Lab',
    period: 'Sep 2024 - Jun 2025',
    location: 'Seattle, USA',
    description: [
      'Conducted research in the Social Reinforcement Learning lab, advised by Prof. Natasha Jaques',
      'Led project on improving neural combinatorial solver robustness to different distributions on the traveling salesman problem, published at NeurIPS MATH-AI',
      'Worked on adversarial robotic manipulation project, funded by Amazon grant',
    ],
  },
  {
    id: '3',
    title: 'Machine Learning Engineer Intern',
    company: 'SReading LLC',
    period: 'Jun 2024 - Sep 2024',
    location: 'Seattle, USA',
    description: [
      'Developed an innovative study plan system, using bandits-based algorithms to optimize educational outcomes',
      'Engineered an adaptive reading recommendation system which personalizes readings based on difficulty and topics, using aggregate user data tracked in up to 8 different ways',
      'Exposed 3 groups of Flask RESTful APIs for seamless communication between microservices',
    ],
  },
  {
    id: '4',
    title: 'Undergraduate Teaching Assistant',
    company: 'University of Washington',
    period: 'Mar 2024 - Jun 2024',
    location: 'Seattle, USA',
    description: [
      'Worked with around 150 students in the course, teaching core machine learning concepts such as regression, classification, and clustering',
      'Taught weekly quiz section for assigned group of 20 students to review and practice',
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
