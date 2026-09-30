import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'medforecast-ai',
    title: 'MedForecast AI',
    category: 'AI / Machine Learning',
    description: 'Intelligent pharmaceutical inventory and demand forecasting system helping pharmacies optimize stock levels and reduce medicine waste.',
    longDescription: 'MedForecast AI is a Django-based system that uses machine learning to analyze historical sales data and predict future medicine demand. Designed for retail pharmacies, hospital dispensaries, and pharmaceutical supply chains, it addresses critical challenges like medicine stockouts, overstocking, and expiry risk. The system provides actionable insights for inventory planning and purchase decisions.',
    features: [
      'Historical sales data analysis and pattern recognition',
      'Medicine demand forecasting using ML algorithms',
      'Real-time inventory level monitoring',
      'Stockout risk estimation and early warnings',
      'Intelligent purchase quantity recommendations',
      'Safety stock calculations based on demand volatility',
      'Seasonal demand trend analysis',
      'Actual vs predicted demand visualization',
      'Interactive analytics dashboard'
    ],
    technologies: [
      'Python',
      'Django',
      'Machine Learning',
      'Pandas',
      'Scikit-learn',
      'SQL',
      'JavaScript',
      'REST API'
    ],
    githubUrl: '', // TODO: Add your GitHub repository URL
    isFeatured: true
  },
  {
    id: 'hostsync',
    title: 'HostSync',
    category: 'Full Stack',
    description: 'Comprehensive hostel management system for student accommodation and administrative operations.',
    longDescription: 'HostSync is a full-stack web application built with Node.js, Express.js, and MongoDB that streamlines hostel operations. It provides separate interfaces for students and administrators, enabling efficient management of room allocations, complaints, fees, and resident information.',
    features: [
      'Student registration and authentication',
      'Admin dashboard with analytics',
      'Room allocation and management system',
      'Complaint tracking and resolution workflow',
      'Fee management and payment tracking',
      'Lost & Found item registry',
      'Secure user authentication',
      'Responsive design for mobile and desktop'
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'EJS',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    githubUrl: '', // TODO: Add your GitHub repository URL
    isFeatured: false
  }
];
