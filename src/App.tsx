import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { NovaOverview } from './components/NovaOverview';
import { ArchitectureDetails } from './components/ArchitectureDetails';
import { RegistersSection } from './components/RegistersSection';
import { OtherRegisters } from './components/OtherRegisters';
import { SystemRegisters } from './components/SystemRegisters';
import { DataProcessing } from './components/DataProcessing';
import { BitManipulation } from './components/data-processing/BitManipulation';
import { ExtensionSaturation } from './components/data-processing/ExtensionSaturation';
import { SubRegisterProcessing } from './components/data-processing/SubRegisterProcessing';
import { FormatConversion } from './components/data-processing/FormatConversion';
import { VectorMatrixProcessing } from './components/data-processing/VectorMatrixProcessing';
import { LoadsStores } from './components/memory/LoadsStores';
import { LoadsStoresSize } from './components/memory/LoadsStoresSize';
import { LoadsStoresExtension } from './components/memory/LoadsStoresExtension';
import { LoadsStoresExtensionTask } from './components/memory/LoadsStoresExtensionTask';
import { LoadsStoresAddressing } from './components/memory/LoadsStoresAddressing';
import { LoadsStoresPair } from './components/memory/LoadsStoresPair';
import { LoadsStoresFloatingPoint } from './components/memory/LoadsStoresFloatingPoint';
import { LoadsStoresSpecialist } from './components/memory/LoadsStoresSpecialist';
import { LoadsStoresAcquireRelease } from './components/memory/LoadsStoresAcquireRelease';
import { LoadsStoresAtomic } from './components/memory/LoadsStoresAtomic';
import { LoadsStoresMemcpy } from './components/memory/LoadsStoresMemcpy';
import { ProgramFlow } from './components/program-flow/ProgramFlow';
import { LoopsDecisions } from './components/program-flow/LoopsDecisions';
import { UnconditionalBranch } from './components/program-flow/UnconditionalBranch';
import { ConditionalBranch } from './components/program-flow/ConditionalBranch';
import { ConditionCodes } from './components/program-flow/ConditionCodes';
import { ConditionalSelect } from './components/program-flow/ConditionalSelect';
import { FloatingPoint } from './components/FloatingPoint';
import { LowPrecisionFloatingPoint } from './components/floating-point/LowPrecisionFloatingPoint';
import { OptionalFloatingPoint } from './components/floating-point/OptionalFloatingPoint';
import { SequentialExecution } from './components/SequentialExecution';
import { ComparisonTable } from './components/ComparisonTable';
import { Implementation } from './components/Implementation';
import { Footer } from './components/Footer';
import { Menu } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed z-50 top-4 left-4 p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:sticky top-0 z-50 lg:z-0 h-screen flex-shrink-0`}
      >
        <Sidebar onClose={closeSidebar} />
      </div>

      {/* Main content */}
      <div className="flex-1">
        <main className="min-h-screen">
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="space-y-16">
              <NovaOverview />
              <Features />
              <ArchitectureDetails />
              <SequentialExecution />
              <RegistersSection />
              <OtherRegisters />
              <SystemRegisters />
              <DataProcessing />
              <BitManipulation />
              <ExtensionSaturation />
              <SubRegisterProcessing />
              <FormatConversion />
              <VectorMatrixProcessing />
              <LoadsStores />
              <LoadsStoresSize />
              <LoadsStoresExtension />
              <LoadsStoresExtensionTask />
              <LoadsStoresAddressing />
              <LoadsStoresPair />
              <LoadsStoresFloatingPoint />
              <LoadsStoresSpecialist />
              <LoadsStoresAcquireRelease />
              <LoadsStoresAtomic />
              <LoadsStoresMemcpy />
              <ProgramFlow />
              <LoopsDecisions />
              <UnconditionalBranch />
              <ConditionalBranch />
              <ConditionCodes />
              <ConditionalSelect />
              <FloatingPoint />
              <LowPrecisionFloatingPoint />
              <OptionalFloatingPoint />
              <ComparisonTable />
              <Implementation />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;