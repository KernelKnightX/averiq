import type { ReactNode } from 'react';

interface FloatingElementProps {
  children?: ReactNode;
  delay?: number;
  className?: string;
}

export default function FloatingElement({ children, delay = 0, className = '' }: FloatingElementProps) {
  return (
    <div 
      className={`${delay > 0 ? 'float-delayed' : 'float'} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}