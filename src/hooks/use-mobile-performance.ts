import { useState, useEffect, useCallback } from 'react';

export const useMobilePerformance = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  const checkDevice = useCallback(() => {
    const width = window.innerWidth;
    const isMobileDevice = width < 768;
    setIsMobile(isMobileDevice);

    // Detect low-end devices based on various factors
    const isLowEndDevice = 
      isMobileDevice && (
        // Check for reduced motion preference
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        // Check for low memory (approximate)
        (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4 ||
        // Check for slow connection
        (navigator as any).connection && (navigator as any).connection.effectiveType === 'slow-2g' ||
        // Check for low pixel density (older devices)
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
