import React from 'react';
import { Cpu, Settings, Zap, Shield } from 'lucide-react';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const features = [
  {
    title: 'Configurable FPU',
    description: 'Flexible floating-point unit configuration',
    icon: Settings,
    points: [
      'Optional hardware FPU implementation',
      'Software emulation fallback',
      'Configurable precision support'
    ]
  },
  {
    title: 'Power Optimization',
    description: 'Energy-efficient design options',
    icon: Shield,
    points: [
      'Reduced power consumption without FPU',
      'Smaller silicon area for embedded systems',
      'Dynamic power gating'
    ]
  },
  {
    title: 'Software Support',
    description: 'Comprehensive software alternatives',
    icon: Cpu,
    points: [
      'Software-based floating-point emulation',
      'Fixed-point arithmetic libraries',
      'Optimized software implementations'
    ]
  },
  {
    title: 'Performance Scaling',
    description: 'Flexible performance options',
    icon: Zap,
    points: [
      'Hardware acceleration when needed',
      'SIMD support for vector operations',
      'Workload-specific optimizations'
    ]
  }
];

export function OptionalFloatingPoint() {
  return (
    <div className="py-16 bg-white" id="optional-floating-point">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Optional Floating-Point Support
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Flexible floating-point implementation options in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Options</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Configuration Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4">Hardware FPU</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                    Full IEEE 754 compliance
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                    Hardware acceleration
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                    SIMD support
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4">Software Emulation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                    Reduced power consumption
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                    Smaller chip area
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                    Software flexibility
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CodeExample
                title="Hardware FPU Configuration"
                code={`// Enable hardware FPU
.cpu cortex-nova
.fpu vfpv4

// FPU instructions
VMOV.F32 S0, #1.0
VADD.F32 S1, S2, S3
VMUL.F32 S4, S5, S6`}
              />
              <CodeExample
                title="Software Emulation"
                code={`// Software floating-point
.cpu cortex-nova
.fpu softvfp

// Software implementation
BL __addsf3    // Add single precision
BL __mulsf3    // Multiply single precision
BL __divsf3    // Divide single precision`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}