import { useEffect } from 'react';
import { useMobilePerformance } from '@/hooks/use-mobile-performance';

const PerformanceMonitor = () => {
  const { isMobile, isLowEnd, shouldReduceAnimations, shouldReduceEffects } = useMobilePerformance();

  useEffect(() => {
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Settings:', {
        isMobile,
        isLowEnd,
        shouldReduceAnimations,
        shouldReduceEffects,
        userAgent: navigator.userAgent,
        deviceMemory: (navigator as any).deviceMemory,
        connection: (navigator as any).connection?.effectiveType,
      });
    }

    // Apply performance optimizations
    if (shouldReduceEffects) {
      // Disable heavy animations
      document.documentElement.style.setProperty('--animation-duration', '0s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }

    // Optimize for mobile
    if (isMobile) {
      // Reduce viewport meta tag for better mobile performance
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    }
  }, [isMobile, isLowEnd, shouldReduceAnimations, shouldReduceEffects]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
