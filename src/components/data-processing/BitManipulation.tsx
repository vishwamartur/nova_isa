import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from './InstructionTable';
import { FeatureCard } from './FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const bitwiseInstructions = [
  { instruction: 'AND', syntax: 'AND Rd, Rn, Rm', description: 'Performs bitwise AND of Rn and Rm' },
  { instruction: 'ORR', syntax: 'ORR Rd, Rn, Rm', description: 'Performs bitwise OR of Rn and Rm' },
  { instruction: 'EOR', syntax: 'EOR Rd, Rn, Rm', description: 'Performs bitwise XOR of Rn and Rm' },
  { instruction: 'BIC', syntax: 'BIC Rd, Rn, Rm', description: 'Bitwise AND with complement of Rm' },
  { instruction: 'MVN', syntax: 'MVN Rd, Rn', description: 'Bitwise NOT of Rn' }
];

const shiftInstructions = [
  { instruction: 'LSL', syntax: 'LSL Rd, Rn, #imm', description: 'Logical shift left by imm bits' },
  { instruction: 'LSR', syntax: 'LSR Rd, Rn, #imm', description: 'Logical shift right by imm bits' },
  { instruction: 'ASR', syntax: 'ASR Rd, Rn, #imm', description: 'Arithmetic shift right by imm bits' },
  { instruction: 'ROR', syntax: 'ROR Rd, Rn, #imm', description: 'Rotate right by imm bits' },
  { instruction: 'RRX', syntax: 'RRX Rd, Rn', description: 'Rotate right with extend' }
];

const bitFieldInstructions = [
  { instruction: 'BFM', syntax: 'BFM Rd, Rn, #imm1, #imm2', description: 'Bit field move' },
  { instruction: 'BFX', syntax: 'BFX Rd, Rn, #imm1, #imm2', description: 'Bit field extract' },
  { instruction: 'BFI', syntax: 'BFI Rd, Rn, #imm1, #imm2', description: 'Bit field insert' },
  { instruction: 'BFXIL', syntax: 'BFXIL Rd, Rn, #imm1, #imm2', description: 'Bit field extract and insert low' },
  { instruction: 'CLZ', syntax: 'CLZ Rd, Rn', description: 'Count leading zeros' }
];

const features = [
  {
    title: 'Efficient Bit Operations',
    description: 'Optimized bitwise manipulation instructions',
    icon: Binary,
    points: [
      'Single-cycle execution for most operations',
      'Support for immediate and register operands',
      'Flexible bit field manipulation'
    ]
  },
  {
    title: 'Advanced Features',
    description: 'Extended bit manipulation capabilities',
    icon: Cpu,
    points: [
      'Population count instructions',
      'Leading/trailing zero detection',
      'Bit field operations'
    ]
  },
  {
    title: 'Security Operations',
    description: 'Hardware-accelerated security features',
    icon: Shield,
    points: [
      'Cryptographic bit manipulation',
      'Secure state manipulation',
      'Protected register operations'
    ]
  },
  {
    title: 'Performance Optimization',
    description: 'High-performance bit manipulation',
    icon: Zap,
    points: [
      'Single-instruction bit field operations',
      'Parallel bit manipulation',
      'Optimized for common patterns'
    ]
  }
];

export function BitManipulation() {
  return (
    <div className="py-16 bg-white" id="bit-manipulation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bit Manipulation
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced bit-level operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bitwise Operations</h3>
            <InstructionTable
              title="Basic Bitwise Instructions"
              instructions={bitwiseInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Shift and Rotate</h3>
            <InstructionTable
              title="Shift and Rotate Instructions"
              instructions={shiftInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bit Field Operations</h3>
            <InstructionTable
              title="Bit Field Instructions"
              instructions={bitFieldInstructions}
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
                title="Bitwise Operations"
                code={`AND R0, R1, R2      ; R0 = R1 AND R2
ORR R3, R4, #0xFF   ; R3 = R4 OR 0xFF
EOR R5, R6, R7      ; R5 = R6 XOR R7
BIC R8, R9, #0xF0   ; Clear bits in R9`}
              />
              <CodeExample
                title="Bit Field Operations"
                code={`LSL R0, R1, #3      ; Shift left 3 bits
BFX R2, R3, #4, #8  ; Extract 8 bits from pos 4
CLZ R4, R5          ; Count leading zeros
ROR R6, R7, #2      ; Rotate right 2 bits`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}