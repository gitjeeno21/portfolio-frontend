import { CheckCircle2 } from 'lucide-react';

import { Section } from '@/components/Section';

const reasons = [
  'Direct communication throughout the project',
  'Custom solutions tailored to your business',
  'Mobile-first development from the start',
  'SEO-conscious builds with clear structure',
  'Ongoing support when your site needs updates',
];

const stack = ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'];

const highlights = [
  {
    title: 'Custom Built',
    description: 'Designed around your business, your goals, and the way your customers make decisions.',
  },
  {
    title: 'Mobile First',
    description: 'Planned to feel polished on smaller screens where many first impressions happen.',
  },
  {
    title: 'Fast Loading',
    description: 'Built to stay smooth, quick, and easy to browse without unnecessary weight.',
  },
  {
    title: 'Search Ready',
    description: 'Structured to support visibility, stronger credibility, and cleaner content flow.',
  },
];

const PersonalIntro = () => {
  return (
    <Section
      id="about-me"
      eyebrow="About Jeenokanth"
      title="Hi, I'm Jeenokanth."
      description="I help businesses build modern websites, landing pages, and web applications that improve credibility, visibility, and lead generation."
      align="split"
      headingClassName="max-w-none"
      contentClassName="mt-12"
    >
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <p className="text-xl font-semibold leading-8 text-foreground">
            I focus on websites that do more than look polished. The goal is to make your business
            easier to understand, easier to trust, and easier to contact.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Whether you need a business website, a focused landing page, or a custom web app, I
            keep the process practical and the final result aligned with real business outcomes.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-border bg-white/65 px-4 py-2 text-sm font-semibold text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-secondary">
            Why businesses work with me
          </p>
          <div className="mt-5 space-y-4">
            {reasons.map((item) => (
              <div key={item} className="flex items-start gap-3 border-t border-border/80 pt-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <p className="text-base leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-6 border-y border-border/80 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div key={item.title} className="sm:pr-6 lg:border-r lg:border-border/70 lg:pr-6 last:lg:border-r-0">
            <p className="text-lg font-semibold text-foreground">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PersonalIntro;
