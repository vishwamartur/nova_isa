import React from 'react';

interface InstructionRow {
  instruction: string;
  syntax: string;
  description: string;
}

interface FloatingPointTableProps {
  title: string;
  instructions: InstructionRow[];
}

export function FloatingPointTable({ title, instructions }: FloatingPointTableProps) {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <div className="bg-indigo-600 px-4 py-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Instruction</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Syntax</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {instructions.map((row, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-mono font-medium text-gray-900">
                {row.instruction}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-mono text-gray-500">
                {row.syntax}
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}