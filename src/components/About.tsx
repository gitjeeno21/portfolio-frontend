import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import { Section } from '@/components/Section';

const stats = [
  { value: 2, label: 'Internships', detail: 'Data analytics & MERN' },
  { value: 6, label: 'Projects', detail: 'ML, RAG & analytics' },
  { value: 6, label: 'Certifications', detail: 'AI agents, Python, SQL' },
  { value: 7.47, decimals: 2, label: 'CGPA', detail: 'B.E. Computer Science' },
];

const About = () => (
  <Section
    id="about"
    index="01"
    eyebrow="About"
    title={<>Curious about how data can become <span className="text-gradient">intelligence.</span></>}
    description="I am a Computer Science graduate with internship and academic project experience in analytics, predictive modelling, and LLM-based RAG systems. I am eager to apply my data science skills in a professional environment."
  >
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} className="stat-card glass-card" delay={index * 70} spotlight>
          <span className="stat-value">
            <CountUp value={stat.value} decimals={stat.decimals} />
          </span>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-detail">{stat.detail}</span>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default About;
