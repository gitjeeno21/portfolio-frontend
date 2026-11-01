import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, HTMLAttributes, MouseEvent } from 'react';

import { cn } from '@/lib/utils';

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  spotlight?: boolean;
};

const Reveal = ({ className, delay = 0, spotlight = false, style, onMouseMove, ...props }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          window.removeEventListener('scroll', revealIfVisible);
          window.removeEventListener('resize', revealIfVisible);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    const revealIfVisible = () => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
        setIsVisible(true);
        observer.disconnect();
        window.removeEventListener('scroll', revealIfVisible);
        window.removeEventListener('resize', revealIfVisible);
      }
    };

    observer.observe(element);
    window.addEventListener('scroll', revealIfVisible, { passive: true });
    window.addEventListener('resize', revealIfVisible);
    revealIfVisible();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealIfVisible);
      window.removeEventListener('resize', revealIfVisible);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);
    if (!spotlight || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      ref={ref}
      className={cn('reveal', spotlight && 'spotlight-card', isVisible && 'is-visible', className)}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
      onMouseMove={handleMouseMove}
      {...props}
    />
  );
};

export default Reveal;
