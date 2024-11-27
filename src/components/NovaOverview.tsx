import React from 'react';
import { Cpu, Zap, Shield, Scale } from 'lucide-react';

export function NovaOverview() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8" id="nova-overview">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          NOVA (Next-Gen Optimized Versatile Architecture)
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          A revolutionary ISA designed for the next generation of computing
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="absolute -top-3 -left-3">
            <div className="rounded-full bg-indigo-500 p-3">
              <Cpu className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Hybrid Architecture</h3>
          <p className="mt-2 text-gray-500">
            Combines RISC-like simplicity with CISC-like complex instructions for optimal performance
          </p>
        </div>

        <div className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="absolute -top-3 -left-3">
            <div className="rounded-full bg-indigo-500 p-3">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">AI/ML Optimization</h3>
          <p className="mt-2 text-gray-500">
            Built-in support for tensor operations and deep learning primitives
          </p>
        </div>

        <div className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="absolute -top-3 -left-3">
            <div className="rounded-full bg-indigo-500 p-3">
              <Scale className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Energy-Aware</h3>
          <p className="mt-2 text-gray-500">
            Dynamic profiling and execution pathways for optimal power efficiency
          </p>
        </div>

        <div className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="absolute -top-3 -left-3">
            <div className="rounded-full bg-indigo-500 p-3">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Security-First</h3>
          <p className="mt-2 text-gray-500">
            Hardware-enforced protection with quantum-resistant primitives
          </p>
        </div>
      </div>
    </section>
  );
}