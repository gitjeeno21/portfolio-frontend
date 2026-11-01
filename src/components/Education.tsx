import { Section } from '@/components/Section';
import Reveal from '@/components/Reveal';

const education = [
  {
    qualification: 'B.E. in Computer Science and Engineering',
    institution: 'Adhiyamaan College of Engineering, Hosur',
    dates: '2022–2026',
    result: 'CGPA: 7.6/10',
  },
  {
    qualification: 'HSC, Class XII',
    institution: 'Don Bosco Matriculation Higher Secondary School, Krishnagiri',
    dates: '2022',
    result: '81%',
  },
  {
    qualification: 'SSLC, Class X',
    institution: 'Don Bosco Matriculation Higher Secondary School, Krishnagiri',
    dates: '2020',
    result: '98.2%',
  },
];

const Education = () => (
  <Section
    id="education"
    eyebrow="Education"
    title="Academic background"
    description="Computer Science education from school through my engineering degree."
  >
    <div className="education-timeline">
      {education.map((item, index) => (
        <Reveal key={item.qualification} className="education-item" delay={index * 60}>
          <span className="education-dot" aria-hidden="true" />
          <article className="education-card glass-card">
            <div>
              <span className="education-year">{item.dates}</span>
              <h3>{item.qualification}</h3>
              <p>{item.institution}</p>
            </div>
            <span className="education-result">{item.result}</span>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Education;
