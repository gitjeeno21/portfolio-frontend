import { useState, useEffect, useCallback } from 'react';

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
  };
};

export const useMobilePerformance = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  const checkDevice = useCallback(() => {
    const width = window.innerWidth;
    const isMobileDevice = width < 768;
    const navigatorWithHints = navigator as NavigatorWithHints;

    setIsMobile(isMobileDevice);

    const isLowEndDevice =
      isMobileDevice &&
      (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        (navigatorWithHints.deviceMemory !== undefined && navigatorWithHints.deviceMemory < 4) ||
        navigatorWithHints.connection?.effectiveType === 'slow-2g' ||
        window.devicePixelRatio < 1.5
      );

    setIsLowEnd(isLowEndDevice);
  }, []);

  useEffect(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, [checkDevice]);

  return {
    isMobile,
    isLowEnd,
    shouldReduceAnimations: isMobile || isLowEnd,
    shouldReduceEffects: isLowEnd,
  };
};
