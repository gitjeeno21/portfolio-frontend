import { useEffect, useRef, useState } from 'react';

const CountUp = ({ value, decimals = 0, suffix = '' }: { value: number; decimals?: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let started = false;
    let observer: IntersectionObserver | undefined;

    const cleanupListeners = () => {
      observer?.disconnect();
      window.removeEventListener('scroll', checkVisible);
      window.removeEventListener('resize', checkVisible);
    };

    const start = () => {
      if (started) return;
      started = true;
      cleanupListeners();
      const startTime = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        setDisplay(value * (1 - Math.pow(1 - progress, 4)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    function checkVisible() {
      const bounds = element!.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) start();
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => entry.isIntersecting && start(), { threshold: 0.4 });
      observer.observe(element);
    }
    window.addEventListener('scroll', checkVisible, { passive: true });
    window.addEventListener('resize', checkVisible);
    checkVisible();

    return () => {
      cleanupListeners();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} aria-label={`${value.toFixed(decimals)}${suffix}`}>
      <span aria-hidden="true">{display.toFixed(decimals)}{suffix}</span>
    </span>
  );
};

export default CountUp;
