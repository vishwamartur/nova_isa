import React from 'react';
import { Cpu, Shield, Zap, Database } from 'lucide-react';

export function ArchitectureDetails() {
  const details = [
    {
      title: 'Instruction Set',
      icon: Cpu,
      items: [
        'Hybrid RISC/CISC design',
        'Variable-length instructions',
        'Optimized encoding',
        'AI/ML acceleration'
      ]
    },
    {
      title: 'Memory System',
      icon: Database,
      items: [
        'Unified memory model',
        'In-memory computing',
        'Hardware-enforced protection',
        'Advanced caching'
      ]
    },
    {
      title: 'Security Features',
      icon: Shield,
      items: [
        'Quantum-resistant primitives',
        'Secure boot process',
        'Memory isolation',
        'Cryptographic acceleration'
      ]
    },
    {
      title: 'Performance',
      icon: Zap,
      items: [
        'Dynamic frequency scaling',
        'Power-aware execution',
        'Parallel processing',
        'Speculative execution'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Architecture Details
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive overview of NOVA's key architectural components
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {details.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <section.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                          <span className="text-indigo-600 text-sm">✓</span>
                        </div>
                      </div>
                      <p className="ml-3 text-gray-500">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}