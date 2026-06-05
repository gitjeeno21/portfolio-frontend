import { ArrowUpRight, Check, Mail, Sparkles } from 'lucide-react';

import Reveal from '@/components/Reveal';
import profileImage from '@/assets/profile-portrait.webp';

const capabilityPills = ['MERN Stack', 'SEO Optimized', 'Mobile First', 'Digital Marketing'];

const Hero = () => {
  return (
    <section
      id="home"
      className="section-shell relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 18% 22%, rgba(196, 164, 132, 0.16), transparent 28rem), radial-gradient(circle at 76% 18%, rgba(255, 255, 255, 0.78), transparent 24rem), radial-gradient(circle at 74% 40%, rgba(18, 48, 72, 0.075), transparent 24rem), radial-gradient(circle at 50% 70%, rgba(18, 48, 72, 0.05), transparent 36rem)',
        }}
      />
      <div
        className="hero-orb absolute -right-20 top-28 h-72 w-72 rounded-full bg-secondary/[0.08] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-16 h-80 w-80 rounded-full bg-primary/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal className="max-w-[37rem]">
            <div className="pill-badge w-fit">
              <Sparkles className="h-4 w-4 text-secondary" />
              Freelance websites, landing pages, and web apps
            </div>

            <h1 className="font-display mt-6 max-w-[12ch] text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[5rem] lg:leading-[0.95]">
              Websites Built to Grow Your Business, Not Just Look Good
            </h1>
            <p className="mt-6 max-w-[40.625rem] text-pretty text-[1.05rem] leading-[1.82] text-muted-foreground sm:text-[1.25rem] sm:leading-[1.8]">
              Modern websites, landing pages, and web applications designed to improve credibility,
              visibility, and the quality of the leads your business receives online.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-premium w-full sm:w-auto">
                Discuss your project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary w-full sm:w-auto">
                Explore services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {capabilityPills.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-bold text-foreground shadow-[0_8px_20px_rgba(18,48,72,0.05)]"
                >
                  <Check className="h-4 w-4 text-secondary" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-[42rem] lg:ml-auto">
            <div
              className="pointer-events-none absolute inset-6 -z-10 rounded-full blur-3xl"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(circle, rgba(18, 48, 72, 0.08) 0%, rgba(18, 48, 72, 0) 72%)',
              }}
            />
            <div className="hero-portrait-card group relative overflow-hidden rounded-[2.2rem] p-3">
              <div className="hero-portrait-glow absolute inset-0" aria-hidden="true" />
              <div className="mesh-panel absolute inset-0 opacity-55" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.8rem] bg-primary/5">
                <img
                  src={profileImage}
                  alt="Portrait of Jeenokanth G, freelance web developer"
                  width={1100}
                  height={1100}
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-[50%_34%] transition-transform duration-300 group-hover:scale-[1.018] sm:aspect-[0.98/1]"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 border border-white/75 bg-white/74 p-5 shadow-soft backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-bold text-foreground">Let&apos;s discuss your project.</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    Get a free consultation and project estimate for your business.
                  </p>
                </div>
              </div>
              <a href="#contact" className="btn-quiet">
                Get Free Quote
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
