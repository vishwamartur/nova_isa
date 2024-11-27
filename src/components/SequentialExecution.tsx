import React from 'react';
import { ArrowRight, Clock, Cpu, Database, Zap } from 'lucide-react';

export function SequentialExecution() {
  const pipelineStages = [
    {
      name: 'Instruction Fetch',
      icon: Database,
      description: 'Retrieves the next instruction from memory using the program counter (PC)',
    },
    {
      name: 'Instruction Decode',
      icon: Cpu,
      description: 'Interprets the instruction and prepares control signals',
    },
    {
      name: 'Execute',
      icon: Zap,
      description: 'Performs the actual computation in the ALU',
    },
    {
      name: 'Memory Access',
      icon: Database,
      description: 'Reads from or writes to memory if required',
    },
    {
      name: 'Writeback',
      icon: Clock,
      description: 'Updates registers with computation results',
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="sequential-execution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Sequential Execution in NOVA
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Understanding the fundamental pipeline stages and execution flow
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {pipelineStages.map((stage, index) => (
                <div key={stage.name} className="flex flex-col items-center">
                  <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-indigo-500">
                    <stage.icon className="h-8 w-8 text-indigo-500" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">{stage.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 max-w-[200px]">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                        <span className="text-indigo-600 text-sm">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-500">Predictable execution patterns for easier debugging</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                        <span className="text-indigo-600 text-sm">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-500">Inherent energy efficiency without complex control logic</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                        <span className="text-indigo-600 text-sm">✓</span>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-500">Simple and reliable foundation for advanced features</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-gray-900">Optimizations</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                        <span className="text-indigo-600 text-sm">1</span>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-500">Prefetch buffers for reduced fetch latency</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                        <span className="text-indigo-600 text-sm">2</span>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-500">Static branch prediction using simple heuristics</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                        <span className="text-indigo-600 text-sm">3</span>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-500">Micro-operation fusion for improved efficiency</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}