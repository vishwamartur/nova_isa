import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

export function FeatureCard({ title, description, icon: Icon, points }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-indigo-100">
                <span className="text-indigo-600 text-xs">•</span>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-500">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}