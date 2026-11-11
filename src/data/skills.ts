import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for coursework, scripting, modeling, and software construction.',
    skills: [
      { name: 'Python', notes: 'Scripting, machine learning workflows, data analysis, and API development' },
      { name: 'TypeScript', notes: 'Type-safe frontend development and modern web applications' },
      { name: 'JavaScript', notes: 'DOM manipulation, ES6+ features, and asynchronous programming' },
      { name: 'Java', notes: 'Object-oriented programming principles and academic software engineering' }
    ]
  },
  {
    title: 'Web & Mobile Development',
    description: 'Frameworks and styling systems used to craft responsive user interfaces and applications.',
    skills: [
      { name: 'React', notes: 'Component-driven interfaces, custom hooks, and state management' },
      { name: 'Tailwind CSS', notes: 'Utility-first responsive layouts and custom design systems' },
      { name: 'Laravel', notes: 'MVC architecture fundamentals, routing, and full-stack prototyping' },
      { name: 'HTML5 & CSS3', notes: 'Semantic markup, accessibility basics, and modern layout models' },
      { name: 'Flutter & Dart', notes: 'Cross-platform mobile UI development and offline state' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Model exploration, computer vision algorithms, and practical ML experiment workflows.',
    skills: [
      { name: 'Machine Learning Fundamentals', notes: 'Data preprocessing, feature engineering, and model evaluation' },
      { name: 'LightGBM', notes: 'Gradient boosted decision trees for tabular classification and regression' },
      { name: 'Scikit-learn', notes: 'Pipelines, cross-validation, metrics, and standard estimators' },
      { name: 'YOLOv8 & OpenCV', notes: 'Object detection fine-tuning, bounding boxes, and image processing' },
      { name: 'AI-Assisted Development', notes: 'Leveraging modern LLM tools for code generation and research' }
    ]
  },
  {
    title: 'Backend, Databases & Tools',
    description: 'Server utilities, database environments, and version control workflows.',
    skills: [
      { name: 'FastAPI', notes: 'Lightweight Python REST endpoints and data schema validation' },
      { name: 'Git & GitHub', notes: 'Branching, commit hygiene, pull requests, and version control' },
      { name: 'MySQL / MariaDB', notes: 'Relational schemas, queries, foreign keys, and indexes' },
      { name: 'REST API Fundamentals', notes: 'HTTP methods, JSON serialization, and status code conventions' },
      { name: 'XAMPP & Local Stacks', notes: 'Local server environment configuration and database hosting' }
    ]
  },
  {
    title: 'Virtual Assistance & Operations',
    description: 'Practical support skills developed through data, document, and customer-facing work.',
    skills: [
      { name: 'Data Entry & Verification', notes: 'Careful data encoding, record checking, and digital document handling' },
      { name: 'Document Formatting & Preparation', notes: 'Formatting, layout checks, and preparing files for printing or sharing' },
      { name: 'Customer Assistance', notes: 'Helping customers with service requests, files, and document needs' },
      { name: 'Digital Organization', notes: 'Systematic filing, document archiving, and following established procedures' },
      { name: 'Productivity Suites', notes: 'Spreadsheets, documentation, and technical reporting' }
    ]
  }
];
