import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">NOVA Architecture</h3>
            <p className="text-gray-400 text-sm">
              Next-Generation Optimized Versatile Architecture for the future of computing.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#architecture" className="text-gray-400 hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#implementation" className="text-gray-400 hover:text-white transition-colors">Implementation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:vishwamartur@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} NOVA Architecture. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:vishwamartur@gmail.com" className="hover:text-white transition-colors">
                vishwamartur@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}