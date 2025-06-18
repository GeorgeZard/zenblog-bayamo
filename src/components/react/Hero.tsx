import React from 'react';
export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 w-full bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h5 className="text-sm tracking-widest text-gray-500 mb-6">SEASIDE EXPERIENCE</h5>
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-none mb-8">
              BAY<span className="font-normal">AMO</span>
            </h1>
            <div className="w-24 h-1 bg-blue-900 mb-8" />
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Curated beachside experiences in Gythio, Mani. Premium cocktails and unforgettable moments by the
              Mediterranean.
            </p>
            <div className="italic text-gray-500 text-sm">established 2015</div>
          </div>
          {/* Right Column - Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixlib=rb-4.0.3"
                alt="Bayamo Beach Bar"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white p-6 max-w-xs">
                <p className="text-sm text-gray-700">"The most aesthetically pleasing beach bar on the coast"</p>
                <p className="text-xs text-gray-500 mt-2">— Mani Travel Magazine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
