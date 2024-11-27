import React from 'react';
import { Cpu, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { href: '#overview', text: 'Overview' },
    { href: '#components', text: 'Components' },
    { href: '#sequential-execution', text: 'Sequential Execution' },
    { href: '#registers', text: 'General Registers' },
    { href: '#other-registers', text: 'Special Registers' },
    { href: '#optimization', text: 'Optimization' },
    { href: '#implementation', text: 'Implementation' }
  ];

  return (
    <header className="bg-indigo-600 text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Cpu className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">ISArchitect</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {menuItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500 focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}