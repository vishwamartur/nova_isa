import React from 'react';

export function Content() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Getting Started</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Understanding ISA Design</p>
            <p className="mt-4 text-lg text-gray-500">
              An Instruction Set Architecture (ISA) defines how software interacts with computer hardware. It includes:
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Instruction Formats</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Define the structure and encoding of machine instructions.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Addressing Modes</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Methods for specifying operand locations in memory or registers.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Register Architecture</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Organization and usage of processor registers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900">Design Principles</h3>
                <p className="mt-4 text-gray-500">
                  Key considerations when designing a new ISA:
                </p>
                <ul className="mt-6 space-y-4 text-gray-500">
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-2">Simplicity and regularity in instruction formats</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-2">Efficient encoding of common operations</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-2">Support for modern programming paradigms</p>
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