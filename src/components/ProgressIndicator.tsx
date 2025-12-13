import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
}

interface ProgressIndicatorProps {
  steps: Step[];
  className?: string;
}

export default function ProgressIndicator({ steps, className = '' }: ProgressIndicatorProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white relative z-10">
                {step.status === 'completed' && (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                )}
                {step.status === 'current' && (
                  <Clock className="w-6 h-6 text-blue-600 animate-pulse" />
                )}
                {step.status === 'pending' && (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div className="mt-2 text-center max-w-24">
                <div className={`text-sm font-medium ${
                  step.status === 'completed' ? 'text-green-600' :
                  step.status === 'current' ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 mt-1 hidden sm:block">
                  {step.description}
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 mt-5 ${
                step.status === 'completed' ? 'bg-green-600' : 'bg-gray-300'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}