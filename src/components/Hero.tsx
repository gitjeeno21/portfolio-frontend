import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

import portrait from '@/assets/portfolio-pfp.webp';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/gitjeeno21', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jeenokanth21/', icon: Linkedin },
  { label: 'Email', href: 'mailto:jeenojk01@gmail.com', icon: Mail },
];

const marqueeItems = [
  'Python',
  'Machine Learning',
  'RAG Systems',
  'LLMs',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'SQL',
  'Embeddings',
  'Vector Databases',
  'Power BI',
  'Forecasting',
  'MERN Stack',
];

const Hero = () => {
  const [isReady, setIsReady] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleTilt = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty('--tilt-x', `${(-y * 7).toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${(x * 9).toFixed(2)}deg`);
    card.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty('--glare-y', `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
        <span className="hero-orb hero-orb-3" />
        <span className="hero-grid" />
      </div>

      <div className="section-container hero-container">
        <div className="hero-copy">
          <div className={`hero-intro${isReady ? ' is-ready' : ''}`}>
            <p className="hero-kicker">
              <span aria-hidden="true" />
              Open to AI / ML Engineer roles
            </p>
            <h1 className="hero-title">
              <span className="hero-title-line">Jeenokanth</span>{' '}
              <span className="hero-title-accent">G.</span>
            </h1>
            <p className="hero-role">
              <span className="text-gradient">AI / ML Engineer</span>
              <span className="hero-role-sep" aria-hidden="true">/</span>
              <span>Data · RAG · LLMs</span>
            </p>
            <p className="hero-description">
              Hands-on experience in data cleaning, predictive modelling, and LLM-based RAG systems
              through internships and academic projects.
            </p>
            <div className="hero-actions">
              <a className="hero-primary-cta" href="#projects">
                View Projects
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="hero-secondary-cta" href="#contact">Get in touch</a>
            </div>
            <nav className="hero-social-links" aria-label="Social links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="hero-portrait-wrap" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <figure ref={cardRef} className="hero-portrait-card glass-card">
              <img
                className="hero-portrait"
                src={portrait}
                alt="Jeenokanth G, AI / ML Engineer"
                width={512}
                height={512}
                loading="eager"
                {...{ fetchpriority: 'high' }}
              />
              <span className="hero-portrait-glare" aria-hidden="true" />
              <figcaption className="hero-facts-strip" aria-label="At a glance">
                <span>B.E. Computer Science · 2026</span>
                <span>2 internships</span>
                <span>Python · ML · RAG</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
