import { BriefcaseBusiness, Compass, PenTool, Rocket } from 'lucide-react';

import { Section } from '@/components/Section';

const steps = [
  {
    step: '01',
    icon: BriefcaseBusiness,
    title: 'Initial discussion',
    description:
      'We talk through your business, your customers, what you need online, and what a successful project should achieve.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Project plan',
    description:
      'I recommend the right pages, features, and priorities so the work starts with a clear direction.',
  },
  {
    step: '03',
    icon: PenTool,
    title: 'Build phase',
    description:
      'Your website or web app is built with close attention to clarity, mobile use, and the details your customers will actually see.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Review and launch',
    description:
      'We review the final version, make any finishing updates, and publish with a clear handover or next-step plan.',
  },
];

const Process = () => {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A straightforward path from idea to launch"
      description="You always know what stage the project is in, what happens next, and what I need from you to keep things moving."
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-border lg:block" />
        <div className="space-y-8">
          {steps.map((item) => (
            <div key={item.step} className="relative grid gap-5 lg:grid-cols-[6rem_1fr] lg:gap-10">
              <div className="flex items-center gap-4 lg:block">
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
                  Step {item.step}
                </span>
              </div>
              <div className="border-t border-border pb-2 pt-5">
                <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-lg font-semibold leading-8 text-foreground">
          Most projects move faster when the goals are clear and communication stays simple.
        </p>
        <a href="#contact" className="btn-secondary w-full sm:w-auto">
          Start your project
        </a>
      </div>
    </Section>
  );
};

export default Process;
