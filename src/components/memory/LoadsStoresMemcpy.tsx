import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const wideLoadStoreInstructions = [
  { instruction: 'LDWIDE', syntax: 'LDWIDE Rd1, Rd2, [Rn, #offset]', description: 'Load 64 bytes from memory into registers' },
  { instruction: 'STWIDE', syntax: 'STWIDE Rd1, Rd2, [Rn, #offset]', description: 'Store 64 bytes from registers to memory' },
  { instruction: 'LDVEC', syntax: 'LDVEC Vd, [Rn]', description: 'Load vector register from memory' },
  { instruction: 'STVEC', syntax: 'STVEC Vd, [Rn]', description: 'Store vector register to memory' }
];

const prefetchInstructions = [
  { instruction: 'PREFETCH', syntax: 'PREFETCH [Rn, #offset]', description: 'Prefetch memory block into cache' },
  { instruction: 'PRFM', syntax: 'PRFM type, [Rn, #offset]', description: 'Prefetch memory with type hint' },
  { instruction: 'PLDW', syntax: 'PLDW [Rn]', description: 'Preload data for writing' },
  { instruction: 'PLDI', syntax: 'PLDI [Rn]', description: 'Preload data for instruction fetch' }
];

const atomicInstructions = [
  { instruction: 'LDATOM64', syntax: 'LDATOM64 Rd1, Rd2, [Rn]', description: 'Atomic 64-byte load' },
  { instruction: 'STATOM64', syntax: 'STATOM64 Rd1, Rd2, [Rn]', description: 'Atomic 64-byte store' },
  { instruction: 'LDPQ', syntax: 'LDPQ Rd1, Rd2, [Rn]', description: 'Load pair of quadwords' },
  { instruction: 'STPQ', syntax: 'STPQ Rd1, Rd2, [Rn]', description: 'Store pair of quadwords' }
];

const features = [
  {
    title: 'Wide Memory Transfer',
    description: 'Efficient bulk data movement',
    icon: Database,
    points: [
      '64-byte wide transfers',
      'SIMD vector operations',
      'Optimized memory bandwidth'
    ]
  },
  {
    title: 'Memory Prefetching',
    description: 'Advanced cache optimization',
    icon: Zap,
    points: [
      'Hardware prefetching',
      'Software prefetch hints',
      'Cache line management'
    ]
  },
  {
    title: 'Atomic Operations',
    description: 'Thread-safe memory transfer',
    icon: Shield,
    points: [
      'Atomic wide transfers',
      'Concurrent access protection',
      'Data consistency guarantee'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-throughput implementation',
    icon: Cpu,
    points: [
      'Pipelined execution',
      'Cache-aware transfers',
      'DMA-style operations'
    ]
  }
];

export function LoadsStoresMemcpy() {
  return (
    <div className="py-16 bg-white" id="loads-stores-memcpy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Optimizing Memory Copy Operations
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            High-performance memcpy-style operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Wide Load/Store Operations</h3>
            <InstructionTable
              title="Wide Memory Transfer Instructions"
              instructions={wideLoadStoreInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Memory Prefetch</h3>
            <InstructionTable
              title="Prefetch Instructions"
              instructions={prefetchInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Atomic Operations</h3>
            <InstructionTable
              title="Atomic Transfer Instructions"
              instructions={atomicInstructions}
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
                title="Basic Memory Copy"
                code={`// Prefetch source and destination
PREFETCH [X1]        // Prefetch source
PREFETCH [X2]        // Prefetch destination

// Copy 64-byte blocks
LDWIDE X3, X4, [X1], #64  // Load 64 bytes
STWIDE X3, X4, [X2], #64  // Store 64 bytes

// Vector copy for remaining data
LDVEC V0.16B, [X1]        // Load 16 bytes
STVEC V0.16B, [X2]        // Store 16 bytes`}
              />
              <CodeExample
                title="Optimized Copy with Prefetch"
                code={`// Pipeline multiple transfers
PREFETCH [X1, #128]   // Prefetch next block
LDWIDE X3, X4, [X1]   // Load current block
STWIDE X3, X4, [X2]   // Store current block
ADD X1, X1, #64       // Advance source ptr
ADD X2, X2, #64       // Advance dest ptr

// Atomic wide transfer
LDATOM64 X5, X6, [X1] // Atomic load
STATOM64 X5, X6, [X2] // Atomic store`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}