import { cn } from '@/lib/utils';

export function Card({ 
  children, 
  className, 
  hover = true,
  gradient = false,
  ...props 
}) {
  return (
    <div
      className={cn(
        'rounded-3xl p-8 backdrop-blur-sm transition-all duration-300',
        gradient 
          ? 'bg-gradient-to-br from-white/5 to-white/10 border border-white/10' 
          : 'bg-white/5 border border-white/10',
        hover && 'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 
      className={cn('text-2xl font-bold text-white', className)} 
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p 
      className={cn('text-gray-400 mt-2', className)} 
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn('mt-6 pt-6 border-t border-white/10', className)} {...props}>
      {children}
    </div>
  );
}