import { BadgeCheck, Gauge, Handshake, Search, Smartphone, Target } from 'lucide-react';

import { Section } from '@/components/Section';

const reasons = [
  {
    icon: Target,
    title: 'Clear business messaging',
    description:
      'Your pages should explain what you offer in a way customers can understand quickly.',
  },
  {
    icon: Handshake,
    title: 'Direct communication',
    description:
      'You speak directly with the person doing the work, which keeps the project simple and responsive.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-ready pages',
    description:
      'Your site is built to work well on phones, tablets, and desktops where customers browse every day.',
  },
  {
    icon: Gauge,
    title: 'Fast, reliable experience',
    description:
      'Visitors should be able to read, browse, and contact you without delays or clutter getting in the way.',
  },
  {
    icon: Search,
    title: 'Search-friendly setup',
    description:
      'Page structure, content organisation, and page details are prepared with search visibility in mind.',
  },
  {
    icon: BadgeCheck,
    title: 'Stronger credibility online',
    description:
      'Service details, FAQs, and proof points help visitors feel more confident about contacting you.',
  },
];

const Skills = () => {
  return (
    <Section
      id="why-choose"
      eyebrow="Why Work With Me"
      title="A practical website partner for businesses that want a stronger online presence"
      description="Every page should help people understand your business, feel confident in your service, and know how to reach you."
      contentClassName="mt-12"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-xl font-semibold leading-8 text-foreground">
            I keep the work grounded in what matters most: your business goals, your customers, and
            the information people need before they decide to contact you.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            The result is a website that feels professional, easy to use, and much easier for your
            customers to act on.
          </p>
          <a href="#contact" className="btn-premium mt-8">
            Discuss your project
          </a>
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {reasons.map((item) => (
            <div key={item.title} className="flex gap-4 border-t border-border pt-5">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
