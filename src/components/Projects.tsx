import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

import Reveal from '@/components/Reveal';
import { Section } from '@/components/Section';
import { projects } from '@/data/projects';

const categories = ['All', 'Machine Learning', 'GenAI / RAG', 'Data Analysis'] as const;
type CategoryFilter = (typeof categories)[number];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const visibleProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory,
  );

  const filterProjects = (category: CategoryFilter) => {
    setActiveCategory(category);
  };

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Academic work across predictive modelling, retrieval-augmented generation, and data analysis."
    >
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="project-filter"
            aria-pressed={activeCategory === category}
            onClick={() => filterProjects(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.title} className="project-card glass-card" delay={index * 60} spotlight>
            <div className="project-copy">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label="Technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            {(project.githubUrl || project.demoUrl) && (
              <div className="project-actions">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub: ${project.title}`}>
                    <Github size={16} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Live demo: ${project.title}`}>
                    <ExternalLink size={16} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <a
        className="projects-github-link"
        href="https://github.com/gitjeeno21"
        target="_blank"
        rel="noreferrer"
      >
        <Github size={17} aria-hidden="true" />
        View all projects on GitHub
        <ExternalLink size={15} aria-hidden="true" />
      </a>
    </Section>
  );
};

export default Projects;
