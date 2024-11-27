import React from 'react';
import { Database, Shield, Zap, Layers } from 'lucide-react';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';
import { MemoryTable } from './MemoryTable';
import { MemoryDiagram } from './MemoryDiagram';

const memoryFeatures = [
  {
    title: 'Virtual Memory',
    description: 'Advanced virtual memory system with multi-level translation',
    icon: Layers,
    points: [
      'Support for 48-bit virtual addresses',
      'Four-level translation tables',
      'Hardware-assisted address translation'
    ]
  },
  {
    title: 'Memory Protection',
    description: 'Comprehensive memory protection mechanisms',
    icon: Shield,
    points: [
      'Page-level access control',
      'Execute-never (XN) protection',
      'Secure/Non-secure memory isolation'
    ]
  },
  {
    title: 'Cache Architecture',
    description: 'Multi-level cache hierarchy',
    icon: Database,
    points: [
      'Separate L1 instruction and data caches',
      'Unified L2 cache',
      'Cache coherency protocols'
    ]
  },
  {
    title: 'Memory Performance',
    description: 'Advanced performance features',
    icon: Zap,
    points: [
      'Hardware prefetching',
      'Non-blocking caches',
      'Speculative memory access'
    ]
  }
];

const memoryInstructions = [
  { instruction: 'LDR', syntax: 'LDR Rd, [Rn, #offset]', description: 'Load register from memory' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn, #offset]', description: 'Store register to memory' },
  { instruction: 'LDXR', syntax: 'LDXR Rd, [Rn]', description: 'Load exclusive register' },
  { instruction: 'STXR', syntax: 'STXR Rd, Rt, [Rn]', description: 'Store exclusive register' },
  { instruction: 'PRFM', syntax: 'PRFM type, [Rn, #offset]', description: 'Prefetch memory' }
];

const memoryAttributes = [
  { attribute: 'Normal Memory', description: 'Cacheable memory regions for general use' },
  { attribute: 'Device Memory', description: 'Non-cacheable memory for device access' },
  { attribute: 'Strongly Ordered', description: 'Non-cacheable, ordered memory access' },
  { attribute: 'Normal Non-cacheable', description: 'Non-cached normal memory regions' }
];

export function MemoryManagement() {
  return (
    <div className="py-16 bg-white" id="memory-management">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Memory Management
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced memory management features in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {memoryFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Memory Instructions</h3>
            <MemoryTable
              title="Memory Access Instructions"
              instructions={memoryInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Memory Hierarchy</h3>
            <MemoryDiagram />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Memory Attributes</h3>
            <MemoryTable
              title="Memory Types and Attributes"
              instructions={memoryAttributes}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CodeExample
                title="Basic Memory Access"
                code={`LDR X0, [X1]        ; Load from address in X1
STR X2, [X3, #8]    ; Store at address X3+8
LDXR X4, [X5]       ; Load exclusive
STXR W6, X7, [X8]   ; Store exclusive
PRFM PLDL1KEEP, [X9]; Prefetch to L1 cache`}
              />
              <CodeExample
                title="Memory Barriers"
                code={`DMB SY              ; Data memory barrier
DSB SY              ; Data synchronization
ISB                 ; Instruction barrier
TLBI ALLE2         ; TLB invalidate all`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}