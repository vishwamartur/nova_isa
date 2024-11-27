import React from 'react';
import { Shield, Activity, Settings, Database, Lock } from 'lucide-react';
import { RegisterCard } from './system-registers/RegisterCard';
import { RegisterTable } from './system-registers/RegisterTable';
import { CodeExample } from './system-registers/CodeExample';

const systemRegisters = [
  {
    title: 'Current Program Status Register (CPSR)',
    description: 'Tracks processor state and execution flags',
    icon: Activity,
    fields: [
      { name: 'Condition Flags', description: 'N (Negative), Z (Zero), C (Carry), V (Overflow)' },
      { name: 'Execution State', description: 'User, Supervisor, Hypervisor, Secure modes' },
      { name: 'Interrupt Masking', description: 'IRQ and FIQ interrupt control' }
    ]
  },
  {
    title: 'System Control Register (SCR)',
    description: 'Global processor configuration',
    icon: Settings,
    fields: [
      { name: 'Cache Control', description: 'Enable/disable instruction and data caches' },
      { name: 'Memory Protection', description: 'Memory protection mechanisms' },
      { name: 'Branch Prediction', description: 'Configure branch prediction behavior' }
    ]
  },
  {
    title: 'Exception Level Control Register (ELCR)',
    description: 'Manages privilege and exception levels',
    icon: Shield,
    fields: [
      { name: 'Exception Levels', description: 'EL0 (User) to EL3 (Secure) mode control' },
      { name: 'Security State', description: 'Secure/Non-secure state configuration' },
      { name: 'Access Control', description: 'Resource access permissions' }
    ]
  },
  {
    title: 'Memory Management Registers',
    description: 'Virtual memory and translation control',
    icon: Database,
    fields: [
      { name: 'Translation Control', description: 'Page size and address space configuration' },
      { name: 'Memory Attributes', description: 'Cacheability and access permissions' },
      { name: 'TLB Control', description: 'Translation lookaside buffer management' }
    ]
  }
];

const tableData = [
  {
    register: 'CPSR',
    purpose: 'Processor state tracking',
    features: 'Condition flags, execution mode, interrupts'
  },
  {
    register: 'SPSR',
    purpose: 'Exception state backup',
    features: 'State restoration during exceptions'
  },
  {
    register: 'SCR',
    purpose: 'System configuration',
    features: 'Cache, memory protection, branch prediction'
  },
  {
    register: 'ELCR',
    purpose: 'Exception level control',
    features: 'EL0-EL3 mode management'
  }
];

export function SystemRegisters() {
  return (
    <div className="py-16 bg-white" id="system-registers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            System Registers
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Core system registers managing processor state and configuration
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {systemRegisters.map((register, index) => (
            <RegisterCard key={index} {...register} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Register Summary</h3>
          <RegisterTable rows={tableData} />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Register Usage Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CodeExample
              title="Reading System Registers"
              code={`MRS X0, CPSR     ; Read CPSR into X0
MRS X1, TCR      ; Read TCR into X1
MRS X2, MAIR_EL1 ; Read MAIR at EL1`}
            />
            <CodeExample
              title="Writing System Registers"
              code={`MSR CPSR_c, X0   ; Write to CPSR control
MSR TCR_EL1, X1  ; Write to TCR at EL1
MSR SCTLR_EL1, X2; Write System Control`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}