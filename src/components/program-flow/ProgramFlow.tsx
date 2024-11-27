import React from 'react';
import { GitBranch, GitMerge, Shield, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const branchInstructions = [
  { instruction: 'B', syntax: 'B <label>', description: 'Unconditional branch to label' },
  { instruction: 'BEQ', syntax: 'BEQ <label>', description: 'Branch if equal (Z flag set)' },
  { instruction: 'BNE', syntax: 'BNE <label>', description: 'Branch if not equal (Z flag clear)' },
  { instruction: 'BGT', syntax: 'BGT <label>', description: 'Branch if greater than' },
  { instruction: 'BLT', syntax: 'BLT <label>', description: 'Branch if less than' }
];

const subroutineInstructions = [
  { instruction: 'BL', syntax: 'BL <label>', description: 'Branch with link (function call)' },
  { instruction: 'BLR', syntax: 'BLR Xn', description: 'Branch with link to register' },
  { instruction: 'RET', syntax: 'RET', description: 'Return from subroutine' },
  { instruction: 'CALL', syntax: 'CALL <label>', description: 'Call subroutine (pseudo-instruction)' }
];

const exceptionInstructions = [
  { instruction: 'SVC', syntax: 'SVC #imm', description: 'Supervisor call (system call)' },
  { instruction: 'HVC', syntax: 'HVC #imm', description: 'Hypervisor call' },
  { instruction: 'SMC', syntax: 'SMC #imm', description: 'Secure monitor call' },
  { instruction: 'ERET', syntax: 'ERET', description: 'Exception return' }
];

const features = [
  {
    title: 'Conditional Execution',
    description: 'Advanced branching capabilities',
    icon: GitBranch,
    points: [
      'Multiple condition codes',
      'Compare and branch instructions',
      'Efficient conditional execution'
    ]
  },
  {
    title: 'Subroutine Support',
    description: 'Function call optimization',
    icon: GitMerge,
    points: [
      'Link register for returns',
      'Stack frame management',
      'Efficient parameter passing'
    ]
  },
  {
    title: 'Exception Handling',
    description: 'Robust exception management',
    icon: Shield,
    points: [
      'Multiple exception levels',
      'Secure state transitions',
      'Interrupt handling support'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized control flow',
    icon: Zap,
    points: [
      'Branch prediction',
      'Return stack buffer',
      'Speculative execution'
    ]
  }
];

export function ProgramFlow() {
  return (
    <div className="py-16 bg-white" id="program-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Program Flow Control
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced program flow and control transfer in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Branch Instructions</h3>
            <InstructionTable
              title="Branching Operations"
              instructions={branchInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Subroutine Instructions</h3>
            <InstructionTable
              title="Subroutine Operations"
              instructions={subroutineInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Exception Instructions</h3>
            <InstructionTable
              title="Exception Handling"
              instructions={exceptionInstructions}
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
                title="Conditional Branching"
                code={`// Compare and branch
CMP X0, X1          ; Compare registers
BEQ equal_label     ; Branch if equal
BNE not_equal      ; Branch if not equal
BGT greater_than   ; Branch if greater
BLT less_than      ; Branch if less`}
              />
              <CodeExample
                title="Function Calls"
                code={`// Function call example
BL my_function     ; Call function
MOV X0, #1         ; Set return value
RET               ; Return from function

// Exception handling
SVC #0            ; System call
ERET              ; Return from exception`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}