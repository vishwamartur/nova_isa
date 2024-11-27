import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from './InstructionTable';
import { FeatureCard } from './FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const intToFloatInstructions = [
  { instruction: 'FCVTZS', syntax: 'FCVTZS Fd, Rn', description: 'Converts signed integer to floating-point' },
  { instruction: 'FCVTSU', syntax: 'FCVTSU Fd, Rn', description: 'Converts unsigned integer to floating-point' },
  { instruction: 'FCVTL', syntax: 'FCVTL Rd, Fm', description: 'Converts to signed long integer' },
  { instruction: 'FCVTZU', syntax: 'FCVTZU Rd, Fm', description: 'Converts to unsigned integer' }
];

const signedUnsignedInstructions = [
  { instruction: 'UXTB', syntax: 'UXTB Rd, Rn', description: 'Converts signed 8-bit to unsigned 8-bit' },
  { instruction: 'UXTH', syntax: 'UXTH Rd, Rn', description: 'Converts signed 16-bit to unsigned 16-bit' },
  { instruction: 'SXTW', syntax: 'SXTW Rd, Rn', description: 'Converts signed 32-bit to signed 64-bit' },
  { instruction: 'ZXTW', syntax: 'ZXTW Rd, Rn', description: 'Converts signed 32-bit to unsigned 64-bit' }
];

const endianInstructions = [
  { instruction: 'REV', syntax: 'REV Rd, Rn', description: 'Reverses byte order in 32/64-bit register' },
  { instruction: 'REV16', syntax: 'REV16 Rd, Rn', description: 'Reverses byte order in halfwords' },
  { instruction: 'REVSH', syntax: 'REVSH Rd, Rn', description: 'Reverses bytes and sign-extends halfword' }
];

const features = [
  {
    title: 'Integer/Float Conversion',
    description: 'Efficient numeric format conversion',
    icon: Binary,
    points: [
      'Signed and unsigned integer support',
      'IEEE 754 floating-point compliance',
      'Multiple precision options'
    ]
  },
  {
    title: 'Data Type Conversion',
    description: 'Flexible data type handling',
    icon: Shield,
    points: [
      'Sign extension operations',
      'Zero extension support',
      'Byte order conversion'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-performance conversion',
    icon: Zap,
    points: [
      'Hardware-accelerated conversion',
      'Single-cycle operations',
      'SIMD support'
    ]
  },
  {
    title: 'Application Support',
    description: 'Specialized conversion features',
    icon: Cpu,
    points: [
      'Graphics processing support',
      'Network protocol handling',
      'Cross-platform compatibility'
    ]
  }
];

export function FormatConversion() {
  return (
    <div className="py-16 bg-white" id="format-conversion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Format Conversion
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced data format conversion operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Integer to Floating-Point</h3>
            <InstructionTable
              title="Integer/Float Conversion Instructions"
              instructions={intToFloatInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Signed/Unsigned Conversion</h3>
            <InstructionTable
              title="Sign Conversion Instructions"
              instructions={signedUnsignedInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Endian Conversion</h3>
            <InstructionTable
              title="Byte Order Conversion Instructions"
              instructions={endianInstructions}
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
                title="Integer/Float Conversion"
                code={`FCVTZS F0, X1      ; Convert signed int to float
FCVTZU X2, F3      ; Convert float to unsigned int
FCVTL X4, D5       ; Convert to long integer
SCVTF F6, X7       ; Convert signed int to float`}
              />
              <CodeExample
                title="Data Type Conversion"
                code={`SXTW X0, W1        ; Sign extend word to 64-bit
UXTB W2, W3        ; Zero extend byte
REV X4, X5         ; Reverse byte order
REV16 W6, W7       ; Reverse halfwords`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}