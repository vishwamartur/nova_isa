import React from 'react';
import { Binary, Shield, Cpu, Zap } from 'lucide-react';
import { InstructionTable } from '../data-processing/InstructionTable';
import { FeatureCard } from '../data-processing/FeatureCard';
import { CodeExample } from '../system-registers/CodeExample';

const zeroExtensionTasks = [
  { instruction: 'LDRB', syntax: 'LDRB Rd, [Rn]', description: 'Load byte and zero-extend to register' },
  { instruction: 'LDRH', syntax: 'LDRH Rd, [Rn]', description: 'Load halfword and zero-extend to register' },
  { instruction: 'STR', syntax: 'STR Rd, [Rn]', description: 'Store from register to memory' },
  { instruction: 'STRB', syntax: 'STRB Rd, [Rn]', description: 'Store byte from register to memory' }
];

const signExtensionTasks = [
  { instruction: 'LDRSB', syntax: 'LDRSB Rd, [Rn]', description: 'Load signed byte and sign-extend' },
  { instruction: 'LDRSH', syntax: 'LDRSH Rd, [Rn]', description: 'Load signed halfword and sign-extend' },
  { instruction: 'LDRSW', syntax: 'LDRSW Rd, [Rn]', description: 'Load signed word and sign-extend' },
  { instruction: 'SXTH', syntax: 'SXTH Rd, Rn', description: 'Sign extend halfword to register' }
];

const memoryConsiderations = [
  { instruction: 'Alignment', syntax: '2/4/8 bytes', description: 'Memory alignment requirements for efficient access' },
  { instruction: 'Mixed Types', syntax: 'Sign/Unsigned', description: 'Handling different data types in memory' },
  { instruction: 'Performance', syntax: 'Single cycle', description: 'Efficient extension operations' },
  { instruction: 'Compatibility', syntax: 'Data sizes', description: 'Support for various data widths' }
];

const features = [
  {
    title: 'Zero Extension Task',
    description: 'Efficient unsigned data handling',
    icon: Binary,
    points: [
      'Automatic zero extension on load',
      'Preserves unsigned values',
      'Efficient register utilization'
    ]
  },
  {
    title: 'Sign Extension Task',
    description: 'Comprehensive signed value handling',
    icon: Shield,
    points: [
      'Automatic sign extension on load',
      'Preserves signed values',
      'Support for negative numbers'
    ]
  },
  {
    title: 'Memory Alignment',
    description: 'Optimized memory access',
    icon: Zap,
    points: [
      'Proper alignment handling',
      'Performance optimization',
      'Exception prevention'
    ]
  },
  {
    title: 'Data Compatibility',
    description: 'Flexible data handling',
    icon: Cpu,
    points: [
      'Mixed data type support',
      'Seamless width conversion',
      'Efficient data movement'
    ]
  }
];

export function LoadsStoresExtensionTask() {
  return (
    <div className="py-16 bg-white" id="loads-stores-extension-task">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Zero and Sign Extension Task
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Memory access tasks with data extension in NOVA Arch64
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Zero Extension Tasks</h3>
            <InstructionTable
              title="Zero Extension Operations"
              instructions={zeroExtensionTasks}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sign Extension Tasks</h3>
            <InstructionTable
              title="Sign Extension Operations"
              instructions={signExtensionTasks}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Memory Considerations</h3>
            <InstructionTable
              title="Memory Access Considerations"
              instructions={memoryConsiderations}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Scenarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CodeExample
                title="Zero Extension Task"
                code={`; Load unsigned byte and zero-extend
LDRB W0, [X1]      ; Load byte from memory
AND W0, W0, #0xFF  ; Ensure upper bits are zero

; Store result back to memory
STRB W0, [X2]      ; Store single byte
STR W0, [X3]       ; Store full word`}
              />
              <CodeExample
                title="Sign Extension Task"
                code={`; Load signed halfword and sign-extend
LDRSH W0, [X1]     ; Load and sign-extend
ASR W0, W0, #16    ; Arithmetic shift for sign
SXTH W1, W0        ; Sign extend halfword

; Store signed result
STR W0, [X2]       ; Store full word
STRH W0, [X3]      ; Store halfword`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}