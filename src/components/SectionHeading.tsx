import type { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 mb-3 sm:mb-4 ${centered ? 'mx-auto' : ''}`}>
          <span className="text-xs font-semibold text-blue-600">{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}