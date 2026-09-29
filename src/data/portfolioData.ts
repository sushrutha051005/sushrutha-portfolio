import {
  PersonalDetails,
  EducationItem,
  SkillCategory,
  ProjectItem,
  CertificationItem,
  AchievementItem,
  GithubStatData,
} from '../types';

export const personalData: PersonalDetails = {
  name: 'Alamuru Sai Sushrutha',
  title: 'Artificial Intelligence & Data Science Student',
  typingRoles: [
    'AI & DS Student',
    'Java Developer',
    'Python Developer',
    'Full Stack Learner',
    'Problem Solver',
    'Future Software Engineer',
  ],
  tagline:
    'Passionate about building intelligent software solutions that solve real-world problems through AI, software development, and continuous learning.',
  aboutText:
    'Artificial Intelligence and Data Science student seeking internship opportunities to apply programming fundamentals, research experience, and ongoing project work while gaining industry-level software development experience.',
  highlights: [
    'AI Enthusiast',
    'Problem Solver',
    'Continuous Learner',
    'Software Development',
    'Research Interest',
  ],
  githubUrl: 'https://github.com/sushrutha051005',
  linkedinUrl: 'https://www.linkedin.com/in/sai-sushrutha-a-9a0348372',
  email: 'sushrutha051005@gmail.com',
  location: 'Hyderabad, Telangana, India',
};

export const educationData: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech',
    institution: "St. Martin's Engineering College",
    field: 'Artificial Intelligence & Data Science',
    period: 'Expected Graduation: May 2027',
    scoreLabel: 'CGPA',
    scoreValue: '7.82',
    status: 'In Progress',
    description:
      'Pursuing core coursework in Machine Learning, Deep Learning, Data Structures, Database Systems, and Applied Statistics.',
  },
  {
    id: 'intermediate',
    degree: 'Intermediate',
    institution: 'Narayana Junior College',
    field: 'MPC (Maths, Physics, Chemistry)',
    period: 'Completed 2023',
    scoreLabel: 'SGPA',
    scoreValue: '8.69',
    status: 'Completed',
    description:
      'Rigorous background in Higher Mathematics, Physical Sciences, and Analytical Reasoning.',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Unique High School',
    field: 'General Sciences & Mathematics',
    period: 'Completed 2021',
    scoreLabel: 'GPA',
    scoreValue: '10.0',
    status: 'Completed',
    description:
      'Achieved maximum GPA with distinction in Academic Excellence, Mathematics, and Computer Science fundamentals.',
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: 'Programming',
    iconName: 'Code',
    skills: [
      { name: 'Java', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'C', level: 'Intermediate' },
    ],
  },
  {
    category: 'Web',
    iconName: 'Globe',
    skills: [
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Intermediate' },
    ],
  },
  {
    category: 'Database',
    iconName: 'Database',
    skills: [{ name: 'SQL', level: 'Intermediate' }],
  },
  {
    category: 'Core Subjects',
    iconName: 'BookOpen',
    skills: [
      { name: 'Data Structures', level: 'Core' },
      { name: 'Operating Systems', level: 'Core' },
      { name: 'Computer Networks', level: 'Core' },
    ],
  },
  {
    category: 'Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', level: 'Tool' },
      { name: 'GitHub', level: 'Tool' },
      { name: 'VS Code', level: 'Tool' },
      { name: 'MS Word', level: 'Tool' },
      { name: 'MS Excel', level: 'Tool' },
      { name: 'PowerPoint', level: 'Tool' },
    ],
  },
  {
    category: 'Soft Skills',
    iconName: 'Users',
    skills: [
      { name: 'Leadership' },
      { name: 'Communication' },
      { name: 'Teamwork' },
      { name: 'Problem Solving' },
      { name: 'Adaptability' },
      { name: 'Time Management' },
    ],
  },
  {
    category: 'Languages',
    iconName: 'Languages',
    skills: [
      { name: 'English', level: 'Fluent' },
      { name: 'Telugu', level: 'Native' },
      { name: 'Hindi', level: 'Working Proficiency' },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'digital-watermarking',
    title: 'Digital Watermarking System',
    category: 'Research',
    description:
      'Developed a Digital Watermarking system to securely embed hidden information into digital images for ownership verification, authenticity, and copyright protection.',
    longDescription:
      'This research-focused project implements discrete cosine transform (DCT) and spatial domain algorithms to embed invisible cryptographic watermarks within image frames. It guarantees high peak signal-to-noise ratio (PSNR) while remaining resilient against noise, compression, and spatial manipulation attacks.',
    technologies: ['Python', 'OpenCV', 'Image Processing', 'NumPy', 'Matplotlib'],
    features: [
      'Frequency domain DCT coefficient manipulation',
      'High-imperceptibility watermark embedding & extraction',
      'Robust resistance against Gaussian noise and crop attacks',
      'Automated PSNR and SSIM quality assessment dashboard',
    ],
    githubUrl: 'https://github.com/sushrutha051005',
    isComingSoon: true,
  },
  {
    id: 'sign-language-recognition',
    title: 'Sign Language Recognition System',
    category: 'Artificial Intelligence',
    description:
      'Developed a real-time Sign Language Recognition System using Computer Vision that converts hand gestures into text and speech to improve communication accessibility.',
    longDescription:
      'Built leveraging OpenCV and Mediapipe hand landmark tracking, this intelligent computer vision application maps complex hand joint geometry to American Sign Language (ASL) alphabets and common phrases, converting gestures into instant text and text-to-speech synthesis.',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'MediaPipe'],
    features: [
      'Real-time webcam hand tracking & joint extraction',
      'Low-latency classification pipeline using SVM / Random Forest',
      'Text-to-speech feedback loop for non-verbal accessibility',
      'Custom dataset annotation tool built with OpenCV',
    ],
    githubUrl: 'https://github.com/sushrutha051005',
    isComingSoon: true,
  },
  {
    id: 'automated-answer-evaluation',
    title: 'AI-Based Automated Answer Script Evaluation System',
    category: 'Artificial Intelligence',
    description:
      'Developing an intelligent answer evaluation platform using Machine Learning and NLP for automatic grading of descriptive answers with better accuracy and consistency.',
    longDescription:
      'An end-to-end NLP framework designed to evaluate subjective, long-form answer papers. By combining TF-IDF vectorization, semantic sentence embedding transformers, and keyword match scoring, the system computes automated grades with detailed breakdown metrics.',
    technologies: [
      'Python',
      'Machine Learning',
      'Natural Language Processing',
      'NLTK / SpaCy',
      'Scikit-Learn',
    ],
    features: [
      'Semantic similarity scoring using cosine metrics & word embeddings',
      'Grammar & key term coverage extraction',
      'Plagiarism and duplicate script detection algorithms',
      'Granular score breakdown report generation',
    ],
    githubUrl: 'https://github.com/sushrutha051005',
    isComingSoon: true,
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'web-internship',
    title: 'Web Technologies Internship',
    organization: 'Path Creators',
    date: 'February 2024',
    type: 'Internship',
    badgeText: 'Web Engineering',
  },
  {
    id: 'java-internship',
    title: 'Java Internship',
    organization: 'ULS Technologies',
    date: 'November 2024',
    type: 'Internship',
    badgeText: 'Software Engineering',
  },
];

export const achievementData: AchievementItem = {
  title: 'Research Paper Presentation',
  subTitle: 'Development of a Bus Reservation System',
  conference: 'Presented at ICCIASH 2024',
  year: '2024',
  description:
    'Successfully authored and presented a research paper detailing the design, database architecture, and user workflow of an automated Bus Reservation Management System at the prestigious International Conference ICCIASH 2024.',
};

export const learningBadges: string[] = [
  'React',
  'TypeScript',
  'Machine Learning',
  'Artificial Intelligence',
  'NLP',
  'System Design',
];

export const githubDashboardData: GithubStatData = {
  reposCount: 14,
  starsCount: 32,
  contributions: 480,
  topLanguages: [
    { name: 'Python', percentage: 48, color: '#3572A5' },
    { name: 'Java', percentage: 32, color: '#b07219' },
    { name: 'TypeScript', percentage: 12, color: '#3178c6' },
    { name: 'HTML/CSS', percentage: 8, color: '#e34c26' },
  ],
  featuredRepositories: [
    {
      name: 'Digital-Watermarking-System',
      description: 'Image processing & frequency domain watermark embedding tool.',
      language: 'Python',
      stars: 12,
      forks: 4,
      url: 'https://github.com/sushrutha051005',
    },
    {
      name: 'Sign-Language-CV-Recognizer',
      description: 'Hand tracking and gesture conversion pipeline with OpenCV & ML.',
      language: 'Python',
      stars: 18,
      forks: 6,
      url: 'https://github.com/sushrutha051005',
    },
    {
      name: 'AI-Answer-Script-Evaluator',
      description: 'NLP descriptive grading engine using semantic similarity metrics.',
      language: 'Python',
      stars: 15,
      forks: 3,
      url: 'https://github.com/sushrutha051005',
    },
  ],
};
