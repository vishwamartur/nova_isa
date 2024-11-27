import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from './InstructionTable';
import { FeatureCard } from './FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const subRegisterInstructions = [
  { instruction: 'AND', syntax: 'AND Rd, Rn, Rm', description: 'Bitwise AND on 8-bit or 16-bit portions' },
  { instruction: 'ORR', syntax: 'ORR Rd, Rn, Rm', description: 'Bitwise OR on sub-registers' },
  { instruction: 'ADD', syntax: 'ADD Rd, Rn, Rm', description: 'Addition on smaller data within registers' },
  { instruction: 'SUB', syntax: 'SUB Rd, Rn, Rm', description: 'Subtraction on sub-register-sized data' },
  { instruction: 'LSL', syntax: 'LSL Rd, Rn, #imm', description: 'Logical shift left for sub-registers' }
];

const saturationInstructions = [
  { instruction: 'SADD', syntax: 'SADD Rd, Rn, Rm', description: 'Saturating signed addition on sub-registers' },
  { instruction: 'SSUB', syntax: 'SSUB Rd, Rn, Rm', description: 'Saturating signed subtraction on sub-registers' },
  { instruction: 'SXTB', syntax: 'SXTB Rd, Rn', description: 'Signed extend a byte to 32 bits' },
  { instruction: 'UXTB', syntax: 'UXTB Rd, Rn', description: 'Unsigned extend a byte to 32 bits' },
  { instruction: 'SXTH', syntax: 'SXTH Rd, Rn', description: 'Signed extend a halfword to 32 bits' }
];

const shiftInstructions = [
  { instruction: 'LSL', syntax: 'LSL Rd, Rn, #imm', description: 'Logical shift left on sub-registers' },
  { instruction: 'LSR', syntax: 'LSR Rd, Rn, #imm', description: 'Logical shift right on sub-registers' },
  { instruction: 'ROR', syntax: 'ROR Rd, Rn, #imm', description: 'Rotate right on sub-registers' },
  { instruction: 'ASR', syntax: 'ASR Rd, Rn, #imm', description: 'Arithmetic shift right on sub-registers' }
];

const features = [
  {
    title: 'Sub-register Operations',
    description: 'Efficient handling of smaller data types',
    icon: Binary,
    points: [
      '8-bit and 16-bit data processing',
      'Partial register access',
      'Efficient bit-level manipulation'
    ]
  },
  {
    title: 'Saturation Support',
    description: 'Overflow protection for sub-registers',
    icon: Shield,
    points: [
      'Automatic value clamping',
      'Signed and unsigned operations',
      'Multimedia processing support'
    ]
  },
  {
    title: 'Performance Features',
    description: 'Optimized execution paths',
    icon: Zap,
    points: [
      'Single-cycle operations',
      'Parallel processing support',
      'Efficient data packing/unpacking'
    ]
  },
  {
    title: 'Application Support',
    description: 'Specialized processing features',
    icon: Cpu,
    points: [
      'Multimedia acceleration',
      'Signal processing optimization',
      'Cryptographic operations'
    ]
  }
];

export function SubRegisterProcessing() {
  return (
    <div className="py-16 bg-white" id="sub-register-processing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sub-register-Sized Integer Data Processing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Efficient handling of 8-bit and 16-bit data within 64-bit registers
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Operations</h3>
            <InstructionTable
              title="Sub-register Operations"
              instructions={subRegisterInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Saturation and Extension</h3>
            <InstructionTable
              title="Saturation and Extension Instructions"
              instructions={saturationInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Shift Operations</h3>
            <InstructionTable
              title="Sub-register Shift Instructions"
              instructions={shiftInstructions}
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
                title="Basic Sub-register Operations"
                code={`AND W0, W1, #0xFF   ; 8-bit AND
ORR W2, W3, #0xFFFF ; 16-bit OR
ADD W4, W5, W6      ; Add lower 8 bits
LSL W7, W8, #8      ; Shift 8-bit portion`}
              />
              <CodeExample
                title="Saturation and Extension"
                code={`SADD W0, W1, W2     ; Saturating add
SXTB W3, W4        ; Sign extend byte
UXTB W5, W6        ; Zero extend byte
SXTH W7, W8        ; Sign extend halfword`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}