import { cn } from '@/lib/utils';

const buttonVariants = {
  default: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/50',
  secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20',
  outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
  ghost: 'text-gray-300 hover:text-white hover:bg-white/10',
  gradient: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/50',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  icon: 'p-3',
};

export function Button({
  children,
  variant = 'default',
  size = 'md',
  className,
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        'hover:scale-105 active:scale-95',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && icon}
      {children}
      {icon && iconPosition === 'right' && !loading && icon}
    </button>
  );
}