import React from 'react';
import { Database, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const loadPairInstructions = [
  { instruction: 'LDP', syntax: 'LDP Rt1, Rt2, [Xn]', description: 'Load pair of registers from memory' },
  { instruction: 'LDP', syntax: 'LDP Rt1, Rt2, [Xn, #imm]', description: 'Load pair with immediate offset' },
  { instruction: 'LDP', syntax: 'LDP Rt1, Rt2, [Xn, #imm]!', description: 'Load pair with pre-indexing' },
  { instruction: 'LDP', syntax: 'LDP Rt1, Rt2, [Xn], #imm', description: 'Load pair with post-indexing' }
];

const storePairInstructions = [
  { instruction: 'STP', syntax: 'STP Rt1, Rt2, [Xn]', description: 'Store pair of registers to memory' },
  { instruction: 'STP', syntax: 'STP Rt1, Rt2, [Xn, #imm]', description: 'Store pair with immediate offset' },
  { instruction: 'STP', syntax: 'STP Rt1, Rt2, [Xn, #imm]!', description: 'Store pair with pre-indexing' },
  { instruction: 'STP', syntax: 'STP Rt1, Rt2, [Xn], #imm', description: 'Store pair with post-indexing' }
];

const features = [
  {
    title: 'Efficient Data Transfer',
    description: 'Optimized pair operations',
    icon: Database,
    points: [
      'Single instruction for two registers',
      'Reduced memory access overhead',
      'Improved memory bandwidth utilization'
    ]
  },
  {
    title: 'Stack Operations',
    description: 'Enhanced stack handling',
    icon: Cpu,
    points: [
      'Efficient push/pop operations',
      'Function prologue/epilogue support',
      'Automatic stack management'
    ]
  },
  {
    title: 'Memory Alignment',
    description: 'Optimized memory access',
    icon: Shield,
    points: [
      '8-byte alignment support',
      'Atomic pair operations',
      'Exception prevention'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-throughput operations',
    icon: Zap,
    points: [
      'Single-cycle execution',
      'Parallel memory access',
      'Reduced instruction count'
    ]
  }
];

export function LoadsStoresPair() {
  return (
    <div className="py-16 bg-white" id="loads-stores-pair">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Load Pair and Store Pair
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Efficient paired register memory operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Load Pair Operations</h3>
            <InstructionTable
              title="Load Pair Instructions"
              instructions={loadPairInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Store Pair Operations</h3>
            <InstructionTable
              title="Store Pair Instructions"
              instructions={storePairInstructions}
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
                title="Basic Pair Operations"
                code={`LDP X0, X1, [X2]     ; Load pair from memory
STP X3, X4, [X5]     ; Store pair to memory
LDP X6, X7, [SP, #16] ; Load pair with offset
STP X8, X9, [SP, #-16]! ; Push pair to stack`}
              />
              <CodeExample
                title="Stack Frame Operations"
                code={`; Function prologue
STP X29, X30, [SP, #-16]! ; Save frame pointer and link register
MOV X29, SP              ; Set up frame pointer

; Function epilogue
LDP X29, X30, [SP], #16  ; Restore FP and LR
RET                      ; Return from function`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}