import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const scalarLoadInstructions = [
  { instruction: 'LDURB', syntax: 'LDURB Rd, [Rn, #offset]', description: '8-bit (byte) load from memory' },
  { instruction: 'LDURH', syntax: 'LDURH Rd, [Rn, #offset]', description: '16-bit (halfword) load from memory' },
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn]', description: '32-bit (word) or 64-bit (doubleword) load' },
  { instruction: 'LDRSW', syntax: 'LDRSW Rd, [Rn]', description: '32-bit signed load with sign extension' },
  { instruction: 'LDUR', syntax: 'LDUR Rd, [Rn, #offset]', description: '32/64-bit load with offset' }
];

const scalarStoreInstructions = [
  { instruction: 'STURB', syntax: 'STURB Rd, [Rn, #offset]', description: '8-bit (byte) store to memory' },
  { instruction: 'STURH', syntax: 'STURH Rd, [Rn, #offset]', description: '16-bit (halfword) store to memory' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn]', description: '32-bit (word) or 64-bit (doubleword) store' },
  { instruction: 'STUR', syntax: 'STUR Rd, [Rn, #offset]', description: '32/64-bit store with offset' },
  { instruction: 'STP', syntax: 'STP Rt, Rt2, [Rn]', description: 'Store pair of 64-bit registers' }
];

const vectorLoadStoreInstructions = [
  { instruction: 'VLDR', syntax: 'VLDR Vd, [Rn]', description: '128/256-bit vector load' },
  { instruction: 'VLDRB', syntax: 'VLDRB Vd, [Rn]', description: 'Vector of 8-bit elements load' },
  { instruction: 'VLDRH', syntax: 'VLDRH Vd, [Rn]', description: 'Vector of 16-bit elements load' },
  { instruction: 'VST', syntax: 'VST Vd, [Rn]', description: '128/256-bit vector store' },
  { instruction: 'VSTP', syntax: 'VSTP Vd, [Rn]', description: 'Store vector pair (256/512 bits)' }
];

const features = [
  {
    title: 'Scalar Data Sizes',
    description: 'Multiple data width support',
    icon: Database,
    points: [
      '8-bit (byte) operations',
      '16-bit (halfword) operations',
      '32/64-bit (word/doubleword) operations'
    ]
  },
  {
    title: 'Vector Data Sizes',
    description: 'Wide vector operations',
    icon: Zap,
    points: [
      '128-bit vector operations',
      '256-bit vector operations',
      'Multiple element sizes'
    ]
  },
  {
    title: 'Alignment Support',
    description: 'Flexible memory alignment',
    icon: Shield,
    points: [
      'Natural alignment optimization',
      'Unaligned access support',
      'Performance optimizations'
    ]
  },
  {
    title: 'Size Extensions',
    description: 'Data size conversion',
    icon: Cpu,
    points: [
      'Sign extension on load',
      'Zero extension options',
      'Automatic width handling'
    ]
  }
];

export function LoadsStoresSize() {
  return (
    <div className="py-16 bg-white" id="loads-stores-size">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loads and Stores - Size
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Memory access operations with different data sizes in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Scalar Load Sizes</h3>
            <InstructionTable
              title="Scalar Load Instructions by Size"
              instructions={scalarLoadInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Scalar Store Sizes</h3>
            <InstructionTable
              title="Scalar Store Instructions by Size"
              instructions={scalarStoreInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vector Load/Store Sizes</h3>
            <InstructionTable
              title="Vector Memory Instructions by Size"
              instructions={vectorLoadStoreInstructions}
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
                title="Scalar Size Operations"
                code={`LDURB W0, [X1]      ; Load byte
LDURH W2, [X3]      ; Load halfword
LDR X4, [X5]        ; Load doubleword
STURB W6, [X7]      ; Store byte
STURH W8, [X9]      ; Store halfword`}
              />
              <CodeExample
                title="Vector Size Operations"
                code={`VLDR Q0, [X0]       ; Load 128-bit vector
VST1 {V0.16B}, [X1] ; Store 16 bytes
VLDR D1, [X2]       ; Load 64-bit vector
VSTP Q2, Q3, [X3]   ; Store 2x128-bit vectors`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}