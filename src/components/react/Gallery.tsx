import React from 'react';
export const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3',
      alt: 'Beach bar setting',
      size: 'large',
    },
    {
      url: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-4.0.3',
      alt: 'Cocktail',
      size: 'small',
    },
    {
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3',
      alt: 'Beach view',
      size: 'small',
    },
    {
      url: 'https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixlib=rb-4.0.3',
      alt: 'Sunset view',
      size: 'medium',
    },
  ];
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-4">
            <h5 className="text-sm tracking-widest text-gray-500 mb-6">GALLERY</h5>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              VISUAL
              <br />
              EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-blue-900 mb-8" />
            <p className="text-lg text-gray-700">
              Explore the atmosphere and aesthetics of Bayamo Beach Bar through our curated collection of images.
              Capturing the essence of our seaside sanctuary.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8">
                <img src={images[0].url} alt={images[0].alt} className="w-full h-[400px] object-cover" />
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="grid grid-rows-2 gap-4 h-full">
                  <img src={images[1].url} alt={images[1].alt} className="w-full h-full object-cover" />
                  <img src={images[2].url} alt={images[2].alt} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-12">
                <img src={images[3].url} alt={images[3].alt} className="w-full h-[300px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
