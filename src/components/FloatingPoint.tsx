import React from 'react';
import { Calculator, Cpu, Zap, Shield } from 'lucide-react';
import { FloatingPointTable } from './floating-point/FloatingPointTable';
import { FormatCard } from './floating-point/FormatCard';
import { FeatureCard } from './data-processing/FeatureCard';
import { CodeExample } from './system-registers/CodeExample';

const basicInstructions = [
  { instruction: 'FADD', syntax: 'FADD Fd, Fn, Fm', description: 'Adds Fn and Fm, stores result in Fd' },
  { instruction: 'FSUB', syntax: 'FSUB Fd, Fn, Fm', description: 'Subtracts Fm from Fn, stores in Fd' },
  { instruction: 'FMUL', syntax: 'FMUL Fd, Fn, Fm', description: 'Multiplies Fn and Fm, stores in Fd' },
  { instruction: 'FDIV', syntax: 'FDIV Fd, Fn, Fm', description: 'Divides Fn by Fm, stores in Fd' },
  { instruction: 'FNEG', syntax: 'FNEG Fd, Fn', description: 'Negates Fn, stores result in Fd' }
];

const advancedInstructions = [
  { instruction: 'FMADD', syntax: 'FMADD Fd, Fn, Fm, Fa', description: 'Fused multiply-add: (Fn × Fm) + Fa' },
  { instruction: 'FSQRT', syntax: 'FSQRT Fd, Fn', description: 'Square root of Fn' },
  { instruction: 'FCMP', syntax: 'FCMP Fn, Fm', description: 'Compare Fn with Fm, set flags' },
  { instruction: 'FCVT', syntax: 'FCVT Fd, Sn', description: 'Convert between floating-point formats' },
  { instruction: 'FABS', syntax: 'FABS Fd, Fn', description: 'Absolute value of Fn' }
];

const numberFormats = [
  {
    title: 'Single-Precision',
    totalBits: 32,
    fields: [
      { name: 'Sign', bits: '1 bit', description: 'Determines positive/negative' },
      { name: 'Exponent', bits: '8 bits', description: 'Biased exponent field' },
      { name: 'Fraction', bits: '23 bits', description: 'Significand/mantissa' }
    ]
  },
  {
    title: 'Double-Precision',
    totalBits: 64,
    fields: [
      { name: 'Sign', bits: '1 bit', description: 'Determines positive/negative' },
      { name: 'Exponent', bits: '11 bits', description: 'Biased exponent field' },
      { name: 'Fraction', bits: '52 bits', description: 'Significand/mantissa' }
    ]
  }
];

const features = [
  {
    title: 'IEEE 754 Compliance',
    description: 'Full support for IEEE floating-point standard',
    icon: Shield,
    points: [
      'Precise rounding modes',
      'Exception handling',
      'Special value support (NaN, Infinity)'
    ]
  },
  {
    title: 'SIMD Operations',
    description: 'Vector floating-point capabilities',
    icon: Zap,
    points: [
      'Parallel processing of multiple values',
      'Optimized for graphics and ML',
      'Advanced vector instructions'
    ]
  },
  {
    title: 'Hardware Acceleration',
    description: 'Dedicated floating-point units',
    icon: Calculator,
    points: [
      'Low-latency computations',
      'Pipelined execution',
      'Fused multiply-add support'
    ]
  },
  {
    title: 'Precision Control',
    description: 'Flexible precision options',
    icon: Cpu,
    points: [
      'Dynamic precision switching',
      'Extended precision support',
      'Denormal number handling'
    ]
  }
];

export function FloatingPoint() {
  return (
    <div className="py-16 bg-white" id="floating-point">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Floating-Point Processing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            IEEE 754 compliant floating-point operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Number Formats</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {numberFormats.map((format, index) => (
                <FormatCard key={index} {...format} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Operations</h3>
            <FloatingPointTable
              title="Basic Floating-Point Instructions"
              instructions={basicInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Operations</h3>
            <FloatingPointTable
              title="Advanced Floating-Point Instructions"
              instructions={advancedInstructions}
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
                title="Basic Operations"
                code={`FADD F0, F1, F2     ; F0 = F1 + F2
FSUB F3, F4, #1.0   ; F3 = F4 - 1.0
FMUL F5, F6, F7     ; F5 = F6 * F7
FDIV F8, F9, F10    ; F8 = F9 / F10`}
              />
              <CodeExample
                title="Advanced Operations"
                code={`FMADD F0, F1, F2, F3 ; F0 = (F1 * F2) + F3
FCMP F0, F1         ; Compare F0 and F1
FSQRT F2, F3        ; F2 = sqrt(F3)
FCVT D0, S1         ; Convert single to double`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}