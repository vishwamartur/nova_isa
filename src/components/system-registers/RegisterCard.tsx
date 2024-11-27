import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RegisterField {
  name: string;
  description: string;
}

interface RegisterCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  fields: RegisterField[];
}

export function RegisterCard({ title, description, icon: Icon, fields }: RegisterCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-3">
            <div className="font-medium text-gray-900">{field.name}</div>
            <div className="mt-1 text-sm text-gray-500">{field.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}