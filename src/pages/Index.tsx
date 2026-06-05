import { lazy, Suspense } from 'react';

import Header from '@/components/Header';
import { Surface } from '@/components/Section';

const Hero = lazy(() => import('@/components/Hero'));
const PersonalIntro = lazy(() => import('@/components/PersonalIntro'));
const Technologies = lazy(() => import('@/components/Technologies'));
const Services = lazy(() => import('@/components/About'));
const WorkShowcase = lazy(() => import('@/components/Projects'));
const WhyChoose = lazy(() => import('@/components/Skills'));
const Process = lazy(() => import('@/components/Process'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));

const SectionLoader = () => (
  <div className="section-shell">
    <div className="section-container">
      <Surface className="p-6 sm:p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-28 rounded-full bg-[rgba(217,171,115,0.22)]" />
          <div className="h-10 w-2/3 rounded-2xl bg-slate-200" />
          <div className="h-4 w-full rounded-full bg-slate-100" />
          <div className="h-4 w-5/6 rounded-full bg-slate-100" />
          <div className="grid gap-4 pt-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-36 rounded-[1.5rem] bg-slate-100" />
            ))}
          </div>
        </div>
      </Surface>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="site-bg relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Header />
      <main className="relative z-10">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PersonalIntro />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Technologies />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WorkShowcase />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyChoose />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <footer className="pb-10 pt-4">
        <div className="section-container">
          <div className="flex flex-col gap-3 border-t border-border px-0 py-5 text-base text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span className="font-semibold text-foreground">Jeenokanth</span>
            <span>Business websites, landing pages, web apps, and ongoing online support.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
