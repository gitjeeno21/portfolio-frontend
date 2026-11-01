export type ProjectCategory = 'Machine Learning' | 'GenAI / RAG' | 'Data Analysis';

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'ATM Cash Optimization and Failure Prediction',
    description:
      'Forecasted ATM cash demand and optimized replenishment, alongside machine learning models to predict ATM failures from historical transaction and operational data.',
    category: 'Machine Learning',
    technologies: ['Machine learning', 'Regression', 'Classification', 'Feature engineering'],
  },
  {
    title: 'Autonomous RAG System',
    description:
      'Designed a Retrieval-Augmented Generation system that retrieves relevant context from a document knowledge base and generates grounded answers using an LLM.',
    category: 'GenAI / RAG',
    technologies: ['RAG', 'LLMs', 'Embeddings', 'Vector databases'],
  },
  {
    title: 'AI-Powered Training Data Curation Bot',
    description: 'Developed a Python-based bot to assist in preparing structured training datasets.',
    category: 'Machine Learning',
    technologies: ['Python', 'Data preprocessing', 'Text cleaning'],
    githubUrl: 'https://github.com/gitjeeno21/AI-powered-training-data-curation-bot',
  },
  {
    title: 'Bank Customer Churn Analysis',
    description: 'Analysed customer data using Python and Pandas to identify patterns associated with customer churn.',
    category: 'Data Analysis',
    technologies: ['Python', 'Pandas', 'Exploratory analysis', 'Visualization'],
  },
  {
    title: 'Exploratory Data Analysis on Sales Dataset',
    description: 'Cleaned and preprocessed raw sales data to handle missing values and inconsistencies.',
    category: 'Data Analysis',
    technologies: ['Pandas', 'Matplotlib', 'Data cleaning', 'EDA'],
    githubUrl: 'https://github.com/gitjeeno21/Exploratory-Data-Analysis-EDA-project-on-a-Sales-Dataset-using-Python',
  },
  {
    title: 'Sales & Customer Analysis using SQL',
    description: 'Analysed sales and customer data using SQL queries, aggregation, filtering, and joins.',
    category: 'Data Analysis',
    technologies: ['SQL', 'Aggregation', 'Filtering', 'Joins'],
    githubUrl: 'https://github.com/gitjeeno21/Sales-Customer-Analysis-project',
  },
];
