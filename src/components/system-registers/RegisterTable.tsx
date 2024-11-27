import React from 'react';

interface TableRow {
  register: string;
  purpose: string;
  features: string;
}

interface RegisterTableProps {
  rows: TableRow[];
}

export function RegisterTable({ rows }: RegisterTableProps) {
  return (
    <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Register</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Purpose</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Key Fields/Features</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{row.register}</td>
              <td className="px-3 py-4 text-sm text-gray-500">{row.purpose}</td>
              <td className="px-3 py-4 text-sm text-gray-500">{row.features}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}