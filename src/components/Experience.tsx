import { Section } from '@/components/Section';
import Reveal from '@/components/Reveal';

const internships = [
  {
    title: 'Data Analytics Intern',
    company: 'Solubix',
    location: 'Krishnagiri',
    dates: 'Jan 2026 – Mar 2026',
    responsibilities: [
      'Analysed structured datasets using Python, Pandas, and NumPy to identify meaningful patterns and insights.',
      'Cleaned and processed datasets to improve data quality and consistency.',
      'Prepared analytical reports to support internal decision-making and transformed raw data into useful information through analytical and problem-solving skills.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Rise With Media',
    location: 'Krishnagiri',
    dates: 'Mar 2026 – May 2026',
    responsibilities: [
      'Worked on web applications using the MERN stack, including frontend, backend, and database integration.',
      'Developed and supported application features based on project requirements.',
      'Worked with databases, assisted with website deployment and configuration, and gained experience in troubleshooting, teamwork, and delivering technical solutions.',
    ],
  },
];

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Professional experience"
    description="Internship experience across data analytics and web application development."
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
