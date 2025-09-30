import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect when an element is in viewport
 * @param {Object} options - Intersection Observer options
 * @param {boolean} triggerOnce - Whether to trigger only once
 * @returns {Array} [ref, isInView] - Ref to attach to element and visibility state
 */
export function useInView(options = {}, triggerOnce = false) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Default options
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      ...options
    };

    // Create observer
    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;

      // If triggerOnce is true and already triggered, don't update
      if (triggerOnce && hasTriggered.current) {
        return;
      }

      setIsInView(isVisible);

      // Mark as triggered if visible
      if (isVisible && triggerOnce) {
        hasTriggered.current = true;
      }
    }, defaultOptions);

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, triggerOnce]);

  return [ref, isInView];
}

export default useInView;