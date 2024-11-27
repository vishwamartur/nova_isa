import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const acquireInstructions = [
  { instruction: 'LDACQ', syntax: 'LDACQ Rd, [Rn, #offset]', description: 'Load with acquire semantics' },
  { instruction: 'LDACQB', syntax: 'LDACQB Rd, [Rn]', description: 'Load byte with acquire semantics' },
  { instruction: 'LDACQH', syntax: 'LDACQH Rd, [Rn]', description: 'Load halfword with acquire semantics' },
  { instruction: 'LDACQW', syntax: 'LDACQW Rd, [Rn]', description: 'Load word with acquire semantics' }
];

const releaseInstructions = [
  { instruction: 'STREL', syntax: 'STREL Rd, [Rn, #offset]', description: 'Store with release semantics' },
  { instruction: 'STRELB', syntax: 'STRELB Rd, [Rn]', description: 'Store byte with release semantics' },
  { instruction: 'STRELH', syntax: 'STRELH Rd, [Rn]', description: 'Store halfword with release semantics' },
  { instruction: 'STRELW', syntax: 'STRELW Rd, [Rn]', description: 'Store word with release semantics' }
];

const synchronizationInstructions = [
  { instruction: 'LDACQREL', syntax: 'LDACQREL Rd, [Rn]', description: 'Load with acquire-release semantics' },
  { instruction: 'STACQREL', syntax: 'STACQREL Rd, [Rn]', description: 'Store with acquire-release semantics' },
  { instruction: 'DMB', syntax: 'DMB SY', description: 'Data memory barrier for full system synchronization' },
  { instruction: 'DSB', syntax: 'DSB SY', description: 'Data synchronization barrier' }
];

const features = [
  {
    title: 'Memory Ordering',
    description: 'Precise control over memory access ordering',
    icon: Shield,
    points: [
      'Sequential consistency guarantee',
      'Multi-core synchronization',
      'Hardware-enforced ordering'
    ]
  },
  {
    title: 'Synchronization Support',
    description: 'Advanced synchronization primitives',
    icon: Database,
    points: [
      'Lock implementation support',
      'Message passing primitives',
      'Atomic operations'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized implementation',
    icon: Zap,
    points: [
      'Minimal performance overhead',
      'Hardware acceleration',
      'Efficient barrier handling'
    ]
  },
  {
    title: 'Concurrency Control',
    description: 'Thread synchronization features',
    icon: Cpu,
    points: [
      'Thread-safe operations',
      'Race condition prevention',
      'Consistent memory model'
    ]
  }
];

export function LoadsStoresAcquireRelease() {
  return (
    <div className="py-16 bg-white" id="loads-stores-acquire-release">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Load-Acquire and Store-Release
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Memory ordering operations for concurrent programming in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Load-Acquire Operations</h3>
            <InstructionTable
              title="Load-Acquire Instructions"
              instructions={acquireInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Store-Release Operations</h3>
            <InstructionTable
              title="Store-Release Instructions"
              instructions={releaseInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Synchronization Operations</h3>
            <InstructionTable
              title="Synchronization Instructions"
              instructions={synchronizationInstructions}
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
                title="Lock Implementation"
                code={`// Thread 1 - Acquire Lock
LDACQ X0, [lock]     // Load with acquire semantics
CMP X0, #0           // Check if lock is free
BNE lock_busy        // Branch if lock is taken
MOV X1, #1           // Prepare lock value
STREL X1, [lock]     // Store with release semantics`}
              />
              <CodeExample
                title="Message Passing"
                code={`// Producer
STR X0, [data]       // Store data
DMB ST               // Data memory barrier
STREL X1, [flag]     // Signal data ready

// Consumer
LDACQ X1, [flag]     // Load flag with acquire
CMP X1, #1           // Check if data ready
BNE wait             // Wait if not ready
LDR X0, [data]       // Safe to read data`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}