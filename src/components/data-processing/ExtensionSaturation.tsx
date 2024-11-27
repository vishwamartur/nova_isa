import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from './InstructionTable';
import { FeatureCard } from './FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const extensionInstructions = [
  { instruction: 'SXTB', syntax: 'SXTB Rd, Rn', description: 'Sign extend byte to 32/64 bits' },
  { instruction: 'SXTH', syntax: 'SXTH Rd, Rn', description: 'Sign extend halfword to 32/64 bits' },
  { instruction: 'SXTW', syntax: 'SXTW Rd, Rn', description: 'Sign extend word to 64 bits' },
  { instruction: 'UXTB', syntax: 'UXTB Rd, Rn', description: 'Zero extend byte to 32/64 bits' },
  { instruction: 'UXTH', syntax: 'UXTH Rd, Rn', description: 'Zero extend halfword to 32/64 bits' }
];

const saturationInstructions = [
  { instruction: 'SADD', syntax: 'SADD Rd, Rn, Rm', description: 'Signed addition with saturation' },
  { instruction: 'SSUB', syntax: 'SSUB Rd, Rn, Rm', description: 'Signed subtraction with saturation' },
  { instruction: 'UADD', syntax: 'UADD Rd, Rn, Rm', description: 'Unsigned addition with saturation' },
  { instruction: 'USUB', syntax: 'USUB Rd, Rn, Rm', description: 'Unsigned subtraction with saturation' },
  { instruction: 'SMUL', syntax: 'SMUL Rd, Rn, Rm', description: 'Signed multiplication with saturation' }
];

const features = [
  {
    title: 'Data Extension',
    description: 'Flexible data width conversion',
    icon: Binary,
    points: [
      'Sign extension for signed integers',
      'Zero extension for unsigned values',
      'Support for multiple data widths'
    ]
  },
  {
    title: 'Saturation Arithmetic',
    description: 'Overflow protection mechanisms',
    icon: Shield,
    points: [
      'Signed and unsigned saturation',
      'Multimedia operation support',
      'DSP-optimized instructions'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-performance implementation',
    icon: Zap,
    points: [
      'Single-cycle execution',
      'SIMD support for vector operations',
      'Parallel processing capabilities'
    ]
  },
  {
    title: 'Application Support',
    description: 'Optimized for common use cases',
    icon: Cpu,
    points: [
      'Digital signal processing',
      'Image and video processing',
      'Audio processing operations'
    ]
  }
];

export function ExtensionSaturation() {
  return (
    <div className="py-16 bg-white" id="extension-saturation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Extension and Saturation
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced data width conversion and overflow protection
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Extension Operations</h3>
            <InstructionTable
              title="Data Extension Instructions"
              instructions={extensionInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Saturation Operations</h3>
            <InstructionTable
              title="Saturation Instructions"
              instructions={saturationInstructions}
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
                title="Extension Examples"
                code={`SXTB W0, W1        ; Sign extend byte
UXTB W2, W3        ; Zero extend byte
SXTH X4, W5        ; Sign extend halfword to 64-bit
UXTH W6, W7        ; Zero extend halfword
SXTW X8, W9        ; Sign extend word to 64-bit`}
              />
              <CodeExample
                title="Saturation Examples"
                code={`SADD X0, X1, X2    ; Signed saturating add
SSUB W3, W4, W5    ; Signed saturating subtract
UADD X6, X7, X8    ; Unsigned saturating add
SMUL W9, W10, W11  ; Signed saturating multiply
USUB X12, X13, X14 ; Unsigned saturating subtract`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}