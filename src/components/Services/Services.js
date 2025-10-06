import React from 'react';

const ServiceCard = ({ icon, title }) => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
    <img src={icon} alt={title} className="h-12 w-12 mb-3" />
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

const Services = () => {
  return (
    <div className="bg-blue-100 py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Services We Provide</h2>
        <p className="text-lg mb-12 text-blue-700">No matter the size of the Job, Our Pros are up for it. We cover a broad range of services tailored to your home’s unique needs.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceCard icon="/icons/roofing.svg" title="Roofing" />
          <ServiceCard icon="/icons/windows.svg" title="Windows" />
          <ServiceCard icon="/icons/solar.svg" title="Solar" />
          <ServiceCard icon="/icons/hvac.svg" title="HVAC" />
          <ServiceCard icon="/icons/bathroom.svg" title="Bathroom" />
          <ServiceCard icon="/icons/handyman.svg" title="Handyman" />
          <ServiceCard icon="/icons/kitchen.svg" title="Kitchen" />
          <ServiceCard icon="/icons/gutter.svg" title="Gutter" />
          <ServiceCard icon="/icons/walk-in-tub.svg" title="Walk-In Tubs" />
        </div>

        <div className="mt-8">
          <button className="bg-green-500 text-white py-3 px-8 rounded-full text-xl">
            Get A Quote Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
