import React from 'react';
import { Flag, GitBranch, Shield, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const flagSettingInstructions = [
  { instruction: 'CMP', syntax: 'CMP Rn, Rm', description: 'Compare and set flags based on subtraction' },
  { instruction: 'CMN', syntax: 'CMN Rn, Rm', description: 'Compare negative and set flags based on addition' },
  { instruction: 'TST', syntax: 'TST Rn, Rm', description: 'Test bits using AND and set flags' },
  { instruction: 'TEQ', syntax: 'TEQ Rn, Rm', description: 'Test equivalence using XOR and set flags' }
];

const arithmeticFlagInstructions = [
  { instruction: 'ADDS', syntax: 'ADDS Rd, Rn, Rm', description: 'Add and set flags' },
  { instruction: 'SUBS', syntax: 'SUBS Rd, Rn, Rm', description: 'Subtract and set flags' },
  { instruction: 'NEGS', syntax: 'NEGS Rd, Rn', description: 'Negate and set flags' },
  { instruction: 'ANDS', syntax: 'ANDS Rd, Rn, Rm', description: 'Bitwise AND and set flags' }
];

const conditionFlags = [
  { instruction: 'N', syntax: 'Negative', description: 'Set if result is negative (bit 31/63 = 1)' },
  { instruction: 'Z', syntax: 'Zero', description: 'Set if result is zero' },
  { instruction: 'C', syntax: 'Carry', description: 'Set if unsigned overflow occurs' },
  { instruction: 'V', syntax: 'Overflow', description: 'Set if signed overflow occurs' }
];

const features = [
  {
    title: 'Flag Generation',
    description: 'Comprehensive status flags',
    icon: Flag,
    points: [
      'Arithmetic operation flags',
      'Comparison result flags',
      'Logical operation flags'
    ]
  },
  {
    title: 'Conditional Execution',
    description: 'Flag-based execution control',
    icon: GitBranch,
    points: [
      'Multiple condition codes',
      'Predicated execution',
      'Branch prediction support'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized flag handling',
    icon: Zap,
    points: [
      'Fast flag generation',
      'Efficient condition testing',
      'Low-latency updates'
    ]
  },
  {
    title: 'Security Features',
    description: 'Protected flag operations',
    icon: Shield,
    points: [
      'Privilege level checking',
      'Secure state transitions',
      'Flag access control'
    ]
  }
];

export function ConditionCodes() {
  return (
    <div className="py-16 bg-white" id="condition-codes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Generating Condition Codes
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Status flag generation and condition code handling in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Flag Setting Instructions</h3>
            <InstructionTable
              title="Flag Generation Instructions"
              instructions={flagSettingInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Arithmetic with Flags</h3>
            <InstructionTable
              title="Arithmetic Flag Instructions"
              instructions={arithmeticFlagInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Condition Flags</h3>
            <InstructionTable
              title="Status Flags"
              instructions={conditionFlags}
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
                title="Arithmetic Flag Generation"
                code={`// Addition with flags
ADDS X0, X1, X2     ; Add and set flags
B.CS overflow       ; Branch if carry set
B.MI negative      ; Branch if negative
B.EQ zero          ; Branch if zero

// Subtraction with flags
SUBS X3, X4, X5     ; Subtract and set flags
B.VS overflow       ; Branch if overflow
B.PL positive      ; Branch if positive`}
              />
              <CodeExample
                title="Comparison and Testing"
                code={`// Compare operations
CMP X0, #10         ; Compare with immediate
B.GT greater        ; Branch if greater than
B.LT less          ; Branch if less than

// Bit testing
TST X1, #0x1        ; Test bit 0
B.NE odd           ; Branch if odd
B.EQ even          ; Branch if even`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}