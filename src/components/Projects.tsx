import { ArrowUpRight, LayoutTemplate, LineChart, Store } from 'lucide-react';

import { Section } from '@/components/Section';

const solutions = [
  {
    icon: Store,
    title: 'Business website',
    description:
      'A complete website with the pages most businesses need to explain their services clearly and encourage new enquiries.',
    includes: 'A good fit for service providers, clinics, consultants, studios, and local brands.',
  },
  {
    icon: LayoutTemplate,
    title: 'Offer landing page',
    description:
      'A single page built around one offer, one audience, and one clear next step such as booking, enquiry, or sign-up.',
    includes: 'Useful for launches, promotions, workshops, advertisements, and seasonal campaigns.',
  },
  {
    icon: LineChart,
    title: 'Custom web app',
    description:
      'A tailored web app with dashboards, forms, internal tools, or database-backed features that support the way your business works.',
    includes: 'Best for teams that need more than a standard website.',
  },
];

const Projects = () => {
  return (
    <Section
      id="work"
      eyebrow="Project Types"
      title="Common ways I support businesses online"
      description="These examples show the kinds of projects I can take on. Each one is shaped around your goals, your customers, and the stage your business is in."
    >
      <div className="divide-y divide-border border-y border-border">
        {solutions.map((solution) => (
          <div key={solution.title} className="grid gap-6 py-8 lg:grid-cols-[0.28fr_0.42fr_0.3fr] lg:items-start">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
                <solution.icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{solution.title}</h3>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">{solution.description}</p>
            <div>
              <p className="text-base font-semibold leading-7 text-foreground">{solution.includes}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-secondary"
              >
                Ask about this project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
