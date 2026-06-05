import Reveal from '@/components/Reveal';

const capabilities = [
  'Custom websites',
  'Landing pages',
  'Mobile-ready layouts',
  'Contact forms',
  'Booking or enquiry paths',
  'Search-friendly pages',
  'Dashboards and tools',
  'Ongoing updates',
];

const Technologies = () => {
  return (
    <section aria-label="Project capabilities" className="border-y border-border/80 bg-white/82">
      <div className="section-container py-5 sm:py-6">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-eyebrow">What Your Project Can Include</p>
            <p className="mt-1 max-w-xl text-sm font-semibold leading-6 text-muted-foreground sm:text-base">
              The work can be tailored around the pages, features, and support your business needs most.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {capabilities.map((technology) => (
              <span key={technology} className="neo-chip rounded-full px-4 py-2 text-sm font-bold text-foreground">
                {technology}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Technologies;
