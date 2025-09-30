import { cn } from '@/lib/utils';

const badgeVariants = {
  default: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  success: 'bg-green-500/20 text-green-300 border-green-500/30',
  warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  danger: 'bg-red-500/20 text-red-300 border-red-500/30',
  info: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  pink: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  gradient: 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border-indigo-500/30',
};

const badgeSizes = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-2',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  icon,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium border backdrop-blur-sm',
        'transition-all duration-300 hover:scale-105',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </span>
  );
}

export function SkillBadge({ skill, className }) {
  const getVariantByLevel = (level) => {
    if (level >= 90) return 'success';
    if (level >= 80) return 'default';
    if (level >= 70) return 'info';
    return 'warning';
  };

  return (
    <Badge
      variant={getVariantByLevel(skill.level)}
      className={cn('group cursor-default', className)}
    >
      <span>{skill.name}</span>
      <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
        {skill.level}%
      </span>
    </Badge>
  );
}

export function TechBadge({ tech, className }) {
  return (
    <Badge
      variant="gradient"
      size="sm"
      className={cn('hover:shadow-lg hover:shadow-indigo-500/30', className)}
    >
      {tech}
    </Badge>
  );
}