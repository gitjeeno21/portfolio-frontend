import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <main className="not-found-page">
      <div className="not-found-card glass-card">
        <p className="section-eyebrow">404 error</p>
        <h1 className="section-title">This page is not available</h1>
        <p className="section-description">
          The page <span>{location.pathname}</span> could not be found. Head back to the homepage to continue browsing.
        </p>
        <a href="/" className="hero-secondary-cta">
          <ArrowLeft size={16} aria-hidden="true" />
          Return home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
