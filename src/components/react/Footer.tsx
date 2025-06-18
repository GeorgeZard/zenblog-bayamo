import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-light tracking-widest">BAYAMO</h3>
            <p className="mt-2 text-gray-400 text-sm">Creating unforgettable summer experiences</p>
          </div>
          <div className="md:col-span-4 md:text-center">
            <div className="flex space-x-6 md:justify-center">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Bayamo Beach Bar.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
