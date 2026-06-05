import { useEffect } from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="surface-card max-w-lg p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(217,171,115,0.16)] text-primary">
          <Compass className="h-7 w-7" />
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.34em] text-secondary sm:text-sm">404 error</p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          This page is not available
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          The page <span className="font-semibold text-foreground">{location.pathname}</span> could
          not be found. Head back to the homepage to continue browsing.
        </p>
        <a href="/" className="btn-premium mt-8 inline-flex">
          <ArrowLeft className="h-4 w-4" />
          Return home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
