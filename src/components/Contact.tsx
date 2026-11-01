import { Github, Linkedin, Mail } from 'lucide-react';

import { Section } from '@/components/Section';
import Reveal from '@/components/Reveal';

const contactLinks = [
  {
    label: 'Email',
    value: 'jeenojk01@gmail.com',
    href: 'mailto:jeenojk01@gmail.com',
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

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Get in touch"
    description="I am seeking a full-time AI/ML Engineer role. Connect with me through email, LinkedIn, or GitHub."
  >
    <div className="contact-grid">
      {contactLinks.map((contact, index) => (
        <Reveal key={contact.label} delay={index * 60}>
          <a
            href={contact.href}
            className="contact-card glass-card"
          >
            <span className="contact-icon">
              <contact.icon size={18} />
            </span>
            <span className="contact-copy">
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Contact;
