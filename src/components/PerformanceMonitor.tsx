import { useEffect } from 'react';
import { useMobilePerformance } from '@/hooks/use-mobile-performance';

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
  };
};

const PerformanceMonitor = () => {
  const { isMobile, isLowEnd, shouldReduceAnimations, shouldReduceEffects } = useMobilePerformance();

  useEffect(() => {
    const navigatorWithHints = navigator as NavigatorWithHints;

    if (import.meta.env.DEV) {
      console.log('Performance Settings:', {
        isMobile,
        isLowEnd,
        shouldReduceAnimations,
        shouldReduceEffects,
        userAgent: navigator.userAgent,
        deviceMemory: navigatorWithHints.deviceMemory,
        connection: navigatorWithHints.connection?.effectiveType,
      });
    }

    document.documentElement.dataset.reducedEffects = shouldReduceEffects ? 'true' : 'false';
  }, [isMobile, isLowEnd, shouldReduceAnimations, shouldReduceEffects]);

  return null;
};

export default PerformanceMonitor;
