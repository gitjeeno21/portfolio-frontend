import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import portrait from '@/assets/portfolio-pfp.webp';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/gitjeeno21', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jeenokanth21/', icon: Linkedin },
  { label: 'Email', href: 'mailto:jeenojk01@gmail.com', icon: Mail },
];

const Hero = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="section-container hero-container">
        <div className="hero-copy">
          <div className={`hero-intro${isReady ? ' is-ready' : ''}`}>
            <p className="hero-kicker"><span aria-hidden="true" />Open to AI / ML Engineer roles</p>
            <h1 className="hero-title">Jeenokanth G</h1>
            <p className="hero-role">AI / ML Engineer</p>
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
          <div className="hero-portrait-wrap">
            <figure className="hero-portrait-card glass-card">
              <img
                className="hero-portrait"
                src={portrait}
                alt="Jeenokanth G, AI / ML Engineer"
                width={512}
                height={512}
                loading="eager"
                {...{ fetchpriority: 'high' }}
              />
              <figcaption className="hero-facts-strip" aria-label="At a glance">
                <span>B.E. Computer Science · 2026</span>
                <span>2 internships</span>
                <span>Python · ML · RAG</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
