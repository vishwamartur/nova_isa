import React from 'react';
import { Database, Shield, Zap, Layers } from 'lucide-react';

export function RegistersSection() {
  const registers = [
    { name: 'R0-R29', purpose: 'General-purpose registers for operands and results', role: 'Fully interchangeable for all instructions' },
    { name: 'R30', purpose: 'Link Register', role: 'Stores return address for subroutine calls' },
    { name: 'R31', purpose: 'Stack Pointer (SP) / Zero Register', role: 'Acts as a stack pointer or zero constant source' }
  ];

  const features = [
    {
      title: 'Banked Registers',
      description: 'Accelerate context switching in multitasking environments',
      icon: Layers
    },
    {
      title: 'Virtual Register File',
      description: 'Extended register count through compiler optimizations',
      icon: Database
    },
    {
      title: 'SIMD Support',
      description: 'Dynamic allocation for vectorized workloads',
      icon: Zap
    },
    {
      title: 'Security Features',
      description: 'Protected register access and state isolation',
      icon: Shield
    }
  ];

  return (
    <div className="py-16 bg-white" id="registers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            General-Purpose Registers
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            NOVA Arch64's versatile 64-bit register architecture
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Register Overview
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Complete list of general-purpose registers and their roles
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {registers.map((register, index) => (
                  <div key={register.name} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                    <dt className="text-sm font-medium text-gray-500">
                      {register.name}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <div className="font-medium">{register.purpose}</div>
                      <div className="text-gray-500">{register.role}</div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="absolute -top-3 -left-3">
                  <div className="rounded-full bg-indigo-500 p-3">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Usage</h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{`; Arithmetic Operations
ADD R1, R2, R3  ; R1 = R2 + R3

; Memory Access
LDR R1, [R2, #4]  ; Load word from memory address (R2 + 4) into R1
STR R1, [R2, #8]  ; Store word from R1 into memory address (R2 + 8)

; Branching and Subroutine Calls
BL Subroutine     ; Branch and link, storing return address in R30
MOV R1, R31       ; Move zero into R1 using R31 as zero register`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}