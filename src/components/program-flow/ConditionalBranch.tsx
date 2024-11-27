import React from 'react';
import { GitBranch, GitMerge, Shield, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const comparisonInstructions = [
  { instruction: 'CMP', syntax: 'CMP <reg1>, <reg2>', description: 'Compare two registers and set flags' },
  { instruction: 'CMN', syntax: 'CMN <reg1>, <reg2>', description: 'Compare negative (add and set flags)' },
  { instruction: 'TST', syntax: 'TST <reg1>, <reg2>', description: 'Test bits using AND' },
  { instruction: 'TEQ', syntax: 'TEQ <reg1>, <reg2>', description: 'Test equivalence using XOR' }
];

const conditionalBranches = [
  { instruction: 'BEQ', syntax: 'BEQ <label>', description: 'Branch if equal (Z=1)' },
  { instruction: 'BNE', syntax: 'BNE <label>', description: 'Branch if not equal (Z=0)' },
  { instruction: 'BGT', syntax: 'BGT <label>', description: 'Branch if greater than' },
  { instruction: 'BLT', syntax: 'BLT <label>', description: 'Branch if less than' },
  { instruction: 'BGE', syntax: 'BGE <label>', description: 'Branch if greater or equal' }
];

const signedBranches = [
  { instruction: 'BGT', syntax: 'BGT <label>', description: 'Branch if signed greater than' },
  { instruction: 'BLT', syntax: 'BLT <label>', description: 'Branch if signed less than' },
  { instruction: 'BGE', syntax: 'BGE <label>', description: 'Branch if signed greater or equal' },
  { instruction: 'BLE', syntax: 'BLE <label>', description: 'Branch if signed less or equal' }
];

const features = [
  {
    title: 'Comparison Operations',
    description: 'Flexible condition testing',
    icon: GitBranch,
    points: [
      'Multiple comparison types',
      'Flag-based conditions',
      'Bit testing support'
    ]
  },
  {
    title: 'Branch Prediction',
    description: 'Advanced prediction features',
    icon: Zap,
    points: [
      'Static prediction hints',
      'Dynamic prediction',
      'Branch target caching'
    ]
  },
  {
    title: 'Signed Comparisons',
    description: 'Comprehensive signed operations',
    icon: GitMerge,
    points: [
      'Signed integer support',
      'Overflow detection',
      'Sign-aware branching'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized execution',
    icon: Shield,
    points: [
      'Zero-cycle branches',
      'Condition code folding',
      'Speculative execution'
    ]
  }
];

export function ConditionalBranch() {
  return (
    <div className="py-16 bg-white" id="conditional-branch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Conditional Branch Instructions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced conditional control flow in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison Instructions</h3>
            <InstructionTable
              title="Comparison Operations"
              instructions={comparisonInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Conditional Branches</h3>
            <InstructionTable
              title="Basic Conditional Branch Instructions"
              instructions={conditionalBranches}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Signed Comparison Branches</h3>
            <InstructionTable
              title="Signed Comparison Instructions"
              instructions={signedBranches}
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
                title="Basic Conditional Branching"
                code={`// Compare and branch
CMP X0, X1          ; Compare X0 with X1
BEQ equal_label     ; Branch if equal
BNE not_equal      ; Branch if not equal
BGT greater        ; Branch if greater
BLT less           ; Branch if less

equal_label:
    // Handle equal case
not_equal:
    // Handle not equal case`}
              />
              <CodeExample
                title="Complex Conditions"
                code={`// Multiple conditions
CMP X0, #10         ; Compare X0 with 10
BGT too_large      ; Branch if > 10
CMP X0, #0          ; Compare X0 with 0
BLT too_small      ; Branch if < 0

// Test specific bits
TST X0, #0x1        ; Test least significant bit
BNE is_odd         ; Branch if odd
B is_even          ; Branch to even handler`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}