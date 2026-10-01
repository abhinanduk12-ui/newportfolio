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
  },
  {
    id: 'supermarket-navigator',
    title: 'Supermarket 2D Navigator',
    category: 'AI / Data Science',
    description: 'An indoor supermarket navigation system with interactive product search and shortest-path routing.',
    longDescription: 'Created an indoor supermarket navigation system with interactive product search and real-time shortest-path routing. Applied Dijkstra\'s algorithm across a multi-aisle supermarket layout and built REST APIs that drive route optimization and help reduce manual product search time.',
    features: [
      'Interactive product search functionality',
      'Product location identification',
      'Supermarket graph representation',
      'Dijkstra shortest-path calculation',
      'REST API for route optimization',
      'Interactive SVG supermarket map',
      'Route visualization and navigation',
      'Real-time path updates'
    ],
    technologies: [
      'Python',
      'Flask',
      'JavaScript',
      'HTML',
      'CSS',
      'SVG',
      'REST API',
      'Dijkstra\'s Algorithm'
    ],
    isFeatured: false
  }
];
