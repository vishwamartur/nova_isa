import React from 'react';
import { GitBranch, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const conditionalSelectInstructions = [
  { instruction: 'CSINC', syntax: 'CSINC Rd, Rn, Rm, cond', description: 'Conditional select with increment' },
  { instruction: 'CSNEG', syntax: 'CSNEG Rd, Rn, Rm, cond', description: 'Conditional select with negation' },
  { instruction: 'CSEL', syntax: 'CSEL Rd, Rn, Rm, cond', description: 'Conditional select between two registers' },
  { instruction: 'CSET', syntax: 'CSET Rd, cond', description: 'Conditional set register to 1 or 0' }
];

const conditionalArithmeticInstructions = [
  { instruction: 'CSINV', syntax: 'CSINV Rd, Rn, Rm, cond', description: 'Conditional select with inversion' },
  { instruction: 'CSETM', syntax: 'CSETM Rd, cond', description: 'Conditional set register to -1 or 0' },
  { instruction: 'CINC', syntax: 'CINC Rd, Rn, cond', description: 'Conditional increment' },
  { instruction: 'CNEG', syntax: 'CNEG Rd, Rn, cond', description: 'Conditional negate' }
];

const features = [
  {
    title: 'Conditional Selection',
    description: 'Efficient value selection',
    icon: GitBranch,
    points: [
      'Branch-free conditionals',
      'Multiple selection modes',
      'Flag-based selection'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized execution',
    icon: Zap,
    points: [
      'Single-cycle execution',
      'No branch penalties',
      'Reduced instruction count'
    ]
  },
  {
    title: 'Arithmetic Integration',
    description: 'Combined operations',
    icon: Cpu,
    points: [
      'Conditional arithmetic',
      'Integrated increment/negate',
      'Efficient computation'
    ]
  },
  {
    title: 'Security Features',
    description: 'Protected execution',
    icon: Shield,
    points: [
      'Constant-time operation',
      'Side-channel resistance',
      'Predictable execution'
    ]
  }
];

export function ConditionalSelect() {
  return (
    <div className="py-16 bg-white" id="conditional-select">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Conditional Select Instructions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Branch-free conditional operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Conditional Select</h3>
            <InstructionTable
              title="Conditional Select Instructions"
              instructions={conditionalSelectInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Conditional Arithmetic</h3>
            <InstructionTable
              title="Conditional Arithmetic Instructions"
              instructions={conditionalArithmeticInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Features</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CodeExample
                title="Basic Conditional Select"
                code={`// Select based on comparison
CMP X0, X1          ; Compare values
CSEL X2, X3, X4, GT ; X2 = X3 if X0 > X1, else X2 = X4

// Conditional increment
CMP X0, #10         ; Compare with 10
CSINC X1, X2, X2, EQ ; X1 = X2 + 1 if equal, else X1 = X2`}
              />
              <CodeExample
                title="Advanced Selection"
                code={`// Conditional negation
CMP X0, #0          ; Compare with zero
CSNEG X1, X2, X2, MI ; X1 = -X2 if negative

// Set based on condition
CMP X0, X1          ; Compare values
CSET X2, GT         ; X2 = 1 if X0 > X1, else 0
CSETM X3, EQ        ; X3 = -1 if X0 = X1, else 0`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}