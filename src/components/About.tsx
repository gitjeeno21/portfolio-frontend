import { ArrowUpRight, Globe, Megaphone, RefreshCcw, Wrench } from 'lucide-react';

import { Section } from '@/components/Section';

const services = [
  {
    icon: Globe,
    title: 'Business websites',
    description:
      'Custom websites that explain what you do clearly, present your services with confidence, and make it easy for people to contact you.',
    fit: 'A strong fit for local businesses, consultants, studios, and growing brands.',
  },
  {
    icon: Megaphone,
    title: 'Landing pages',
    description:
      'Focused pages for campaigns, offers, launches, and events so visitors can understand the offer quickly and take the next step.',
    fit: 'Useful for ads, workshops, lead capture, bookings, and product promotions.',
  },
  {
    icon: RefreshCcw,
    title: 'Website refreshes',
    description:
      'Improvements to an existing website when the structure, messaging, or presentation needs to feel clearer and more up to date.',
    fit: 'Ideal when you already have a site but it no longer reflects the quality of your business.',
  },
  {
    icon: Wrench,
    title: 'Custom web apps',
    description:
      'Dashboards, forms, internal tools, and database-backed features for businesses that need something beyond standard brochure pages.',
    fit: 'Best for teams that need custom functionality to support operations or customer service.',
  },
];

const About = () => {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Website support built around real business needs"
      description="Whether you need a new website, a sharper campaign page, or a more capable online system, the work stays focused on helping customers understand your business and reach out with confidence."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="surface-card flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-lg leading-8 text-muted-foreground">{service.description}</p>
            <p className="mt-4 text-base font-semibold leading-7 text-foreground">{service.fit}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-lg leading-8 text-foreground">
          If you already know what you need, I can scope it quickly. If you are still deciding,
          I can help you choose the right starting point.
        </p>
        <a href="#contact" className="btn-premium w-full sm:w-auto">
          Tell me about your project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
};

export default About;
