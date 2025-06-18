import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h5 className="text-sm tracking-widest text-gray-500 mb-6">CONTACT</h5>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              VISIT
              <br />
              BAYAMO
            </h2>
            <div className="w-24 h-1 bg-blue-900 mb-8" />
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-blue-900 mr-4 mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Location</p>
                  <p className="text-gray-700">Gythio, Mani (Lakonia), Greece</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-6 h-6 text-blue-900 mr-4 mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-700">+30 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="w-6 h-6 text-blue-900 mr-4 mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Email</p>
                  <p className="text-gray-700">info@bayamobeachbar.com</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <p className="text-sm text-gray-500">
                OPENING HOURS
                <br />
                Monday - Sunday: 10:00 AM - 2:00 AM
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white h-full">
              <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Map Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
