import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const atomicLoadInstructions = [
  { instruction: 'LDATOM64', syntax: 'LDATOM64 Rd1, Rd2, [Rn, #offset]', description: 'Load 64 bytes atomically into registers' },
  { instruction: 'LDATOM64B', syntax: 'LDATOM64B Rd1, Rd2, [Rn]', description: 'Load 64 bytes with memory barrier' },
  { instruction: 'LDATOM64A', syntax: 'LDATOM64A Rd1, Rd2, [Rn]', description: 'Load 64 bytes with acquire semantics' },
  { instruction: 'LDATOM64AL', syntax: 'LDATOM64AL Rd1, Rd2, [Rn]', description: 'Load 64 bytes with acquire and memory barrier' }
];

const atomicStoreInstructions = [
  { instruction: 'STATOM64', syntax: 'STATOM64 Rd1, Rd2, [Rn, #offset]', description: 'Store 64 bytes atomically from registers' },
  { instruction: 'STATOM64B', syntax: 'STATOM64B Rd1, Rd2, [Rn]', description: 'Store 64 bytes with memory barrier' },
  { instruction: 'STATOM64R', syntax: 'STATOM64R Rd1, Rd2, [Rn]', description: 'Store 64 bytes with release semantics' },
  { instruction: 'STATOM64RL', syntax: 'STATOM64RL Rd1, Rd2, [Rn]', description: 'Store 64 bytes with release and memory barrier' }
];

const atomicSyncInstructions = [
  { instruction: 'LDSTEXCL64', syntax: 'LDSTEXCL64 Rd1, Rd2, [Rn]', description: 'Load-store exclusive for 64 bytes' },
  { instruction: 'CASATOM64', syntax: 'CASATOM64 Rd1, Rd2, [Rn]', description: 'Compare and swap 64 bytes atomically' },
  { instruction: 'SWPATOM64', syntax: 'SWPATOM64 Rd1, Rd2, [Rn]', description: 'Swap 64 bytes atomically' },
  { instruction: 'LDADDATOM64', syntax: 'LDADDATOM64 Rd1, Rd2, [Rn]', description: 'Atomic add with 64-byte load' }
];

const features = [
  {
    title: 'Atomic Operations',
    description: 'Guaranteed atomic memory access',
    icon: Shield,
    points: [
      'Indivisible 64-byte operations',
      'Hardware-enforced atomicity',
      'Multi-core synchronization'
    ]
  },
  {
    title: 'Memory Ordering',
    description: 'Controlled memory access ordering',
    icon: Database,
    points: [
      'Acquire/Release semantics',
      'Memory barrier support',
      'Cache coherency maintenance'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized implementation',
    icon: Zap,
    points: [
      'Hardware acceleration',
      'Cache line optimization',
      'Minimal overhead'
    ]
  },
  {
    title: 'Synchronization Support',
    description: 'Advanced synchronization features',
    icon: Cpu,
    points: [
      'Lock-free algorithms',
      'Data structure atomicity',
      'Thread synchronization'
    ]
  }
];

export function LoadsStoresAtomic() {
  return (
    <div className="py-16 bg-white" id="loads-stores-atomic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            64-Byte Atomic Load and Store
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Atomic 64-byte memory operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Atomic Load Operations</h3>
            <InstructionTable
              title="Atomic Load Instructions"
              instructions={atomicLoadInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Atomic Store Operations</h3>
            <InstructionTable
              title="Atomic Store Instructions"
              instructions={atomicStoreInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Atomic Synchronization</h3>
            <InstructionTable
              title="Atomic Synchronization Instructions"
              instructions={atomicSyncInstructions}
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
                title="Basic Atomic Operations"
                code={`// Load 64 bytes atomically
LDATOM64 X0, X1, [X2]    // Load into X0, X1
STATOM64 X0, X1, [X2]    // Store from X0, X1

// With memory barriers
LDATOM64B X0, X1, [X2]   // Load with barrier
STATOM64B X0, X1, [X2]   // Store with barrier`}
              />
              <CodeExample
                title="Synchronization Example"
                code={`// Atomic compare and swap
LDATOM64 X0, X1, [X2]    // Load current value
CMP X0, X3               // Compare with expected
BNE retry               // Retry if not equal
STATOM64 X4, X5, [X2]    // Store new value

// Memory barrier
DMB SY                  // Full system barrier`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}