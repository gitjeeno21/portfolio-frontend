import { useEffect, useState } from 'react';
import { ArrowUpRight, Layers3, Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Projects' },
  { id: 'why-choose', label: 'Why Choose Me' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.18, 0.35, 0.55],
      },
    );

    ['home', ...navItems.map((item) => item.id)].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2.5' : 'py-3.5 sm:py-4',
      )}
    >
      <div className="section-container">
        <div
          className={cn(
            'nav-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-2.5 py-2 transition-all duration-300 sm:px-3.5',
            isScrolled && 'nav-glass-scrolled',
          )}
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-10 flex min-w-0 items-center gap-2.5 rounded-full pr-2 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Go to home section"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-soft">
              <Layers3 className="h-[1.125rem] w-[1.125rem]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.62rem] font-extrabold uppercase tracking-[0.22em] text-secondary">
                Freelance Web Developer
              </span>
              <span className="block truncate text-[0.98rem] font-extrabold text-foreground sm:text-base">
                Jeenokanth
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="relative z-10 hidden lg:block">
            <ul className="flex items-center gap-1.5 rounded-full border border-white/60 bg-white/[0.36] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-lg">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      'block rounded-full px-4 py-1.5 text-[0.95rem] font-bold transition-all duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background xl:px-[1.125rem]',
                      activeSection === item.id
                        ? 'bg-primary text-white shadow-soft'
                        : 'text-muted-foreground hover:bg-white/[0.88] hover:text-foreground',
                    )}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="btn-premium relative z-10 hidden xl:inline-flex">
            Request a quote
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/65 bg-white/[0.52] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-lg transition hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="lg:hidden">
          <button
            className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close mobile menu overlay"
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="section-container fixed inset-x-0 top-[82px] z-50"
          >
            <div className="glass-panel mx-auto max-w-6xl rounded-[1.6rem] p-3">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className={cn(
                        'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/55',
                        activeSection === item.id
                          ? 'bg-primary text-white shadow-soft'
                          : 'text-foreground hover:bg-white',
                      )}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={closeMenu} className="btn-premium mt-3 w-full">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
