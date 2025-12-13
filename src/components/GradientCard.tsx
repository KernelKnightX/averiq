import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface GradientCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  children?: ReactNode;
  className?: string;
}

export default function GradientCard({
  icon: Icon,
  title,
  description,
  gradient = 'from-blue-500 to-cyan-500',
  children,
  className = '',
}: GradientCardProps) {
  return (
    <div className={`group relative bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      {Icon && (
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {description}
      </p>
      {children}
    </div>
  );
}