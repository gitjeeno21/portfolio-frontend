import { Section } from '@/components/Section';
import Reveal from '@/components/Reveal';

const internships = [
  {
    title: 'Data Analytics Intern',
    company: 'Solublix',
    location: 'Krishnagiri',
    dates: 'Jan 2026 – Mar 2026',
    responsibilities: [
      'Analysed structured datasets with Python, Pandas, and NumPy to uncover patterns and insights.',
      'Cleaned and preprocessed data to improve quality and consistency for downstream analysis.',
      'Prepared analytical reports to support internal decision-making.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Rise With Media',
    location: 'Krishnagiri',
    dates: 'Mar 2026 – May 2026',
    responsibilities: [
      'Built and supported web application features across the frontend, backend, and database layers using the MERN stack.',
      'Worked with databases and assisted with website deployment and configuration.',
      'Troubleshot issues and delivered technical solutions in a team environment.',
    ],
  },
];

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Professional experience"
    description="Hands-on experience in data analytics and full-stack development, the foundation for building and deploying AI/ML applications."
  >
    <div className="experience-timeline">
      {internships.map((internship, index) => (
        <Reveal key={internship.company} className="experience-item" delay={index * 60}>
          <span className="experience-dot" aria-hidden="true" />
          <article className="experience-card glass-card">
            <div className="experience-heading">
              <div>
                <h3>{internship.company} · {internship.location}</h3>
                <p className="experience-role">{internship.title}</p>
              </div>
              <span className="experience-dates">{internship.dates}</span>
            </div>
            <ul className="experience-list">
              {internship.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;
