export interface Project {
  id: string;
  title: string;
  category: 'Mobile' | 'Web & Systems' | 'Machine Learning' | 'Computer Vision';
  categoryLabel: string;
  tagline: string;
  description: string;
  fullOverview: string;
  status: 'In Development' | 'Research Prototype' | 'Completed Concept';
  technologies: string[];
  imagePath: string;
  githubUrl: string;
  liveDemoUrl?: string;
  highlights: string[];
  architectureNotes?: string[];
  metrics?: {
    label: string;
    value: string;
    context: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    notes?: string;
  }[];
}

export interface WorkExperience {
  role: string;
  type: string;
  durationApprox: string;
  context: string;
  summary: string;
  transferableCompetencies: string[];
}

export interface EducationInfo {
  degree: string;
  status: string;
  level: string;
  location: string;
  focusAreas: string[];
  coursework: string[];
}
