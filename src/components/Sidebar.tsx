import React, { useState } from 'react';
import { Cpu, ChevronDown, ChevronRight, BookOpen, Layers, Shield, Zap, Database, Activity, Settings, X } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const menuItems = [
  {
    title: 'Introduction',
    icon: BookOpen,
    items: [
      { href: '#overview', text: 'Overview' },
      { href: '#components', text: 'Key Components' }
    ]
  },
  {
    title: 'Architecture',
    icon: Layers,
    items: [
      { href: '#architecture', text: 'Core Architecture' },
      { href: '#sequential-execution', text: 'Sequential Execution' }
    ]
  },
  {
    title: 'Registers',
    icon: Database,
    items: [
      { href: '#registers', text: 'General Registers' },
      { href: '#other-registers', text: 'Special Registers' },
      { href: '#system-registers', text: 'System Registers' }
    ]
  },
  {
    title: 'Performance',
    icon: Zap,
    items: [
      { href: '#comparison', text: 'Comparison' },
      { href: '#optimization', text: 'Optimization' }
    ]
  },
  {
    title: 'Security',
    icon: Shield,
    items: [
      { href: '#security', text: 'Security Features' },
      { href: '#implementation', text: 'Implementation' }
    ]
  }
];

export function Sidebar({ onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    Object.fromEntries(menuItems.map(item => [item.title, true]))
  );

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        onClose(); // Close sidebar on mobile after clicking a link
      }
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg h-full overflow-y-auto border-r border-gray-200">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Cpu className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">NOVA ISA</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <nav className="px-3 py-4">
        {menuItems.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <section.icon className="h-5 w-5" />
                <span>{section.title}</span>
              </div>
              {expandedSections[section.title] ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            {expandedSections[section.title] && (
              <div className="mt-1 ml-4 space-y-1">
                {section.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 hover:text-indigo-600 transition-colors"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-gray-200 mt-auto">
        <div className="flex items-center space-x-2">
          <Activity className="h-4 w-4 text-green-500" />
          <span className="text-sm text-gray-600">Documentation v1.0</span>
        </div>
      </div>
    </div>
  );
}