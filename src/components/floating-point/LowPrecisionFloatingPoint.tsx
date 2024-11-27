import React from 'react';
import { Calculator, Cpu, Zap, Shield } from 'lucide-react';
import { FloatingPointTable } from './FloatingPointTable';
import { FormatCard } from './FormatCard';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const fp8Instructions = [
  { instruction: 'FADD8', syntax: 'FADD8 Fd, Fn, Fm', description: 'Adds Fn and Fm (8-bit FP), stores result in Fd' },
  { instruction: 'FSUB8', syntax: 'FSUB8 Fd, Fn, Fm', description: 'Subtracts Fm from Fn (8-bit FP), stores in Fd' },
  { instruction: 'FMUL8', syntax: 'FMUL8 Fd, Fn, Fm', description: 'Multiplies Fn and Fm (8-bit FP), stores in Fd' },
  { instruction: 'FDIV8', syntax: 'FDIV8 Fd, Fn, Fm', description: 'Divides Fn by Fm (8-bit FP), stores in Fd' },
  { instruction: 'FCVT8', syntax: 'FCVT8 Fd, Fn', description: 'Converts to/from 8-bit floating-point' }
];

const fp16Instructions = [
  { instruction: 'FADD16', syntax: 'FADD16 Fd, Fn, Fm', description: 'Adds Fn and Fm (16-bit FP), stores result in Fd' },
  { instruction: 'FSUB16', syntax: 'FSUB16 Fd, Fn, Fm', description: 'Subtracts Fm from Fn (16-bit FP), stores in Fd' },
  { instruction: 'FMUL16', syntax: 'FMUL16 Fd, Fn, Fm', description: 'Multiplies Fn and Fm (16-bit FP), stores in Fd' },
  { instruction: 'FDIV16', syntax: 'FDIV16 Fd, Fn, Fm', description: 'Divides Fn by Fm (16-bit FP), stores in Fd' },
  { instruction: 'FCVT16', syntax: 'FCVT16 Fd, Fn', description: 'Converts to/from 16-bit floating-point' }
];

const numberFormats = [
  {
    title: '8-bit Floating-Point (FP8)',
    totalBits: 8,
    fields: [
      { name: 'Sign', bits: '1 bit', description: 'Determines positive/negative' },
      { name: 'Exponent', bits: '4 bits', description: 'Biased exponent field' },
      { name: 'Fraction', bits: '3 bits', description: 'Significand/mantissa' }
    ]
  },
  {
    title: '16-bit Floating-Point (FP16)',
    totalBits: 16,
    fields: [
      { name: 'Sign', bits: '1 bit', description: 'Determines positive/negative' },
      { name: 'Exponent', bits: '5 bits', description: 'Biased exponent field' },
      { name: 'Fraction', bits: '10 bits', description: 'Significand/mantissa' }
    ]
  }
];

const features = [
  {
    title: 'AI/ML Optimization',
    description: 'Specialized for machine learning workloads',
    icon: Cpu,
    points: [
      'Efficient neural network inference',
      'Reduced memory bandwidth',
      'Hardware-accelerated operations'
    ]
  },
  {
    title: 'Memory Efficiency',
    description: 'Optimized memory usage and bandwidth',
    icon: Shield,
    points: [
      'Compact data representation',
      'Reduced cache footprint',
      'Efficient data transfers'
    ]
  },
  {
    title: 'SIMD Processing',
    description: 'Vectorized low-precision operations',
    icon: Zap,
    points: [
      'Parallel processing capabilities',
      'Enhanced throughput',
      'Optimized for graphics workloads'
    ]
  },
  {
    title: 'Power Efficiency',
    description: 'Energy-optimized computations',
    icon: Calculator,
    points: [
      'Reduced power consumption',
      'Efficient for mobile devices',
      'Dynamic precision scaling'
    ]
  }
];

export function LowPrecisionFloatingPoint() {
  return (
    <div className="py-16 bg-white" id="low-precision-floating-point">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            8-bit and 16-bit Floating-Point
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Low-precision floating-point operations optimized for AI/ML and embedded systems
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">8-bit Operations</h3>
            <FloatingPointTable
              title="8-bit Floating-Point Instructions"
              instructions={fp8Instructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">16-bit Operations</h3>
            <FloatingPointTable
              title="16-bit Floating-Point Instructions"
              instructions={fp16Instructions}
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
                title="8-bit Operations"
                code={`FADD8 F0, F1, F2    ; 8-bit addition
FMUL8 F3, F4, F5    ; 8-bit multiplication
FCVT8 F6, F7        ; Convert to 8-bit
FADDV8 V0.16B, V1.16B ; Vector 8-bit add`}
              />
              <CodeExample
                title="16-bit Operations"
                code={`FADD16 F0, F1, F2   ; 16-bit addition
FMUL16 F3, F4, F5   ; 16-bit multiplication
FCVT16 F6, F7       ; Convert to 16-bit
FADDV16 V0.8H, V1.8H ; Vector 16-bit add`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}