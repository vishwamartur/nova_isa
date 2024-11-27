import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const zeroExtensionInstructions = [
  { instruction: 'LDRB', syntax: 'LDRB Rd, [Rn]', description: 'Load byte with zero extension to 32-bit' },
  { instruction: 'LDRH', syntax: 'LDRH Rd, [Rn]', description: 'Load halfword with zero extension to 32-bit' },
  { instruction: 'LDURB', syntax: 'LDURB Rd, [Rn]', description: 'Load byte with zero extension to 64-bit' },
  { instruction: 'LDURH', syntax: 'LDURH Rd, [Rn]', description: 'Load halfword with zero extension to 64-bit' }
];

const signExtensionInstructions = [
  { instruction: 'LDRSB', syntax: 'LDRSB Rd, [Rn]', description: 'Load signed byte with sign extension to 32-bit' },
  { instruction: 'LDRSH', syntax: 'LDRSH Rd, [Rn]', description: 'Load signed halfword with sign extension to 32-bit' },
  { instruction: 'LDURSB', syntax: 'LDURSB Rd, [Rn]', description: 'Load signed byte with sign extension to 64-bit' },
  { instruction: 'LDURSH', syntax: 'LDURSH Rd, [Rn]', description: 'Load signed halfword with sign extension to 64-bit' },
  { instruction: 'LDRSW', syntax: 'LDRSW Rd, [Rn]', description: 'Load signed word with sign extension to 64-bit' }
];

const features = [
  {
    title: 'Zero Extension',
    description: 'Efficient unsigned data handling',
    icon: Binary,
    points: [
      'Zero-extended byte loads',
      'Zero-extended halfword loads',
      'Optimized for unsigned values'
    ]
  },
  {
    title: 'Sign Extension',
    description: 'Comprehensive signed value support',
    icon: Shield,
    points: [
      'Sign-extended byte loads',
      'Sign-extended halfword loads',
      'Sign-extended word loads'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-performance implementation',
    icon: Zap,
    points: [
      'Single-cycle extension',
      'Hardware-accelerated conversion',
      'Efficient register utilization'
    ]
  },
  {
    title: 'Application Support',
    description: 'Versatile data handling',
    icon: Cpu,
    points: [
      'Mixed-width arithmetic',
      'Efficient type conversion',
      'Flexible data processing'
    ]
  }
];

export function LoadsStoresExtension() {
  return (
    <div className="py-16 bg-white" id="loads-stores-extension">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Zero and Sign Extension
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced data extension operations in memory access
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Zero Extension Operations</h3>
            <InstructionTable
              title="Zero Extension Instructions"
              instructions={zeroExtensionInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sign Extension Operations</h3>
            <InstructionTable
              title="Sign Extension Instructions"
              instructions={signExtensionInstructions}
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
                title="Zero Extension Examples"
                code={`LDRB W0, [X1]      ; Load byte, zero extend to 32-bit
LDRH W2, [X3]      ; Load halfword, zero extend to 32-bit
LDURB X4, [X5]     ; Load byte, zero extend to 64-bit
LDURH X6, [X7]     ; Load halfword, zero extend to 64-bit`}
              />
              <CodeExample
                title="Sign Extension Examples"
                code={`LDRSB W0, [X1]     ; Load signed byte, extend to 32-bit
LDRSH W2, [X3]     ; Load signed halfword, extend to 32-bit
LDURSB X4, [X5]    ; Load signed byte, extend to 64-bit
LDRSW X6, [X7]     ; Load signed word, extend to 64-bit`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}