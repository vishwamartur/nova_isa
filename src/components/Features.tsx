import React from 'react';
import { Cpu, Shield, Zap, Scale, Maximize, Terminal } from 'lucide-react';

const features = [
  {
    name: 'Instruction Set Design',
    description: 'Learn to create efficient and powerful instruction sets optimized for modern computing needs.',
    icon: Terminal
  },
  {
    name: 'Performance Optimization',
    description: 'Implement advanced pipelining and parallel execution techniques for maximum throughput.',
    icon: Zap
  },
  {
    name: 'Security Features',
    description: 'Build in hardware-level security mechanisms to protect against modern threats.',
    icon: Shield
  },
  {
    name: 'Scalability',
    description: 'Design architectures that can scale from embedded systems to high-performance computing.',
    icon: Maximize
  },
  {
    name: 'Power Efficiency',
    description: 'Optimize power consumption while maintaining high performance.',
    icon: Scale
  },
  {
    name: 'Hardware Integration',
    description: 'Learn how to implement your ISA in actual hardware designs.',
    icon: Cpu
  }
];

export function Features() {
  return (
    <div className="py-12 bg-white" id="components">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Architecture</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Components of Modern ISA
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the essential elements that make up a competitive instruction set architecture.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}