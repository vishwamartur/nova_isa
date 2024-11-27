import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from './InstructionTable';
import { FeatureCard } from './FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const vectorInstructions = [
  { instruction: 'VADD', syntax: 'VADD Vd, Vn, Vm', description: 'Vector addition' },
  { instruction: 'VSUB', syntax: 'VSUB Vd, Vn, Vm', description: 'Vector subtraction' },
  { instruction: 'VMUL', syntax: 'VMUL Vd, Vn, Vm', description: 'Vector multiplication' },
  { instruction: 'VAND', syntax: 'VAND Vd, Vn, Vm', description: 'Vector bitwise AND' },
  { instruction: 'VORR', syntax: 'VORR Vd, Vn, Vm', description: 'Vector bitwise OR' }
];

const matrixInstructions = [
  { instruction: 'VMADD', syntax: 'VMADD Vd, Vn, Vm, Vo', description: 'Matrix multiply and add' },
  { instruction: 'VMULADD', syntax: 'VMULADD Vd, Vn, Vm, Vo', description: 'Matrix multiply with accumulation' },
  { instruction: 'VDOT', syntax: 'VDOT Vd, Vn, Vm', description: 'Vector dot product' },
  { instruction: 'VTRANSPOSE', syntax: 'VTRANSPOSE Vd, Vn', description: 'Matrix transpose' },
  { instruction: 'VMAC', syntax: 'VMAC Vd, Vn, Vm', description: 'Matrix multiply-accumulate' }
];

const simdInstructions = [
  { instruction: 'VADDV', syntax: 'VADDV Vd.16B, Vn.16B', description: 'Add across vector' },
  { instruction: 'VMULV', syntax: 'VMULV Vd.8H, Vn.8H', description: 'Multiply across vector' },
  { instruction: 'VEXT', syntax: 'VEXT Vd, Vn, Vm', description: 'Extract vector elements' },
  { instruction: 'VREV', syntax: 'VREV Vd, Vn', description: 'Reverse vector elements' },
  { instruction: 'VZIP', syntax: 'VZIP Vd, Vn', description: 'Interleave vector elements' }
];

const features = [
  {
    title: 'Vector Processing',
    description: 'Advanced vector operation support',
    icon: Binary,
    points: [
      'SIMD instruction set',
      '128/256-bit vector registers',
      'Parallel data processing'
    ]
  },
  {
    title: 'Matrix Operations',
    description: 'Efficient matrix computation',
    icon: Cpu,
    points: [
      'Hardware-accelerated matrix math',
      'Optimized for ML workloads',
      'Fast matrix transformations'
    ]
  },
  {
    title: 'Performance Features',
    description: 'High-throughput processing',
    icon: Zap,
    points: [
      'Single-cycle vector operations',
      'Pipelined execution',
      'Advanced prefetching'
    ]
  },
  {
    title: 'Application Support',
    description: 'Specialized processing features',
    icon: Shield,
    points: [
      'AI/ML acceleration',
      'Graphics processing',
      'Scientific computing'
    ]
  }
];

export function VectorMatrixProcessing() {
  return (
    <div className="py-16 bg-white" id="vector-matrix-processing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Vector and Matrix Data Processing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced vector and matrix operations in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vector Operations</h3>
            <InstructionTable
              title="Vector Instructions"
              instructions={vectorInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Matrix Operations</h3>
            <InstructionTable
              title="Matrix Instructions"
              instructions={matrixInstructions}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">SIMD Operations</h3>
            <InstructionTable
              title="SIMD Instructions"
              instructions={simdInstructions}
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
                title="Vector Operations"
                code={`VADD V0.4S, V1.4S, V2.4S  ; Add vectors
VMUL V3.8H, V4.8H, V5.8H  ; Multiply vectors
VDOT V6.2D, V7.8H, V8.8H  ; Vector dot product
VREV V9.16B, V10.16B      ; Reverse elements`}
              />
              <CodeExample
                title="Matrix Operations"
                code={`VMADD V0, V1, V2, V3     ; Matrix multiply-add
VTRANSPOSE V4, V5        ; Transpose matrix
VMAC V6, V7, V8          ; Matrix multiply-accumulate
VMULADD V9, V10, V11, V12 ; Matrix multiply with add`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}