import React, { useState, Fragment } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: 'HOME',
      href: '#home',
    },
    {
      name: 'ABOUT',
      href: '#about',
    },
    {
      name: 'SERVICES',
      href: '#services',
    },
    {
      name: 'GALLERY',
      href: '#gallery',
    },
    {
      name: 'BLOG',
      href: '/blog',
    },
    {
      name: 'CONTACT',
      href: '#contact',
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-light tracking-widest text-gray-900">
              BAYAMO
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <Fragment key={item.name}>
                <a
                  href={item.href}
                  className="text-sm tracking-widest text-gray-700 hover:text-blue-900 transition-colors px-4"
                >
                  {item.name}
                </a>
                {index < navItems.length - 1 && <span className="text-gray-300 mx-1">|</span>}
              </Fragment>
            ))}
          </div>
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-900">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm tracking-widest text-gray-700 hover:text-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
