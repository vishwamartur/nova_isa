import React from 'react';

interface FormatField {
  name: string;
  bits: string;
  description: string;
}

interface FormatCardProps {
  title: string;
  totalBits: number;
  fields: FormatField[];
}

export function FormatCard({ title, totalBits, fields }: FormatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-indigo-100 text-sm">{totalBits}-bit Format</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">{field.name}</div>
                <div className="text-sm text-gray-500">{field.description}</div>
              </div>
              <div className="text-sm font-mono text-indigo-600">{field.bits}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}