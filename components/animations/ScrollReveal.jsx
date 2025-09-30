import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
}) {
  const [ref, isInView] = useInView({ threshold }, once);

  const directionClasses = {
    up: 'translate-y-20',
    down: '-translate-y-20',
    left: 'translate-x-20',
    right: '-translate-x-20',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        !isInView && `opacity-0 ${directionClasses[direction]}`,
        isInView && 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
}) {
  const [ref, isInView] = useInView({ threshold }, once);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity',
        !isInView && 'opacity-0',
        isInView && 'opacity-100',
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
}) {
  const [ref, isInView] = useInView({ threshold }, once);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        !isInView && 'opacity-0 scale-90',
        isInView && 'opacity-100 scale-100',
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}