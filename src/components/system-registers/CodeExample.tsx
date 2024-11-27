import React from 'react';

interface CodeExampleProps {
  title: string;
  code: string;
}

export function CodeExample({ title, code }: CodeExampleProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="text-sm text-indigo-400 mb-2">{title}</div>
      <pre className="text-sm text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}