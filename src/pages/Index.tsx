import { lazy, Suspense } from 'react';
import Header from '@/components/Header';

// Lazy load components for better performance
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading component for better UX
const ComponentLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Suspense fallback={<ComponentLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
