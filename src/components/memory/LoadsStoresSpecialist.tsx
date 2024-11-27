import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const memoryBarrierInstructions = [
  { instruction: 'LDARB', syntax: 'LDARB Rd, [Rn, #offset]', description: 'Load acquire register byte with memory barrier' },
  { instruction: 'STARB', syntax: 'STARB Rd, [Rn, #offset]', description: 'Store acquire register byte with memory barrier' },
  { instruction: 'DMB', syntax: 'DMB SY', description: 'Data memory barrier, system-wide synchronization' },
  { instruction: 'DSB', syntax: 'DSB SY', description: 'Data synchronization barrier' }
];

const multipleRegisterInstructions = [
  { instruction: 'LDMD', syntax: 'LDMD Rd1, Rd2, Rd3, [Rn, #offset]', description: 'Load multiple registers from memory' },
  { instruction: 'STMD', syntax: 'STMD Rd1, Rd2, Rd3, [Rn, #offset]', description: 'Store multiple registers to memory' },
  { instruction: 'LDPQ', syntax: 'LDPQ Rd1, Rd2, [Rn]', description: 'Load pair of quadwords' },
  { instruction: 'STPQ', syntax: 'STPQ Rd1, Rd2, [Rn]', description: 'Store pair of quadwords' }
];

const virtualizationInstructions = [
  { instruction: 'LDRV', syntax: 'LDRV Rd, [Rn, #offset]', description: 'Load from virtual address' },
  { instruction: 'STRV', syntax: 'STRV Rd, [Rn, #offset]', description: 'Store to virtual address' },
  { instruction: 'TLBI', syntax: 'TLBI ALLE2', description: 'TLB invalidate all entries at EL2' },
  { instruction: 'AT', syntax: 'AT S1E2R, Xn', description: 'Address translation stage 1 EL2 read' }
];

const features = [
  {
    title: 'Memory Barriers',
    description: 'Advanced memory ordering control',
    icon: Shield,
    points: [
      'Memory access synchronization',
      'Multi-core consistency',
      'Hardware-level ordering'
    ]
  },
  {
    title: 'Multiple Register Access',
    description: 'Efficient bulk data transfer',
    icon: Database,
    points: [
      'Multiple register operations',
      'Optimized memory bandwidth',
      'Atomic operations support'
    ]
  },
  {
    title: 'Virtualization Support',
    description: 'Hardware virtualization features',
    icon: Cpu,
    points: [
      'Virtual memory operations',
      'Address translation support',
      'Hypervisor optimizations'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-performance implementation',
    icon: Zap,
    points: [
      'Hardware acceleration',
      'Cache coherency support',
      'Low-latency operations'
    ]
  }
];

export function LoadsStoresSpecialist() {
  return (
    <div className="py-16 bg-white" id="loads-stores-specialist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Specialist Instructions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced memory operations and specialized instructions in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Memory Barrier Instructions</h3>
            <InstructionTable
              title="Memory Barrier Operations"
              instructions={memoryBarrierInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Multiple Register Instructions</h3>
            <InstructionTable
              title="Multiple Register Operations"
              instructions={multipleRegisterInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Virtualization Instructions</h3>
            <InstructionTable
              title="Virtualization Support"
              instructions={virtualizationInstructions}
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
                title="Memory Barriers"
                code={`LDARB W0, [X1]     ; Load acquire byte
STARB W2, [X3]     ; Store acquire byte
DMB SY            ; Data memory barrier
DSB SY            ; Data sync barrier`}
              />
              <CodeExample
                title="Multiple Register Operations"
                code={`LDMD X0-X3, [SP]    ; Load multiple registers
STMD X0-X3, [SP]    ; Store multiple registers
LDPQ Q0, Q1, [X0]   ; Load quad pair
STPQ Q2, Q3, [X1]   ; Store quad pair`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}