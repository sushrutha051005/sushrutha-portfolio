export interface PersonalDetails {
  name: string;
  title: string;
  typingRoles: string[];
  tagline: string;
  aboutText: string;
  highlights: string[];
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  location: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  field: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  status: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Artificial Intelligence' | 'Research' | 'Web Development' | 'All';
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  githubUrl: string;
  isComingSoon?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: string;
  badgeText: string;
}

export interface AchievementItem {
  title: string;
  subTitle: string;
  conference: string;
  year: string;
  description: string;
}

export interface GithubStatData {
  reposCount: number;
  starsCount: number;
  contributions: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  featuredRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  }[];
}
