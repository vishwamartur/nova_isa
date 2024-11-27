import React from 'react';
import { Cpu, Database, Server } from 'lucide-react';

export function MemoryDiagram() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center space-y-8">
        {/* L1 Cache Level */}
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <div className="bg-indigo-100 p-4 rounded-lg">
              <div className="text-indigo-600 font-semibold mb-2">L1 I-Cache</div>
              <Cpu className="h-8 w-8 text-indigo-500" />
            </div>
            <div className="text-sm text-gray-500 mt-2">32KB</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-indigo-100 p-4 rounded-lg">
              <div className="text-indigo-600 font-semibold mb-2">L1 D-Cache</div>
              <Cpu className="h-8 w-8 text-indigo-500" />
            </div>
            <div className="text-sm text-gray-500 mt-2">32KB</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="h-8 w-0.5 bg-gray-300"></div>

        {/* L2 Cache Level */}
        <div className="flex flex-col items-center">
          <div className="bg-indigo-200 p-4 rounded-lg">
            <div className="text-indigo-700 font-semibold mb-2">L2 Unified Cache</div>
            <Database className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="text-sm text-gray-500 mt-2">256KB - 1MB</div>
        </div>

        {/* Arrow */}
        <div className="h-8 w-0.5 bg-gray-300"></div>

        {/* Main Memory */}
        <div className="flex flex-col items-center">
          <div className="bg-indigo-300 p-4 rounded-lg">
            <div className="text-indigo-800 font-semibold mb-2">Main Memory</div>
            <Server className="h-8 w-8 text-indigo-700" />
          </div>
          <div className="text-sm text-gray-500 mt-2">4GB - 16GB</div>
        </div>

        {/* Legend */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-indigo-100 rounded mr-2"></div>
            <span>L1 Cache (Fastest)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-indigo-200 rounded mr-2"></div>
            <span>L2 Cache</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-indigo-300 rounded mr-2"></div>
            <span>Main Memory</span>
          </div>
        </div>
      </div>
    </div>
  );
}