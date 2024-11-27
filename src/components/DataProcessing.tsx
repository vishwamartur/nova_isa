import React from 'react';
import { Calculator, Cpu, Zap, Shield } from 'lucide-react';
import { InstructionTable } from './data-processing/InstructionTable';
import { FeatureCard } from './data-processing/FeatureCard';
import { CodeExample } from './system-registers/CodeExample';

const arithmeticInstructions = [
  { instruction: 'ADD', syntax: 'ADD Rd, Rn, Rm', description: 'Adds Rn and Rm, stores result in Rd' },
  { instruction: 'SUB', syntax: 'SUB Rd, Rn, Rm', description: 'Subtracts Rm from Rn, stores result in Rd' },
  { instruction: 'MUL', syntax: 'MUL Rd, Rn, Rm', description: 'Multiplies Rn and Rm, stores result in Rd' },
  { instruction: 'DIV', syntax: 'DIV Rd, Rn, Rm', description: 'Divides Rn by Rm, stores quotient in Rd' },
  { instruction: 'NEG', syntax: 'NEG Rd, Rn', description: 'Negates Rn, stores result in Rd' }
];

const logicalInstructions = [
  { instruction: 'AND', syntax: 'AND Rd, Rn, Rm', description: 'Performs bitwise AND of Rn and Rm' },
  { instruction: 'ORR', syntax: 'ORR Rd, Rn, Rm', description: 'Performs bitwise OR of Rn and Rm' },
  { instruction: 'EOR', syntax: 'EOR Rd, Rn, Rm', description: 'Performs bitwise XOR of Rn and Rm' },
  { instruction: 'LSL', syntax: 'LSL Rd, Rn, #imm', description: 'Logical shift left by imm bits' },
  { instruction: 'LSR', syntax: 'LSR Rd, Rn, #imm', description: 'Logical shift right by imm bits' }
];

const features = [
  {
    title: 'Hybrid ALU Design',
    description: 'Advanced arithmetic logic unit optimized for performance',
    icon: Calculator,
    points: [
      'Low-latency operation execution',
      'Pipelined design for high throughput',
      'Support for complex operations'
    ]
  },
  {
    title: 'SIMD Support',
    description: 'Single Instruction Multiple Data capabilities',
    icon: Zap,
    points: [
      'Vector operations for parallel processing',
      'Optimized for AI/ML workloads',
      'Enhanced floating-point performance'
    ]
  },
  {
    title: 'Power Efficiency',
    description: 'Intelligent power management features',
    icon: Shield,
    points: [
      'Data-dependent clock gating',
      'Power-optimized instruction encoding',
      'Dynamic voltage scaling'
    ]
  },
  {
    title: 'Advanced Features',
    description: 'Extended capabilities for modern computing',
    icon: Cpu,
    points: [
      'Conditional execution support',
      '128-bit arithmetic operations',
      'Hardware acceleration for cryptography'
    ]
  }
];

export function DataProcessing() {
  return (
    <div className="py-16 bg-white" id="data-processing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Data Processing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Arithmetic and Logic Operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Arithmetic Operations</h3>
            <InstructionTable
              title="Basic Arithmetic Instructions"
              instructions={arithmeticInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Logical Operations</h3>
            <InstructionTable
              title="Basic Logical Instructions"
              instructions={logicalInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Special Features</h3>
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
                title="Arithmetic Operations"
                code={`ADD R0, R1, R2      ; R0 = R1 + R2
SUB R3, R4, #5      ; R3 = R4 - 5
MUL R5, R6, R7      ; R5 = R6 * R7
DIV R8, R9, R10     ; R8 = R9 / R10`}
              />
              <CodeExample
                title="Logical Operations"
                code={`AND R0, R1, R2      ; R0 = R1 AND R2
ORR R3, R4, #0xFF   ; R3 = R4 OR 0xFF
LSL R5, R6, #3      ; R5 = R6 << 3
EOR R7, R8, R9      ; R7 = R8 XOR R9`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}