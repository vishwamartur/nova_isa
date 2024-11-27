import React from 'react';
import { Cpu, Database, Shield, Activity, Settings, Zap } from 'lucide-react';

const registerCategories = [
  {
    title: 'Program Flow',
    icon: Activity,
    registers: [
      { name: 'PC', description: 'Program Counter - Holds address of next instruction' },
      { name: 'LR', description: 'Link Register - Stores return address for subroutine calls' },
      { name: 'SP', description: 'Stack Pointer - Points to current top of stack' }
    ]
  },
  {
    title: 'Status Registers',
    icon: Settings,
    registers: [
      { name: 'CPSR', description: 'Current Program Status Register - Maintains processor state' },
      { name: 'SPSR', description: 'Saved Program Status Register - Backup of CPSR during exceptions' }
    ]
  },
  {
    title: 'Control Registers',
    icon: Shield,
    registers: [
      { name: 'SCR', description: 'System Control Register - Global system settings' },
      { name: 'ELCR', description: 'Exception Level Control Register - Manages privilege levels' }
    ]
  },
  {
    title: 'Vector Registers',
    icon: Zap,
    registers: [
      { name: 'V0-V31', description: '32 vector registers for SIMD and floating-point operations' }
    ]
  }
];

export function OtherRegisters() {
  return (
    <div className="py-16 bg-gray-50" id="other-registers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Specialized Registers
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced register types for system control and specialized operations
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {registerCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <category.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {category.registers.map((register) => (
                    <div key={register.name} className="bg-gray-50 rounded-lg p-4">
                      <div className="font-medium text-gray-900">{register.name}</div>
                      <div className="mt-1 text-sm text-gray-500">{register.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Register Usage Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-sm text-indigo-400 mb-2">Status Register Operations</div>
                <pre className="text-sm text-gray-300">
                  <code>{`MRS R0, CPSR     ; Read CPSR into R0
MSR CPSR, R1     ; Write R1 to CPSR
TST R0, #0xF0    ; Test status flags`}</code>
                </pre>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-sm text-indigo-400 mb-2">Vector Register Usage</div>
                <pre className="text-sm text-gray-300">
                  <code>{`VMOV.F32 V0, #1.0    ; Load float
VADD.F32 V1, V2, V3  ; Vector add
VMUL.F32 V4, V5, V6  ; Vector multiply`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}