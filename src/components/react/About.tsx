export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3"
                alt="Bayamo Beach Bar atmosphere"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#f5f3ee] p-4 w-32 h-32 flex items-center justify-center">
                <span className="text-sm tracking-widest text-gray-700">SINCE 2015</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h5 className="text-sm tracking-widest text-gray-500 mb-6">ABOUT US</h5>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              PREMIUM BEACHSIDE
              <br />
              EXPERIENCE IN MANI
            </h2>
            <div className="w-24 h-1 bg-blue-900 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700">
                  Located in the heart of Gythio, Mani (Lakonia), Bayamo Beach Bar is your ultimate destination for an
                  unforgettable summer experience. We've created a perfect blend of relaxation and entertainment,
                  offering everything from morning coffee to evening cocktails.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  Our dedicated team is committed to providing exceptional service, whether you're joining us for a
                  casual beach day or celebrating a special occasion. With stunning views of the Mediterranean and a
                  carefully curated atmosphere, we invite you to create lasting memories at Bayamo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
