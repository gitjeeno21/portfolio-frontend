import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

import About from '@/components/About';
import Ambient from '@/components/Ambient';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const Index = () => (
  <div className="site-bg">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Ambient />
    <Header />
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </main>
    <nav className="mobile-action-bar" aria-label="Quick links">
      <a href="#projects">View Projects</a>
      <a href="#contact">Get in touch</a>
    </nav>
    <footer className="site-footer">
      <div className="section-container">
        <p className="footer-wordmark" aria-hidden="true">Jeenokanth G.</p>
        <div className="site-footer-inner">
          <div>
            <span>Jeenokanth G</span>
            <p>AI / ML Engineer · © {new Date().getFullYear()}</p>
          </div>
          <nav aria-label="Footer links" className="footer-links">
            <a className="footer-link" href="mailto:jeenojk01@gmail.com" aria-label="Email Jeenokanth">
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
            <a className="footer-link" href="https://linkedin.com/in/jeenokanth21/" target="_blank" rel="noreferrer">
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="footer-link" href="https://github.com/gitjeeno21" target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a className="footer-link" href="#home" aria-label="Back to top">
              <ArrowUp size={16} aria-hidden="true" />
              Top
            </a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
