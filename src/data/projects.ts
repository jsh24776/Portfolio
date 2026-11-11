import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'sentinel',
    title: 'Sentinel',
    category: 'Web & Systems',
    categoryLabel: 'Disaster Intelligence / Web Application',
    tagline: 'Disaster monitoring and geospatial intelligence visualization platform',
    description: 'A disaster intelligence platform concept focused on earthquake monitoring, interactive geographical visualization, and accessible disaster-related information.',
    fullOverview: 'Sentinel is an exploratory disaster intelligence web application engineered to visualize seismic activity and geographical disaster data. Built with React, TypeScript, and Leaflet/OpenStreetMap, the project focuses on responsive cartographic rendering, spatial event clustering, and providing clear, actionable situational awareness during geological incidents.',
    status: 'In Development',
    technologies: ['React', 'TypeScript', 'Leaflet', 'OpenStreetMap', 'Tailwind CSS', 'GeoJSON APIs'],
    imagePath: '/src/assets/images/sentinel_disaster_visual_1793597879151.jpg',
    githubUrl: 'https://github.com/jsh24776/sentinel',
    highlights: [
      'Interactive cartographic viewport with coordinate projection and depth heatmaps',
      'Geospatial event clustering and seismic intensity classification',
      'Real-time disaster data parsing pipeline with GeoJSON normalization',
      'Designed for accessible disaster reporting and emergency situational awareness'
    ],
    architectureNotes: [
      'Modular GIS visualization layers decoupled from data fetching stores',
      'Optimized vector layer re-rendering for smooth panning across thousands of points',
      'Defensive error boundaries for external OpenStreetMap tile providers'
    ],
    metrics: [
      {
        label: 'Map Rendering',
        value: '60 FPS',
        context: 'Smooth pan/zoom transitions with Leaflet hardware acceleration'
      },
      {
        label: 'Spatial Precision',
        value: 'Sub-Kilometer',
        context: 'Coordinate mapping using standard WGS84 projection'
      }
    ]
  },
  {
    id: 'atlas',
    title: 'Atlas',
    category: 'Mobile',
    categoryLabel: 'Fitness Coaching Management / Mobile Application',
    tagline: 'Client tracking, appointment scheduling, and workout programming mobile app',
    description: 'An ongoing fitness coaching management application designed to help coaches manage clients, appointments, and workout programs with offline-first persistence.',
    fullOverview: 'Atlas is designed from the ground up to solve the friction personal trainers and fitness coaches experience when organizing client schedules and tracking training progression. Developed with Flutter and Dart, the application prioritizes local data persistence, smooth list interactions, and an intuitive workout program builder.',
    status: 'In Development',
    technologies: ['Flutter', 'Dart', 'SQLite / Hive Persistence', 'State Management', 'Material 3'],
    imagePath: '/src/assets/images/atlas_fitness_visual.jpg',
    githubUrl: 'https://github.com/jsh24776/atlas',
    highlights: [
      'Client roster and personal profile management with health history',
      'Interactive appointment calendar and training session scheduler',
      'Custom workout program builder with structured sets, reps, and target weights',
      'Longitudinal weight history and body composition tracking charts',
      'Robust local data persistence ensuring full functionality without network access'
    ],
    architectureNotes: [
      'Repository pattern decoupling local SQLite / Hive persistence from UI widgets',
      'Immutable state management for predictable workout session updates',
      'Custom date-time calculation utilities for repeating training cycles'
    ],
    metrics: [
      {
        label: 'Data Storage',
        value: 'Local First',
        context: 'Zero network reliance for core coaching tasks'
      },
      {
        label: 'Cross-Platform',
        value: 'Android & iOS',
        context: 'Single Flutter codebase with native compiled performance'
      }
    ]
  },
  {
    id: 'earthquake-ml',
    title: 'Earthquake Predictive Modeling',
    category: 'Machine Learning',
    categoryLabel: 'Predictive Modeling / Machine Learning Research',
    tagline: 'Exploratory seismic data analysis and classification using LightGBM',
    description: 'A machine learning project exploring earthquake-related data and predictive modeling using LightGBM and statistical feature engineering.',
    fullOverview: 'An academic exploration into applying gradient boosting frameworks to geophysical datasets. The project investigates tabular seismic indicators, temporal occurrence intervals, and spatial coordinates to evaluate model classification performance. Implemented using Python, LightGBM, and Scikit-learn with rigorous cross-validation.',
    status: 'Research Prototype',
    technologies: ['Python', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    imagePath: '/src/assets/images/earthquake_ml_visual_1793597880850.jpg',
    githubUrl: 'https://github.com/jsh24776/earthquake-prediction-lightgbm',
    highlights: [
      'Extensive exploratory data analysis on geological and seismic event catalogs',
      'Feature engineering focusing on depth ratios, distance to fault lines, and temporal decay',
      'Gradient boosted decision tree training with LightGBM for fast convergence',
      'Comprehensive evaluation across precision, recall, and ROC-AUC curves'
    ],
    architectureNotes: [
      'K-Fold Stratified Cross-Validation pipeline to prevent temporal data leakage',
      'Hyperparameter tuning using grid search across tree depth and learning rate',
      'SHAP value feature importance analysis to explain model predictions'
    ],
    metrics: [
      {
        label: 'Classification Accuracy',
        value: '~76%',
        context: 'Reported validation benchmark on test fold classification split'
      },
      {
        label: 'Feature Count',
        value: '18 Features',
        context: 'Engineered geological and temporal indicators'
      }
    ]
  },
  {
    id: 'filipino-food-cv',
    title: 'Filipino Food Recognition',
    category: 'Computer Vision',
    categoryLabel: 'Computer Vision / Object Detection',
    tagline: 'Culinary object detection and classification using YOLOv8n',
    description: 'A computer vision project exploring Filipino food recognition using a lightweight YOLOv8 model trained on a custom labeled dataset.',
    fullOverview: 'Filipino dishes often have complex textures, sauces, and presentations that present unique computer vision challenges. This project built a specialized object detection model utilizing YOLOv8n, trained across thousands of annotated images to recognize popular local dishes in real-world lighting conditions.',
    status: 'Research Prototype',
    technologies: ['Python', 'YOLOv8', 'Roboflow', 'PyTorch', 'OpenCV', 'Data Augmentation'],
    imagePath: '/src/assets/images/food_vision_visual_1793597880310.jpg',
    githubUrl: 'https://github.com/jsh24776/filipino-food-detection-yolov8',
    highlights: [
      'Custom labeled dataset of 7,461 images with bounding box annotations',
      '100 training epochs on YOLOv8 nano architecture balancing speed and accuracy',
      'Data augmentation pipeline covering brightness shifts, rotation, and mosaic blending',
      'Real-time edge inference capabilities suitable for mobile and web deployment'
    ],
    architectureNotes: [
      'Transfer learning fine-tuning starting from pretrained COCO weights',
      'Evaluation metrics tracked using mAP@0.5 and confusion matrix diagnostics',
      'Model export pipelines for ONNX and TFLite edge deployment'
    ],
    metrics: [
      {
        label: 'Dataset Volume',
        value: '7,461 Images',
        context: 'Annotated training, validation, and test splits via Roboflow'
      },
      {
        label: 'Training Duration',
        value: '100 Epochs',
        context: 'Converged loss with high mAP across core dish classes (~76%)'
      }
    ]
  }
];
