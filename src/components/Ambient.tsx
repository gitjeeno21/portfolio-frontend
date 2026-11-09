import { useEffect, useRef } from 'react';

/** Scroll progress bar + pointer-follow glow + film grain. Pure decoration. */
const Ambient = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        barRef.current?.style.setProperty('transform', `scaleX(${progress})`);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let glowFrame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;
    const animate = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      glowRef.current?.style.setProperty('transform', `translate3d(${x - 300}px, ${y - 300}px, 0)`);
      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        glowFrame = requestAnimationFrame(animate);
      } else {
        glowFrame = 0;
      }
    };
    const onPointer = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glowRef.current?.classList.add('is-active');
      if (!glowFrame) glowFrame = requestAnimationFrame(animate);
    };
    if (fine && !reduced) window.addEventListener('pointermove', onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(glowFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><div ref={barRef} /></div>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div className="ambient-noise" aria-hidden="true" />
    </>
  );
};

export default Ambient;
