import { BadgeCheck } from 'lucide-react';

import { Section } from '@/components/Section';
import Reveal from '@/components/Reveal';

const certifications = [
  { title: 'AI Agents Course', issuer: 'Hugging Face' },
  { title: 'Building AI Agents with Semantic Kernel', issuer: 'Microsoft Learn' },
  { title: 'Building AI Agents with LangChain', issuer: 'IBM SkillsBuild' },
  { title: 'Python Master Bootcamp', issuer: 'Udemy' },
  { title: 'Advanced Databases and SQL Querying', issuer: 'Udemy' },
  { title: 'Data Structures and Algorithms in Python', issuer: 'Infosys Springboard' },
];

const Certifications = () => (
  <Section
    id="certifications"
    index="05"
    eyebrow="Certifications"
  >
    <div className="certification-grid">
      {certifications.map((certification, index) => (
        <Reveal key={certification.title} delay={index * 60}>
          <article className="certification-card glass-card">
            <span className="certification-mark" aria-hidden="true"><BadgeCheck size={15} /></span>
            <div>
              <h3>{certification.title}</h3>
              <p>{certification.issuer}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Certifications;
