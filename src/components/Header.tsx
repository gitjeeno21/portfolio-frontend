import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry?.target.id) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.18, 0.35, 0.55] },
    );
    ['home', ...navItems.map((item) => item.id)].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const nav = desktopNavRef.current;
    if (!nav) return;

    const updateUnderline = () => {
      const activeLink = nav.querySelector<HTMLAnchorElement>('a[aria-current="location"]');
      if (!activeLink) return;
      nav.style.setProperty(
        '--active-left',
        `${activeLink.offsetLeft + (activeLink.offsetWidth - 32) / 2}px`,
      );
    };

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    const resizeObserver = new ResizeObserver(updateUnderline);
    resizeObserver.observe(nav);
    return () => {
      window.removeEventListener('resize', updateUnderline);
      resizeObserver.disconnect();
    };
  }, [activeSection]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstMenuLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="section-container">
        <div className="glass-navbar">
          <a href="#home" className="brand-mark" aria-label="Jeenokanth G, home">
            <span>JG</span>
            <span className="brand-name">Jeenokanth G<small>AI / ML Engineer</small></span>
          </a>
          <nav ref={desktopNavRef} className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-controls">
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-trigger"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-overlay">
          <button className="menu-scrim" onClick={closeMenu} aria-label="Close menu" />
          <nav
            id="site-menu"
            className="menu-panel glass-card"
            aria-label="Site menu"
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.stopPropagation();
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
              }
            }}
          >
            <p className="eyebrow">Navigation</p>
            {navItems.map((item, index) => (
              <a
                key={item.id}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                <span>0{index + 1}</span>{item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
