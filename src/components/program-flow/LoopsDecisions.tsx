import React from 'react';
import { GitBranch, GitMerge, Shield, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const comparisonInstructions = [
  { instruction: 'CMP', syntax: 'CMP Rn, Rm', description: 'Compare two registers' },
  { instruction: 'CMN', syntax: 'CMN Rn, Rm', description: 'Compare with negative' },
  { instruction: 'TST', syntax: 'TST Rn, Rm', description: 'Test bits using AND' },
  { instruction: 'CCMP', syntax: 'CCMP Rn, Rm, #imm, cond', description: 'Conditional compare' }
];

const conditionalBranches = [
  { instruction: 'BEQ', syntax: 'BEQ <label>', description: 'Branch if equal (Z=1)' },
  { instruction: 'BNE', syntax: 'BNE <label>', description: 'Branch if not equal (Z=0)' },
  { instruction: 'BGT', syntax: 'BGT <label>', description: 'Branch if greater than' },
  { instruction: 'BLT', syntax: 'BLT <label>', description: 'Branch if less than' },
  { instruction: 'BGE', syntax: 'BGE <label>', description: 'Branch if greater or equal' }
];

const loopInstructions = [
  { instruction: 'CBZ', syntax: 'CBZ Rn, <label>', description: 'Compare and branch if zero' },
  { instruction: 'CBNZ', syntax: 'CBNZ Rn, <label>', description: 'Compare and branch if not zero' },
  { instruction: 'TBZ', syntax: 'TBZ Rn, #bit, <label>', description: 'Test bit and branch if zero' },
  { instruction: 'TBNZ', syntax: 'TBNZ Rn, #bit, <label>', description: 'Test bit and branch if not zero' }
];

const features = [
  {
    title: 'Conditional Execution',
    description: 'Advanced decision making',
    icon: GitBranch,
    points: [
      'Multiple comparison operations',
      'Flexible condition codes',
      'Optimized branch prediction'
    ]
  },
  {
    title: 'Loop Structures',
    description: 'Efficient iteration support',
    icon: GitMerge,
    points: [
      'Count-controlled loops',
      'Conditional loops',
      'Zero-overhead loop hardware'
    ]
  },
  {
    title: 'Branch Optimization',
    description: 'Performance features',
    icon: Zap,
    points: [
      'Static branch prediction',
      'Dynamic branch prediction',
      'Branch target caching'
    ]
  },
  {
    title: 'Decision Support',
    description: 'Comprehensive control flow',
    icon: Shield,
    points: [
      'Multiple comparison types',
      'Bit testing operations',
      'Conditional execution'
    ]
  }
];

export function LoopsDecisions() {
  return (
    <div className="py-16 bg-white" id="loops-decisions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loops and Decisions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced control flow structures in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison Operations</h3>
            <InstructionTable
              title="Comparison Instructions"
              instructions={comparisonInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Conditional Branches</h3>
            <InstructionTable
              title="Conditional Branch Instructions"
              instructions={conditionalBranches}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Loop Instructions</h3>
            <InstructionTable
              title="Loop Control Instructions"
              instructions={loopInstructions}
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
                title="Count-Controlled Loop"
                code={`// For loop example
MOV X0, #0          ; Initialize counter
loop_start:
    CMP X0, #10     ; Compare with limit
    BGE loop_end    ; Exit if counter >= 10
    
    // Loop body
    ADD X0, X0, #1  ; Increment counter
    B loop_start    ; Continue loop
loop_end:`}
              />
              <CodeExample
                title="Conditional Loop"
                code={`// While loop example
while_start:
    LDR X0, [X1]    ; Load value
    CBZ X0, while_end ; Exit if zero
    
    // Loop body
    SUB X0, X0, #1   ; Decrement value
    STR X0, [X1]     ; Store back
    B while_start    ; Continue loop
while_end:`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}