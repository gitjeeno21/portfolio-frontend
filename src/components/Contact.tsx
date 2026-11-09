import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Section } from '@/components/Section';
import Reveal from '@/components/Reveal';

const EMAIL = 'jeenojk01@gmail.com';

const contactLinks = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeenokanth21/',
    href: 'https://linkedin.com/in/jeenokanth21/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/gitjeeno21',
    href: 'https://github.com/gitjeeno21',
    icon: Github,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Get in touch"
      description="I am seeking a full-time AI/ML Engineer role. Connect with me through email, LinkedIn, or GitHub."
    >
      <div className="contact-cta glass-card">
        <div className="contact-cta-glow" aria-hidden="true" />
        <div className="contact-cta-copy">
          <p className="hero-kicker"><span aria-hidden="true" />Available for full-time roles</p>
          <h3>
            Let’s build something <span className="text-gradient">intelligent</span> together.
          </h3>
        </div>
        <div className="contact-cta-actions">
          <a className="hero-primary-cta" href={`mailto:${EMAIL}`}>
            Say hello
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button type="button" className="hero-secondary-cta copy-email" onClick={copyEmail}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
          <span className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
        </div>
      </div>

      <div className="contact-grid">
        {contactLinks.map((contact, index) => (
          <Reveal key={contact.label} delay={index * 60}>
            <a
              href={contact.href}
              className="contact-card glass-card"
              target={contact.label === 'Email' ? undefined : '_blank'}
              rel={contact.label === 'Email' ? undefined : 'noreferrer'}
            >
              <span className="contact-icon">
                <contact.icon size={18} />
              </span>
              <span className="contact-copy">
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </span>
              <ArrowUpRight className="contact-arrow" size={16} aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
