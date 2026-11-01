import { BrainCircuit, Database, Network, PanelsTopLeft } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { Section } from '@/components/Section';

const expertiseAreas = [
  {
    title: 'AI / MACHINE LEARNING',
    icon: BrainCircuit,
    description: 'Predictive modelling and evaluation across regression, classification, clustering, and forecasting.',
    skills: [
      'Regression',
      'Classification',
      'Clustering',
      'Forecasting',
      'Scikit-learn',
      'Model evaluation',
    ],
  },
  {
    title: 'PYTHON & DATA ANALYTICS',
    icon: Database,
    description: 'Working with structured data, exploratory analysis, and visualization.',
    skills: [
      'Python',
      'SQL (Oracle)',
      'Pandas',
      'NumPy',
      'Data cleaning & preprocessing',
      'Feature engineering',
      'EDA',
      'Power BI',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    title: 'GENERATIVE AI',
    icon: Network,
    description: 'Building retrieval-augmented systems grounded in document knowledge.',
    skills: ['RAG', 'LLMs', 'Embeddings', 'Vector databases'],
  },
  {
    title: 'WEB DEVELOPMENT',
    icon: PanelsTopLeft,
    description: 'Web application experience across frontend, backend, and database integration.',
    skills: ['Django', 'MERN Stack', 'MongoDB'],
  },
];

const tools = ['Git', 'GitHub', 'Jupyter Notebook'];

const Skills = () => (
  <Section
    id="expertise"
    eyebrow="Expertise"
    title="Areas of expertise"
    description="Core areas and tools drawn from my internship and academic project experience."
  >
    <div className="expertise-layout">
      {expertiseAreas.map((area, index) => (
        <Reveal className={`expertise-card expertise-card-${index + 1} glass-card`} key={area.title} delay={index * 60} spotlight>
          <area.icon className="expertise-icon" aria-hidden="true" />
          <h3>{area.title}</h3>
          <p>{area.description}</p>
          <ul className="expertise-tags">
            {area.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </Reveal>
      ))}
    </div>

    <div className="tools-row">
      <h3>Tools</h3>
      {tools.map((tool) => <span key={tool}>{tool}</span>)}
    </div>

  </Section>
);

export default Skills;
