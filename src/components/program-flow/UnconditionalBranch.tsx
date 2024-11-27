import React from 'react';
import { GitBranch, GitMerge, Shield, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const branchInstructions = [
  { instruction: 'B', syntax: 'B <label>', description: 'Unconditional branch to label' },
  { instruction: 'BL', syntax: 'BL <label>', description: 'Branch with link (saves return address)' },
  { instruction: 'BX', syntax: 'BX <reg>', description: 'Branch to address in register' },
  { instruction: 'BR', syntax: 'BR <reg>', description: 'Branch to register (without link)' }
];

const indexedBranchInstructions = [
  { instruction: 'B', syntax: 'B [Xn, #offset]', description: 'Branch with base register and offset' },
  { instruction: 'BL', syntax: 'BL [Xn, #offset]', description: 'Branch with link using base and offset' },
  { instruction: 'BLR', syntax: 'BLR Xn', description: 'Branch with link to register' },
  { instruction: 'RET', syntax: 'RET {Xn}', description: 'Return using specified or link register' }
];

const features = [
  {
    title: 'Direct Branching',
    description: 'Efficient control transfer',
    icon: GitBranch,
    points: [
      'PC-relative addressing',
      'Immediate offset support',
      'Optimized branch prediction'
    ]
  },
  {
    title: 'Function Support',
    description: 'Subroutine operations',
    icon: GitMerge,
    points: [
      'Return address linking',
      'Register-based returns',
      'Stack frame handling'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-performance branching',
    icon: Zap,
    points: [
      'Branch target prediction',
      'Return stack buffer',
      'Branch history table'
    ]
  },
  {
    title: 'Security Features',
    description: 'Secure branching operations',
    icon: Shield,
    points: [
      'Privilege level checking',
      'Branch target authentication',
      'Control flow protection'
    ]
  }
];

export function UnconditionalBranch() {
  return (
    <div className="py-16 bg-white" id="unconditional-branch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Unconditional Branch Instructions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Direct control transfer operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Branch Instructions</h3>
            <InstructionTable
              title="Basic Branch Operations"
              instructions={branchInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Indexed Branch Instructions</h3>
            <InstructionTable
              title="Indexed Branch Operations"
              instructions={indexedBranchInstructions}
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
                title="Basic Branching"
                code={`// Simple branch examples
start:
    MOV X0, #1          ; Set X0 to 1
    B target            ; Branch to target
    
    // This code is skipped
    MOV X0, #2          ; Never executed
    
target:
    ADD X0, X0, #1      ; Add 1 to X0`}
              />
              <CodeExample
                title="Function Calls"
                code={`// Function call example
main:
    BL my_function     ; Call function
    B end              ; Branch to end

my_function:
    // Function body
    MOV X0, #42        ; Set return value
    RET                ; Return to caller

end:
    // Program end`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}