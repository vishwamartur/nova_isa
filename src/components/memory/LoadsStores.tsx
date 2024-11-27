import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const loadInstructions = [
  { instruction: 'LDUR', syntax: 'LDUR Rd, [Rn, #offset]', description: 'Load data from memory with offset' },
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn]', description: 'Load 32/64-bit word from memory' },
  { instruction: 'LDURB', syntax: 'LDURB Rd, [Rn, #offset]', description: 'Load byte from memory' },
  { instruction: 'LDURH', syntax: 'LDURH Rd, [Rn, #offset]', description: 'Load halfword from memory' },
  { instruction: 'LDRSW', syntax: 'LDRSW Rd, [Rn]', description: 'Load signed word and sign-extend' }
];

const storeInstructions = [
  { instruction: 'STUR', syntax: 'STUR Rd, [Rn, #offset]', description: 'Store data to memory with offset' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn]', description: 'Store 32/64-bit word to memory' },
  { instruction: 'STURB', syntax: 'STURB Rd, [Rn, #offset]', description: 'Store byte to memory' },
  { instruction: 'STURH', syntax: 'STURH Rd, [Rn, #offset]', description: 'Store halfword to memory' },
  { instruction: 'STP', syntax: 'STP Rt, Rt2, [Rn]', description: 'Store pair of registers' }
];

const vectorInstructions = [
  { instruction: 'VLDR', syntax: 'VLDR Vd, [Rn]', description: 'Load vector from memory' },
  { instruction: 'VLDRB', syntax: 'VLDRB Vd, [Rn]', description: 'Load vector of bytes' },
  { instruction: 'VLDRH', syntax: 'VLDRH Vd, [Rn]', description: 'Load vector of halfwords' },
  { instruction: 'VSTP', syntax: 'VSTP Vd, [Rn]', description: 'Store vector pair' },
  { instruction: 'VST', syntax: 'VST Vd, [Rn]', description: 'Store vector to memory' }
];

const features = [
  {
    title: 'Scalar Operations',
    description: 'Efficient single-value transfers',
    icon: Database,
    points: [
      'Multiple data widths support',
      'Signed/unsigned operations',
      'Flexible addressing modes'
    ]
  },
  {
    title: 'Vector Operations',
    description: 'High-throughput data movement',
    icon: Zap,
    points: [
      'SIMD load/store operations',
      'Multiple vector widths',
      'Efficient data streaming'
    ]
  },
  {
    title: 'Memory Protection',
    description: 'Secure memory access',
    icon: Shield,
    points: [
      'Access permission checking',
      'Memory alignment enforcement',
      'Exception handling'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized memory access',
    icon: Cpu,
    points: [
      'Hardware prefetching',
      'Cache line operations',
      'Non-temporal hints'
    ]
  }
];

export function LoadsStores() {
  return (
    <div className="py-16 bg-white" id="loads-stores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loads and Stores
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Memory access operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Load Operations</h3>
            <InstructionTable
              title="Load Instructions"
              instructions={loadInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Store Operations</h3>
            <InstructionTable
              title="Store Instructions"
              instructions={storeInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vector Load/Store</h3>
            <InstructionTable
              title="Vector Memory Instructions"
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
                title="Scalar Memory Access"
                code={`LDR X0, [X1]        ; Load from address in X1
STR X2, [X3, #8]    ; Store at address X3+8
LDURB W4, [X5, #1]  ; Load unsigned byte
STURH W6, [X7, #2]  ; Store halfword
STP X8, X9, [SP]    ; Store pair to stack`}
              />
              <CodeExample
                title="Vector Memory Access"
                code={`VLDR Q0, [X0]       ; Load 128-bit vector
VST1 {V0.4S}, [X1]  ; Store 4 single-precision
VLDR D1, [X2]       ; Load 64-bit vector
VSTP Q2, Q3, [X3]   ; Store vector pair`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}