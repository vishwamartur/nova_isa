import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const immediateOffsetInstructions = [
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn, #imm]', description: 'Load with immediate offset' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn, #imm]', description: 'Store with immediate offset' },
  { instruction: 'LDUR', syntax: 'LDUR Rd, [Rn, #imm]', description: 'Load with unscaled immediate offset' },
  { instruction: 'STUR', syntax: 'STUR Rd, [Rn, #imm]', description: 'Store with unscaled immediate offset' }
];

const registerOffsetInstructions = [
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn, Rm]', description: 'Load with register offset' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn, Rm]', description: 'Store with register offset' },
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn, Rm, LSL #imm]', description: 'Load with scaled register offset' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn, Rm, LSL #imm]', description: 'Store with scaled register offset' }
];

const indexedAddressingInstructions = [
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn, #imm]!', description: 'Pre-indexed load' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn, #imm]!', description: 'Pre-indexed store' },
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn], #imm', description: 'Post-indexed load' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn], #imm', description: 'Post-indexed store' }
];

const features = [
  {
    title: 'Immediate Offset',
    description: 'Direct memory addressing',
    icon: Binary,
    points: [
      'Fixed offset addressing',
      'Efficient array access',
      'Optimized encoding'
    ]
  },
  {
    title: 'Register Offset',
    description: 'Dynamic memory addressing',
    icon: Cpu,
    points: [
      'Variable offset support',
      'Scaled register offsets',
      'Flexible array indexing'
    ]
  },
  {
    title: 'Pre/Post Indexing',
    description: 'Advanced addressing modes',
    icon: Zap,
    points: [
      'Automatic address updates',
      'Stack operations support',
      'Efficient pointer manipulation'
    ]
  },
  {
    title: 'Memory Protection',
    description: 'Secure addressing features',
    icon: Shield,
    points: [
      'Bounds checking',
      'Alignment enforcement',
      'Access permission validation'
    ]
  }
];

export function LoadsStoresAddressing() {
  return (
    <div className="py-16 bg-white" id="loads-stores-addressing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loads and Stores - Addressing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Memory addressing modes in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Immediate Offset Addressing</h3>
            <InstructionTable
              title="Immediate Offset Instructions"
              instructions={immediateOffsetInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Register Offset Addressing</h3>
            <InstructionTable
              title="Register Offset Instructions"
              instructions={registerOffsetInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre/Post-Indexed Addressing</h3>
            <InstructionTable
              title="Indexed Addressing Instructions"
              instructions={indexedAddressingInstructions}
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
                title="Basic Addressing"
                code={`LDR X0, [X1, #8]    ; Load with immediate offset
LDR X2, [X3, X4]    ; Load with register offset
STR X5, [X6, X7, LSL #3] ; Store with scaled offset
LDUR X8, [X9, #-16] ; Load with unscaled offset`}
              />
              <CodeExample
                title="Indexed Addressing"
                code={`LDR X0, [X1, #8]!   ; Pre-indexed load
STR X2, [X3], #8    ; Post-indexed store
LDR X4, [X5, #16]!  ; Pre-indexed with update
STR X6, [X7], X8    ; Post-indexed with register`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}