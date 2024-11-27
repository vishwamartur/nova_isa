import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const singlePrecisionInstructions = [
  { instruction: 'LDR', syntax: 'LDR s0, [x0, #0]', description: 'Load single-precision float from memory' },
  { instruction: 'STR', syntax: 'STR s0, [x0, #0]', description: 'Store single-precision float to memory' },
  { instruction: 'LDP', syntax: 'LDP s0, s1, [x0]', description: 'Load pair of single-precision floats' },
  { instruction: 'STP', syntax: 'STP s0, s1, [x0]', description: 'Store pair of single-precision floats' }
];

const doublePrecisionInstructions = [
  { instruction: 'LDR', syntax: 'LDR d0, [x0, #0]', description: 'Load double-precision float from memory' },
  { instruction: 'STR', syntax: 'STR d0, [x0, #0]', description: 'Store double-precision float to memory' },
  { instruction: 'LDP', syntax: 'LDP d0, d1, [x0]', description: 'Load pair of double-precision floats' },
  { instruction: 'STP', syntax: 'STP d0, d1, [x0]', description: 'Store pair of double-precision floats' }
];

const vectorInstructions = [
  { instruction: 'LDR', syntax: 'LDR q0, [x0]', description: 'Load 128-bit vector register' },
  { instruction: 'STR', syntax: 'STR q0, [x0]', description: 'Store 128-bit vector register' },
  { instruction: 'LD1', syntax: 'LD1 {v0.4S}, [x0]', description: 'Load one vector of single-precision floats' },
  { instruction: 'ST1', syntax: 'ST1 {v0.2D}, [x0]', description: 'Store one vector of double-precision floats' }
];

const features = [
  {
    title: 'Precision Support',
    description: 'Multiple precision formats',
    icon: Database,
    points: [
      'Single-precision (32-bit)',
      'Double-precision (64-bit)',
      'Vector floating-point'
    ]
  },
  {
    title: 'Memory Alignment',
    description: 'Optimized memory access',
    icon: Shield,
    points: [
      '4-byte alignment for single-precision',
      '8-byte alignment for double-precision',
      '16-byte alignment for vectors'
    ]
  },
  {
    title: 'Vector Operations',
    description: 'SIMD floating-point access',
    icon: Zap,
    points: [
      'Multiple elements per instruction',
      'Efficient data streaming',
      'Parallel processing support'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-performance implementation',
    icon: Cpu,
    points: [
      'Hardware acceleration',
      'Cache optimization',
      'Low-latency access'
    ]
  }
];

export function LoadsStoresFloatingPoint() {
  return (
    <div className="py-16 bg-white" id="loads-stores-floating-point">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Floating-Point Loads and Stores
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Memory operations for floating-point registers in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Single-Precision Operations</h3>
            <InstructionTable
              title="Single-Precision Instructions"
              instructions={singlePrecisionInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Double-Precision Operations</h3>
            <InstructionTable
              title="Double-Precision Instructions"
              instructions={doublePrecisionInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vector Operations</h3>
            <InstructionTable
              title="Vector Instructions"
              instructions={vectorInstructions}
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
                title="Basic Floating-Point Operations"
                code={`LDR s0, [x0]       ; Load single-precision
STR s1, [x1, #4]    ; Store single-precision
LDR d2, [x2]        ; Load double-precision
STR d3, [x3, #8]    ; Store double-precision`}
              />
              <CodeExample
                title="Vector Operations"
                code={`LDR q0, [x0]           ; Load 128-bit vector
LD1 {v0.4S}, [x1]     ; Load 4 singles
ST1 {v1.2D}, [x2]     ; Store 2 doubles
STP q2, q3, [x3]      ; Store vector pair`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}