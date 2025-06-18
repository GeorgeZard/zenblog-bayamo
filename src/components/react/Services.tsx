import { CalendarIcon, BriefcaseIcon, HeartIcon } from 'lucide-react';
export const Services = () => {
  const services = [
    {
      title: 'BIRTHDAY PARTIES',
      description: 'Celebrate your special day in style with our customized party packages.',
      icon: CalendarIcon,
    },
    {
      title: 'BUSINESS EVENTS',
      description: 'Transform your corporate gatherings into memorable beachside experiences.',
      icon: BriefcaseIcon,
    },
    {
      title: 'WEDDING PARTIES',
      description: 'Create magical moments for your wedding celebration with our stunning beach backdrop.',
      icon: HeartIcon,
    },
  ];
  return (
    <section id="services" className="py-24 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h5 className="text-sm tracking-widest text-gray-500 mb-6">SERVICES</h5>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              CURATED
              <br />
              EXPERIENCES
            </h2>
            <div className="w-24 h-1 bg-blue-900 mb-8" />
            <p className="text-lg text-gray-700 mb-8">
              We offer a range of premium services to make your time at Bayamo Beach Bar truly special. From intimate
              gatherings to large celebrations, our team will ensure every detail is perfect.
            </p>
            <a
              href="#contact"
              className="inline-block border-b-2 border-blue-900 text-gray-900 pb-1 text-sm tracking-widest hover:text-blue-900 transition-colors"
            >
              INQUIRE NOW
            </a>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="bg-white p-8">
                  <div className="mb-6 flex justify-between items-center">
                    <service.icon className="w-8 h-8 text-blue-900" />
                    <span className="text-sm text-gray-400">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
