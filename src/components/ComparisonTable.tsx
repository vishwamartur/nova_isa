import React from 'react';

export function ComparisonTable() {
  return (
    <div className="py-16 bg-gray-50" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Pipeline Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NOVA
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ARM
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  x86
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                ['Energy Efficiency', 'High', 'High', 'Medium'],
                ['AI/ML Performance', 'Optimized', 'Good', 'Limited'],
                ['Instruction Encoding', 'Variable Length', 'Fixed Length', 'Variable Length'],
                ['Complexity', 'Hybrid (RISC+CISC)', 'RISC', 'CISC'],
                ['Security', 'Quantum-Resistant', 'Standard', 'Standard'],
                ['In-Memory Compute', 'Yes', 'Limited', 'Limited'],
              ].map(([feature, nova, arm, x86], idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{nova}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{arm}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{x86}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}