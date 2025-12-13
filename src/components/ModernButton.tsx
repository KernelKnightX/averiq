import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ModernButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function ModernButton({
  children,
  variant = 'primary',
  size = 'md',
  icon = false,
  onClick,
  href,
  className = '',
}: ModernButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:from-blue-700 hover:to-cyan-600',
    secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}