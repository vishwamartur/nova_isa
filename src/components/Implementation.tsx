import React from 'react';
import { Code, Database, Users } from 'lucide-react';

export function Implementation() {
  return (
    <div className="py-16 bg-white" id="implementation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Implementation Roadmap
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Strategic steps for bringing NOVA to life
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Code className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Prototype Development</h3>
                <p className="mt-2 text-gray-500">
                  Initial validation using FPGA platforms and hardware simulation tools.
                  Development of core instruction set and execution pipeline.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Database className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Software Ecosystem</h3>
                <p className="mt-2 text-gray-500">
                  Development of compiler toolchain with LLVM/GCC support.
                  Creation of specialized libraries for AI, IoT, and cryptography.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Partnerships & Adoption</h3>
                <p className="mt-2 text-gray-500">
                  Collaboration with hardware vendors and academic institutions.
                  Development of reference implementations and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}